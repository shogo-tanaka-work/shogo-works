# 出力フォーマット

## 日次サマリー

毎回このファイルを作成します。

`docs/research/daily-ai-updates/YYYY-MM-DD.md`

このファイルは日次サマリーと索引用です。更新の詳細本文はここに書きません。

テンプレート:

```markdown
---
date: YYYY-MM-DD
title: "AI公式アップデート日次チェック YYYY-MM-DD"
fetched_at: YYYY-MM-DDTHH:mm:ss+09:00
window_start: YYYY-MM-DDTHH:mm:ss+09:00
window_end: YYYY-MM-DDTHH:mm:ss+09:00
---

# AI公式アップデート日次チェック YYYY-MM-DD

## サマリー

- 対象期間: ...
- 更新あり: N件
- 更新なし: N件
- 取得失敗: N件

## 更新あり

| service | published_at | title | detail |
| --- | --- | --- | --- |
| n8n | 2026-05-04T04:52:26Z | n8n 2.18.6 | ../zenn-n8n-basic/official-updates/2026-05-04T045226-n8n-2-18-6.md |

## 更新なし

- Claude: 公式Release Notesに対象期間内の新規日付なし。

## 取得失敗・保留

- Pika: 公式Blogが取得できなかったため、後で再確認。

## チェック対象

- ChatGPT / OpenAI: URL
- Gemini: URL
```

## 詳細ファイル

更新がある場合、1更新につき1ファイルを既存のツールフォルダに作成します。

`docs/research/<tool-folder>/official-updates/YYYY-MM-DDTHHMMSS-service-or-version-slug.md`

例:

- `docs/research/zenn-n8n-basic/official-updates/2026-05-04T045226-n8n-2-18-6.md`
- `docs/research/zenn-claude-release-basic/official-updates/2026-03-25T000000-claude-interactive-apps-mobile.md`
- `docs/research/zenn-dify-basic/official-updates/2026-04-29T040608-dify-v1-14-0.md`

テンプレート:

```markdown
---
date: YYYY-MM-DD
title: "..."
service: "..."
source: https://...
fetched_at: YYYY-MM-DDTHH:mm:ss+09:00
published_at: YYYY-MM-DDTHH:mm:ssZ
date_precision: timestamp
---

# YYYY-MM-DD ...

## 公式内容の日本語要約

...

## できるようになったこと

- ...

## 影響範囲

- 対象ユーザー:
- 対象プラン:
- API / UI / 管理者機能:

## 教材化メモ

...

## 原文確認

- 公式見出し: ...
- 公式URL: ...
- 原文全文は公式ページで確認してください。
```

## ファイル名

- ファイル名は小文字ASCIIにします。
- timestampが取れる場合は `YYYY-MM-DDTHHMMSS-` を先頭に付けます。
- 日付しか取れない場合は `YYYY-MM-DDT000000-` にし、frontmatterに `date_precision: date-only` を付けます。
- service名とversionがある場合はファイル名に含めます。
- 詳細ファイルを `docs/research/daily-ai-updates/YYYY-MM-DD/` には作りません。この場所は意図的に使いません。

## 著作権対応

- Release Notes全文を貼りません。
- 原文の全文翻訳を貼りません。
- 直接引用は必要最小限にします。
- 日本語要約と公式URLを残します。
