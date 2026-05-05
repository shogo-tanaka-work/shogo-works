# 公式ソース一覧

日次確認では、次の公式ソースを使います。各製品について、できるだけ日付やtimestampが明確なソースを優先します。ソースに一時的にアクセスできない場合は、日次サマリーの `取得失敗・保留` に記録して、残りの確認を続けます。

## 主要ソース

| ツール | 主ソース | 補助ソース | 詳細出力先 |
| --- | --- | --- | --- |
| ChatGPT / OpenAI | https://help.openai.com/en/articles/6825453-chatgpt-release-notes | https://openai.com/news/ | docs/research/zenn-chatgpt-openai-basic/official-updates |
| Gemini | https://blog.google/products-and-platforms/products/gemini/ | https://workspaceupdates.googleblog.com/ | docs/research/zenn-gemini-release-basic/official-updates |
| Claude | https://support.claude.com/en/articles/12138966-release-notes | https://www.anthropic.com/news | docs/research/zenn-claude-release-basic/official-updates |
| Claude Code | https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md | https://github.com/anthropics/claude-code/releases | docs/research/zenn-claude-code-release-basic/official-updates |
| GitHub Copilot | https://github.blog/changelog/label/copilot/ | https://docs.github.com/en/copilot | docs/research/zenn-github-copilot-basic/official-updates |
| Genspark | https://www.genspark.ai/blog | なし | docs/research/zenn-genspark-basic/official-updates |
| Manus | https://manus.im/blog | なし | docs/research/zenn-manus-basic/official-updates |
| Dify | https://github.com/langgenius/dify/releases | https://dify.ai/blog | docs/research/zenn-dify-basic/official-updates |
| n8n | https://github.com/n8n-io/n8n/releases | https://docs.n8n.io/release-notes/ | docs/research/zenn-n8n-basic/official-updates |
| Meta AI | https://ai.meta.com/blog/ | https://www.meta.ai/ | docs/research/zenn-meta-ai-basic/official-updates |
| Runway | https://runwayml.com/changelog | なし | docs/research/zenn-runway-basic/official-updates |
| xAI / Grok | https://docs.x.ai/docs/release-notes | https://x.ai/news | docs/research/zenn-xai-grok-basic/official-updates |
| ByteDance Seed | https://seed.bytedance.com/en/blog/ | なし | docs/research/zenn-bytedance-seed-basic/official-updates |
| Pika | https://pika.art/blog | https://pika.art/ | docs/research/zenn-pika-basic/official-updates |

## GitHub Releases取得コマンド

Dify:

```bash
gh api -X GET 'repos/langgenius/dify/releases?per_page=100' --paginate
```

n8n:

```bash
gh api -X GET 'repos/n8n-io/n8n/releases?per_page=100' --paginate
```

Claude Code:

```bash
gh api -X GET 'repos/anthropics/claude-code/releases?per_page=100' --paginate
```

## ソース別の注意

- ChatGPT release notesは環境によって本文取得が不安定なことがあります。本文が取れない場合はOpenAI Newsを補助ソースとして使い、制限を日次サマリーに残します。
- Claude Release Notesは、1つの日付見出しの下に複数更新が入ることがあります。別製品や別機能として明確に分かれる場合だけ、詳細ファイルを分けます。
- Claude Codeはraw changelogが最も安定しています。
- n8n GitHub Releasesは必ずpagination込みで確認します。HTMLの1ページ目だけを見て完了扱いにしません。
- Difyのpre-releaseは、対象期間内であれば `channel: pre-release` として含めます。
- Pikaは日付付きchangelogが少ないため、公式Blogの日付を優先します。トップページ観測に留まる場合は `date_precision: observed` を付けます。

## 出力先ルール

- 日次サマリーだけ: `docs/research/daily-ai-updates/YYYY-MM-DD.md`
- 詳細ファイル: 上の表の `詳細出力先` に必ず書きます。
- 詳細ファイルを `docs/research/daily-ai-updates/YYYY-MM-DD/` には入れません。
