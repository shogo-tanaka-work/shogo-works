# 公式ソース一覧

日次確認では、次の公式ソースを使います。各製品について、できるだけ日付やtimestampが明確なソースを優先します。ソースに一時的にアクセスできない場合は、日次サマリーの `取得失敗・保留` に記録して、残りの確認を続けます。

## 主要ソース

| ツール | 主ソース | 補助ソース | 想定更新頻度 | 詳細出力先 |
| --- | --- | --- | --- | --- |
| ChatGPT / OpenAI | https://help.openai.com/en/articles/6825453-chatgpt-release-notes | https://openai.com/news/、https://openai.com/ja-JP/news/、https://openai.com/news/company-announcements/、https://openai.com/news/research/、https://openai.com/news/product-releases/、https://openai.com/news/safety-alignment/、https://openai.com/news/engineering/、https://openai.com/news/security/、https://openai.com/news/global-affairs/、https://openai.com/news/ai-adoption/、https://openai.com/index/ 個別ポスト、https://openai.com/academy/、https://openai.com/stories/、https://openai.com/business/、https://openai.com/solutions/ | 週数回 | docs/research/zenn-chatgpt-openai-basic/official-updates |
| OpenAI Codex | https://github.com/openai/codex/releases | https://developers.openai.com/codex/changelog、https://developers.openai.com/codex/hooks | ほぼ毎日（alpha含む） | docs/research/openai-codex/official-updates |
| Gemini | https://blog.google/products-and-platforms/products/gemini/ | https://workspaceupdates.googleblog.com/（週次Recap + 個別ポスト） | 週数回 | docs/research/zenn-gemini-release-basic/official-updates |
| Claude | https://support.claude.com/en/articles/12138966-release-notes | https://www.anthropic.com/news、https://claude.com/blog、https://aws.amazon.com/about-aws/whats-new/、https://aws.amazon.com/blogs/machine-learning/、https://platform.claude.com/docs/ | 週1〜2回 | docs/research/zenn-claude-release-basic/official-updates |
| Claude Code | https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md | https://github.com/anthropics/claude-code/releases | ほぼ毎日 | docs/research/zenn-claude-code-release-basic/official-updates |
| GitHub Copilot | https://github.blog/changelog/label/copilot/ | https://docs.github.com/en/copilot | ほぼ毎日 | docs/research/zenn-github-copilot-basic/official-updates |
| Genspark | https://www.genspark.ai/blog | なし | 月数回 | docs/research/zenn-genspark-basic/official-updates |
| Manus | https://manus.im/blog | なし | 月数回 | docs/research/zenn-manus-basic/official-updates |
| Dify | https://github.com/langgenius/dify/releases | https://dify.ai/blog | 週1〜2回 | docs/research/zenn-dify-basic/official-updates |
| n8n | https://github.com/n8n-io/n8n/releases | https://docs.n8n.io/release-notes/ | ほぼ毎日（stable + pre-release） | docs/research/zenn-n8n-basic/official-updates |
| Meta AI | https://ai.meta.com/blog/ | https://www.meta.ai/ | 月数回 | docs/research/zenn-meta-ai-basic/official-updates |
| Runway | https://runwayml.com/changelog | なし | 月数回 | docs/research/zenn-runway-basic/official-updates |
| xAI / Grok | https://docs.x.ai/docs/release-notes | https://x.ai/news | 週1〜2回 | docs/research/zenn-xai-grok-basic/official-updates |
| ByteDance Seed | https://seed.bytedance.com/en/blog/ | なし | 月数回 | docs/research/zenn-bytedance-seed-basic/official-updates |
| Pika | https://pika.art/blog | https://pika.art/、https://pika.pika.page/posts | 月数回 | docs/research/zenn-pika-basic/official-updates |

「想定更新頻度」は巡回時の「無更新が想定通りか異常か」を判別する目安です。`ほぼ毎日`カテゴリで何日も無更新が続く場合はソース取得失敗を疑います。

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

OpenAI Codex:

```bash
gh api -X GET 'repos/openai/codex/releases?per_page=100' --paginate
```

Codex は stable（`rust-vX.Y.Z`）と alpha（`rust-vX.Y.Z-alpha.N`）が並行で出ます。stableのみ詳細ファイル化、alphaは日次サマリーで件数のみ言及するのを基本にします。

## ソース別の注意

- ChatGPT release notesは環境によって本文取得が不安定なことがあります。本文が取れない場合はOpenAI Newsを補助ソースとして使い、制限を日次サマリーに残します。
- **OpenAI公式Blog**は、`openai.com/news/` トップ一覧だけでなく、カテゴリページ（Company / Research / Product / Safety / Engineering / Security / Global Affairs / AI Adoption）と日本語トップ `openai.com/ja-JP/news/` も確認します。新規アンカーが見えたら **`openai.com/index/<slug>/` 個別ポストの URL を必ず取得して日付・本文を確認**します。専用モデル発表（GPT-5.5-Cyber等）、限定プレビュー、特化版のアナウンスは個別ポスト側にしか詳細が載らないことがあります。
- **OpenAI Newsカテゴリはトップ一覧と差分が出ることがあります**。特に Engineering / Security は Codex、sandbox、agent実行環境、API基盤、セキュリティ実装の技術記事が出るため、製品リリースではなくてもCodex / API / enterprise導入に関わる場合は `category: enhancement` として記録します。
- **OpenAI公式サイトの1階層目セクション**も巡回対象にします。`openai.com/academy/`、`openai.com/stories/`、`openai.com/business/`、`openai.com/solutions/` など、`openai.com/<section>/<slug>/` 形式で日付付きページが公開されることがあります。Codex / ChatGPT / API / enterprise use case / Academy guide など、製品活用・機能・業務導入に関わる内容は更新候補として扱います。
- **OpenAI Codex** は GitHub Releases が一次情報で最も粒度が細かいです。安定版本文には `## New Features` / `## Bug Fixes` / `## Documentation` 等のセクションが含まれます。Hooks や Plugin など既存機能の派生改善は本文中の `Plugin details now show...` のような言い回しで表現されることが多いので、新規発表でなくても拾います（→ SKILL.md「派生改善も対象」ルール参照）。
- Claude Release Notesは、1つの日付見出しの下に複数更新が入ることがあります。別製品や別機能として明確に分かれる場合だけ、詳細ファイルを分けます。
- **Claude / Anthropic公式Blogは `anthropic.com/news` だけでなく `claude.com/blog` も確認します**。Claude Platform、Claude API、AWS / Bedrock / Vertex / Foundry 連携、Console、Managed Agents、Skills、MCP connector のような開発者向け発表は `claude.com/blog/<slug>` 側に出ることがあります。
- **Claude のクラウドプロバイダー連携はプロバイダー公式も一次情報として確認します**。特に AWS は `aws.amazon.com/about-aws/whats-new/` と `aws.amazon.com/blogs/machine-learning/` で Claude Platform on AWS / Bedrock 関連の GA・機能拡張を発表するため、`site:aws.amazon.com Claude Platform Anthropic` などで逆引きします。Anthropic公式に掲載が遅れる / 別ドメイン掲載される場合でも、AWS公式で確認できれば対象にします。
- Claude Codeはraw changelogが最も安定しています。
- n8n GitHub Releasesは必ずpagination込みで確認します。HTMLの1ページ目だけを見て完了扱いにしません。
- **Workspace Updates Blog** は週次Recap（`weekly-recap-MM-DD-2026.html`）に集約されますが、**個別ポスト URL（`workspaceupdates.googleblog.com/2026/MM/<slug>.html`）の方が情報が詳細**で日付もはっきりします。多言語対応・地域ロールアウト・GA切替などは個別ポストにのみ載るため、Recap だけで完了扱いにしません。
- Difyのpre-releaseは、対象期間内であれば `channel: pre-release` として含めます。
- Pikaは日付付きchangelogが少ないため、公式Blogの日付を優先します。トップページ観測に留まる場合は `date_precision: observed` を付けます。`pika.pika.page/posts` が補助ソースとして本文を取りやすい場合があります。

## 二次ソース（一次ソース URL 探索の補助のみ）

一次ソースの掲載が遅延しているケース・公式声明が見当たらないが業界ニュースで報じられているケースに限り、以下の二次ソースを **URL 特定の誘導用途** で使えます。本文要約の根拠にはしません。

| 二次ソース | 主に使う対象 |
| --- | --- |
| https://www.bloomberg.com/ | 大型ビジネスディール（インフラ契約・買収） |
| https://9to5mac.com/、https://9to5google.com/ | Apple / Google 関連の前倒し報道 |
| https://www.helpnetsecurity.com/ | OpenAI / Anthropic のセキュリティ関連発表 |
| https://techcrunch.com/ | スタートアップ系の新機能発表 |
| https://releasebot.io/updates/ | 各ベンダーのリリース観測（公式遅延時の参照） |
| https://www.neowin.net/ | OpenAI / Microsoft 系の早期報道 |

二次ソースで知った発表は、必ず一次ソース URL を探してから記録します。一次ソースが確認できない場合は `status: 保留（公式未確認）` で日次サマリーに残し、二次ソース URL を併記します。

## 出力先ルール

- 日次サマリーだけ: `docs/research/daily-ai-updates/YYYY-MM-DD.md`
- 詳細ファイル: 上の表の `詳細出力先` に必ず書きます。
- 詳細ファイルを `docs/research/daily-ai-updates/YYYY-MM-DD/` には入れません。
