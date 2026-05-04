#!/usr/bin/env bash
# Zenn Book「Claude Code 完全ガイド」の全47章を Markdown として書き出す。
# 依存: browser-use CLI, jq, python3
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT/docs/research/zenn-claude-code-basic"
LIST="$OUT_DIR/_chapters.json"
JS_FILE="$ROOT/scripts/zenn-html-to-md.js"
URL_BASE="https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer"

JS="$(cat "$JS_FILE")"
TOTAL=$(jq 'length' "$LIST")

echo "Total chapters: $TOTAL"
echo "Output dir: $OUT_DIR"

# 引数で開始章を指定できるようにする（再開用）
START="${1:-1}"

for i in $(seq 0 $((TOTAL - 1))); do
  N=$(jq -r ".[$i].n" "$LIST")
  SLUG=$(jq -r ".[$i].slug" "$LIST")
  TITLE=$(jq -r ".[$i].title" "$LIST")
  PADDED=$(printf "%02d" "$N")

  if [ "$N" -lt "$START" ]; then continue; fi

  FILE="$OUT_DIR/chapter-${PADDED}-${SLUG}.md"
  if [ -f "$FILE" ] && [ "$(wc -c <"$FILE")" -gt 1000 ]; then
    echo "[skip] $PADDED $SLUG (already exists)"
    continue
  fi

  echo "[$PADDED/$TOTAL] $SLUG ..."
  browser-use open "$URL_BASE/$SLUG" >/dev/null
  sleep 6

  RAW=$(browser-use eval "$JS" 2>/dev/null || true)
  CLEAN="${RAW#result: }"

  MD=$(printf '%s' "$CLEAN" | python3 -c "
import sys, json
try:
    d = json.loads(sys.stdin.read(), strict=False)
    if 'error' in d:
        print('ERROR:' + d['error'])
    else:
        print(d['markdown'])
except Exception as e:
    print('PARSE_ERROR:' + str(e))
")

  if [[ "$MD" == ERROR:* ]] || [[ "$MD" == PARSE_ERROR:* ]]; then
    echo "  failed: $MD" >&2
    # 1度だけ再試行
    sleep 4
    RAW=$(browser-use eval "$JS" 2>/dev/null || true)
    CLEAN="${RAW#result: }"
    MD=$(printf '%s' "$CLEAN" | python3 -c "
import sys, json
try:
    d = json.loads(sys.stdin.read(), strict=False)
    print(d.get('markdown', 'ERROR:'+d.get('error','unknown')))
except Exception as e:
    print('PARSE_ERROR:' + str(e))
")
    if [[ "$MD" == ERROR:* ]] || [[ "$MD" == PARSE_ERROR:* ]]; then
      echo "  retry also failed, skipping" >&2
      continue
    fi
  fi

  {
    echo "---"
    echo "chapter: $N"
    echo "slug: $SLUG"
    echo "title: \"$TITLE\""
    echo "source: $URL_BASE/$SLUG"
    echo "fetched_at: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
    echo "---"
    echo
    echo "# $TITLE"
    echo
    echo "$MD"
  } > "$FILE"

  CHARS=$(wc -m <"$FILE" | tr -d ' ')
  echo "  -> $FILE ($CHARS chars)"
done

browser-use close >/dev/null 2>&1 || true
echo "Done."
