---
date: 2026-11-24
title: "AI Security for Apps のプロンプトログ方式の更新"
service: "Cloudflare"
source: https://developers.cloudflare.com/changelog/post/2026-11-24-ai-security-prompt-logging/
fetched_at: 2026-11-25T09:30:00+09:00
published_at: 2026-11-24
date_precision: date-only
category: enhancement
---

# AI Security for Apps のプロンプトログ方式の更新

## 公式内容の日本語要約

payload logging を設定し、cf.llm.prompt 系フィールドを参照する WAF カスタムルールで、抽出したプロンプト（抽出できない場合は全リクエスト本文）を保存する方式に変更。従来の AI Security Log Mode Ruleset の手順を置き換える。product: WAF。スコア4で見送り。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-24-ai-security-prompt-logging/
- 原文全文は公式ページで確認してください。
## 教材化メモ

既存の Log Mode Ruleset 利用者向けの移行情報。単独記事にするほどの影響はない。
