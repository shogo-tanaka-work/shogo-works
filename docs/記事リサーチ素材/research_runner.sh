#!/bin/bash

# ============================================
# research_runner.sh
# 3テーマのリサーチをClaude Codeで順番に実行
# cronで呼び出すことを想定
# ============================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROMPTS_DIR="$SCRIPT_DIR/prompts"
OUTPUTS_DIR="$SCRIPT_DIR/outputs"
DATE=$(date +%Y%m%d)
LOG_FILE="$OUTPUTS_DIR/run_$DATE.log"

mkdir -p "$OUTPUTS_DIR"

echo "========================================" | tee -a "$LOG_FILE"
echo "リサーチ開始: $(date)" | tee -a "$LOG_FILE"
echo "========================================" | tee -a "$LOG_FILE"

TOPICS=("context-engineering" "prompt-engineering" "harness-engineering")

for TOPIC in "${TOPICS[@]}"; do
  echo "" | tee -a "$LOG_FILE"
  echo "[$(date +%H:%M:%S)] 開始: $TOPIC" | tee -a "$LOG_FILE"

  OUTPUT_FILE="$OUTPUTS_DIR/${TOPIC}_${DATE}.md"
  PROMPT_FILE="$PROMPTS_DIR/${TOPIC}.txt"

  if [ ! -f "$PROMPT_FILE" ]; then
    echo "[ERROR] プロンプトファイルが見つかりません: $PROMPT_FILE" | tee -a "$LOG_FILE"
    continue
  fi

  claude \
    --allowedTools "WebSearch,WebFetch,Read,Write,Bash(mkdir:*)" \
    --dangerously-skip-permissions \
    -p "$(cat "$PROMPT_FILE")" \
    > "$OUTPUT_FILE" 2>> "$LOG_FILE"

  EXIT_CODE=$?

  if [ $EXIT_CODE -eq 0 ]; then
    echo "[$(date +%H:%M:%S)] 完了: $TOPIC → $OUTPUT_FILE" | tee -a "$LOG_FILE"
  else
    echo "[$(date +%H:%M:%S)] エラー (exit $EXIT_CODE): $TOPIC" | tee -a "$LOG_FILE"
  fi

  # 次のジョブまで5分待機（コンテキストリセットのため）
  if [ "$TOPIC" != "harness-engineering" ]; then
    echo "[$(date +%H:%M:%S)] 次のトピックまで5分待機..." | tee -a "$LOG_FILE"
    sleep 300
  fi
done

echo "" | tee -a "$LOG_FILE"
echo "========================================" | tee -a "$LOG_FILE"
echo "全リサーチ完了: $(date)" | tee -a "$LOG_FILE"
echo "========================================" | tee -a "$LOG_FILE"

# 完了通知（オプション：Discordウェブフックがあれば）
# DISCORD_WEBHOOK="YOUR_WEBHOOK_URL"
# if [ -n "$DISCORD_WEBHOOK" ]; then
#   curl -s -X POST "$DISCORD_WEBHOOK" \
#     -H "Content-Type: application/json" \
#     -d "{\"content\": \"✅ リサーチ完了: $DATE\\n3ファイル生成済み\"}"
# fi
