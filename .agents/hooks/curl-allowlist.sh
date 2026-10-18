#!/bin/bash
# PreToolUse hook: curl のアクセス先を curl-allowed-domains.txt のドメインに限定する。
#
# 判定:
#   - curl を含まないコマンド: 何も出力しない（通常の権限判定に任せる）
#   - 全 URL のホストが許可リストにある単純な curl: allow（確認なしで実行）
#   - 許可リストにあるがパイプ・連結などを含む: 何も出力しない（通常どおり確認を求める）
#   - URL が見つからない、または許可リスト外のホストを含む: deny

set -euo pipefail

ALLOWLIST="$(dirname "$0")/curl-allowed-domains.txt"

INPUT=$(cat)

TOOL_NAME=$(printf '%s' "$INPUT" | jq -r '.tool_name // ""')
COMMAND=$(printf '%s' "$INPUT" | jq -r '.tool_input.command // ""')

decide() {
  local decision="$1" reason="$2"
  jq -n --arg decision "$decision" --arg reason "$reason" '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: $decision,
      permissionDecisionReason: $reason
    }
  }'
  exit 0
}

[[ "$TOOL_NAME" == "Bash" ]] || exit 0
# コマンドの位置（行頭・連結やパイプの直後）にある curl だけを対象にする。
# コミットメッセージなど文中の "curl" には反応させない
CURL_AT_COMMAND='(^|[;&|(`'$'\n'']|(sudo|xargs|env|command|exec)[[:blank:]]+)[[:blank:]]*curl([[:space:]]|$)'
[[ "$COMMAND" =~ $CURL_AT_COMMAND ]] || exit 0

[[ -r "$ALLOWLIST" ]] || decide "deny" "curl 許可リスト ($ALLOWLIST) を読めないため、curl を拒否しました。"

# scheme 付き URL からホストだけを取り出す（userinfo とポートは除く）
HOSTS=$(printf '%s' "$COMMAND" \
  | grep -oiE 'https?://([^/[:space:]"'"'"'?#@`]+@)?[a-z0-9.-]+(:[0-9]+)?' \
  | sed -E 's#^[^:]+://##; s#^.*@##; s#:[0-9]+$##' \
  | tr '[:upper:]' '[:lower:]' \
  | sort -u || true)

[[ -n "$HOSTS" ]] || decide "deny" "curl の URL は https:// 付きで、許可リストのドメインを指定してください。"

is_allowed_host() {
  grep -vE '^[[:space:]]*(#|$)' "$ALLOWLIST" | tr -d '[:blank:]' | grep -qxiF -e "$1"
}

while IFS= read -r host; do
  if ! is_allowed_host "$host"; then
    decide "deny" "curl のアクセス先 $host は許可リスト (.agents/hooks/curl-allowed-domains.txt) にありません。"
  fi
done <<< "$HOSTS"

# 自動許可は「curl + 安全なフラグ + 許可リストの https URL」だけの単純な1行に限る。
# 引用符・メタ文字・改行・未知のオプションなど、解釈が曖昧なものは通常どおり確認を求める。
SAFE_CHARS='^curl([[:blank:]]+[A-Za-z0-9_./:@%=?+,~-]+)+$'
[[ "$COMMAND" != *$'\n'* && "$COMMAND" != *$'\r'* && "$COMMAND" =~ $SAFE_CHARS ]] || exit 0

# 値を取らず、書き込み・送信・設定読み込みを伴わないフラグだけを許す
SAFE_FLAGS=' -s -S -L -f -I -i -sS -sL -fsSL -sSL -fsL --silent --show-error --location --fail --head --include --compressed '

# ホストは ":"・"/"・末尾のいずれかで終わる形に限り、userinfo は認めない
# 各ラベルは英数字で始まり英数字で終わる（"-" 始まりのホストを grep のオプションと誤読させない）
LABEL='[A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])?'
STRICT_URL="^https://(${LABEL}(\\.${LABEL})*)(:[0-9]+)?(/[A-Za-z0-9_./%=?+,~-]*)?\$"

read -r -a TOKENS <<< "$COMMAND"
for token in "${TOKENS[@]:1}"; do
  if [[ "$token" == -* ]]; then
    [[ "$SAFE_FLAGS" == *" $token "* ]] || exit 0
  elif [[ "$token" =~ $STRICT_URL ]]; then
    # 上の抽出は deny 判定用の緩いもの。自動許可は curl と解釈がずれない厳密な形式で再確認する
    is_allowed_host "${BASH_REMATCH[1]}" || exit 0
  else
    # scheme なし・http://・userinfo 付きなど、厳密な形式に合わない引数は自動許可しない
    exit 0
  fi
done

decide "allow" "curl のアクセス先がすべて許可リストのドメインです。"
