#!/bin/bash
# PreToolUse hook: rm コマンドと .env 系ファイルへのアクセスをブロックする。
#
# 入力: stdin に Claude Code が JSON を渡す
#   { "tool_name": "Bash" | "Read" | "Edit" | "Write" | ...,
#     "tool_input": { "command": "...", "file_path": "...", ... } }
#
# 出力: ブロック時は JSON で permissionDecision: "deny" を返す（exit 0）。
#       許可時は何も出力せず exit 0。

set -euo pipefail

INPUT=$(cat)

TOOL_NAME=$(printf '%s' "$INPUT" | jq -r '.tool_name // ""')
COMMAND=$(printf '%s' "$INPUT" | jq -r '.tool_input.command // ""')
FILE_PATH=$(printf '%s' "$INPUT" | jq -r '.tool_input.file_path // ""')

deny() {
  local reason="$1"
  jq -n --arg reason "$reason" '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: $reason
    }
  }'
  exit 0
}

is_env_path() {
  local path="$1"
  [[ "$path" =~ (^|/)\.env(\..+)?$ ]]
}

# 1. Bash: rm コマンドを禁止
if [[ "$TOOL_NAME" == "Bash" ]]; then
  # 単語境界で rm を検出。sudo rm にも対応。パス内の "rm" は誤検知しない
  if [[ "$COMMAND" =~ (^|[[:space:];&|])(sudo[[:space:]]+)?rm([[:space:]]|$) ]]; then
    deny "rm コマンドの実行は禁止されています。削除はユーザーが手動で行ってください。"
  fi

  # Bash 経由での .env 読み出し / 上書きも遮断（cat .env, > .env.local など）
  if [[ "$COMMAND" =~ (^|[[:space:];&|\<\>])\.env(\.[A-Za-z0-9_.-]+)?([[:space:];&|]|$) ]]; then
    deny ".env 系ファイルへの Bash 経由アクセスは禁止されています。"
  fi
fi

# 2. Read / Edit / Write 系: .env 系ファイルへのアクセスを禁止
case "$TOOL_NAME" in
  Read|Edit|Write|MultiEdit|NotebookEdit)
    if [[ -n "$FILE_PATH" ]] && is_env_path "$FILE_PATH"; then
      deny ".env 系ファイル ($FILE_PATH) へのアクセスは禁止されています。"
    fi
    ;;
esac

exit 0
