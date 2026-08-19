# 公式ソース一覧

日次確認では、次の公式ソースを使います。各製品について、できるだけ日付やtimestampが明確なソースを優先します。ソースに一時的にアクセスできない場合は、日次サマリーの `取得失敗・保留` に記録して、残りの確認を続けます。

## 日次巡回ソース

日次確認では次の6ソースを毎回すべて確認します。いずれも `src/content.config.ts` の `aiNews.tool` enum に対応するツールです。

| ツール | 主ソース | 補助ソース | 想定更新頻度 | 詳細出力先 |
| --- | --- | --- | --- | --- |
| ChatGPT / OpenAI | https://help.openai.com/en/articles/6825453-chatgpt-release-notes | https://openai.com/news/、https://openai.com/ja-JP/news/、https://openai.com/news/company-announcements/、https://openai.com/news/research/、https://openai.com/news/product-releases/、https://openai.com/news/safety-alignment/、https://openai.com/news/engineering/、https://openai.com/news/security/、https://openai.com/news/global-affairs/、https://openai.com/news/ai-adoption/、https://openai.com/index/ 個別ポスト、https://openai.com/academy/、https://openai.com/stories/、https://openai.com/business/、https://openai.com/solutions/、https://status.openai.com/ | 週数回 | docs/research/zenn-chatgpt-openai-basic/official-updates |
| OpenAI Codex | https://github.com/openai/codex/releases | https://learn.chatgpt.com/docs/changelog（`developers.openai.com/codex/changelog` から 308 リダイレクト）、https://developers.openai.com/codex/hooks | ほぼ毎日（alpha含む） | docs/research/openai-codex/official-updates |
| Gemini | https://blog.google/products-and-platforms/products/gemini/ | https://workspaceupdates.googleblog.com/（週次Recap + 個別ポスト） | 週数回 | docs/research/zenn-gemini-release-basic/official-updates |
| Claude | https://support.claude.com/en/articles/12138966-release-notes | https://www.anthropic.com/news、https://claude.com/blog、https://aws.amazon.com/about-aws/whats-new/、https://aws.amazon.com/blogs/machine-learning/、https://platform.claude.com/docs/ | 週1〜2回 | docs/research/zenn-claude-release-basic/official-updates |
| Claude Code | https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md | https://github.com/anthropics/claude-code/releases | ほぼ毎日 | docs/research/zenn-claude-code-release-basic/official-updates |
| Cloudflare | https://developers.cloudflare.com/changelog/ | https://blog.cloudflare.com/、https://blog.cloudflare.com/tag/ai/、製品別RSS（下記）、https://www.cloudflarestatus.com/ | ほぼ毎日 | docs/research/cloudflare/official-updates |

「想定更新頻度」は巡回時の「無更新が想定通りか異常か」を判別する目安です。`ほぼ毎日`カテゴリで何日も無更新が続く場合はソース取得失敗を疑います。

## 週次確認ソース

**日次巡回では確認しません。** ユーザーから週次確認の依頼があったとき、または日次巡回で他ソースから関連する言及を見つけたときだけ確認します。

| ツール | 主ソース | 補助ソース | 更新検出 /91日 | 詳細出力先 |
| --- | --- | --- | --- | --- |
| GitHub Copilot | https://github.blog/changelog/label/copilot/ | https://docs.github.com/en/copilot | 54 | docs/research/zenn-github-copilot-basic/official-updates |
| n8n | https://github.com/n8n-io/n8n/releases | https://docs.n8n.io/release-notes/ | 58 | docs/research/zenn-n8n-basic/official-updates |
| Cursor | https://cursor.com/changelog | https://cursor.com/blog、https://status.cursor.com/、https://forum.cursor.com/c/announcements | 13 | docs/research/zenn-cursor-basic/official-updates |
| xAI / Grok | https://docs.x.ai/docs/release-notes | https://x.ai/news | 12 | docs/research/zenn-xai-grok-basic/official-updates |
| Manus | https://manus.im/blog | なし | 12 | docs/research/zenn-manus-basic/official-updates |
| Dify | https://github.com/langgenius/dify/releases | https://dify.ai/blog | 5 | docs/research/zenn-dify-basic/official-updates |

日次から外した理由は、実務での利用頻度と更新の性質です（2026-05-05〜2026-08-19 の91日実績）。

- **GitHub Copilot**: 更新検出54回・記事86本と実績は最多だが、実務での利用優先度が下がったため週次へ移した。**週次確認では廃止・EOL 告知を最初に拾う。** 記事86本のうち16本（19%）が期限付きの廃止告知（例: 「GitHub Spark 廃止、2026-08-31 までにエクスポート」「MAI-Code-1-Flash は 2026-09 に廃止」）で、週次だと把握が最大6日遅れる。**発効日・退役日が明記されているものは、期限までの残日数を日次サマリーに書く。**
- **n8n**: 更新検出58回と頻度は高いが、**マイナーアップデートが大半**でまとめて確認しても運用に支障がない。週次確認では stable / beta / 1.x backport が複数溜まるため、**タグが指す実バージョンと channel を必ず確認**する（`stable` / `beta` は moving tag）。
- **Cursor / xAI / Grok / Manus**: 更新は7日に1回程度。週次でも取りこぼしは少ない。
- **Dify**: 更新検出5回・記事2本。日次で確認しても「更新なし」と書く日が大半を占める。

週次確認を行った日は、日次サマリーの `更新なし` 節に「週次確認: GitHub Copilot / n8n / Cursor / xAI / Manus / Dify — 対象期間内の新規なし」のように1行で残します。確認していない日は書きません。**確認していないものを「更新なし」として記録しません。**
## 巡回対象から外したソース

次の5ソースは巡回しません。日次でも週次でも確認しません。

| ツール | 外した日 | 更新検出 /91日 | 記事化実績 | 外した理由 | 旧ソース |
| --- | --- | --- | --- | --- | --- |
| Genspark | 2026-08-19 | 5 | 0本 | enum に無い | https://www.genspark.ai/blog |
| ByteDance Seed | 2026-08-19 | 5 | 0本 | enum に無い | https://seed.bytedance.com/en/blog/ |
| Meta AI | 2026-08-19 | 2 | 0本 | enum に無い | https://ai.meta.com/blog/ |
| Pika | 2026-08-19 | 1 | 0本 | enum に無い | https://experiment.pika.art/blog（`pika.art/blog` から 307 リダイレクト） |
| Runway | 2026-08-19 | 5 | 5本 | 運用側で追う必要がなくなった | https://runway.com/changelog（`runwayml.com` から 308 リダイレクト） |

外した理由は2種類あります。

**enum に無い（Genspark / ByteDance Seed / Meta AI / Pika）**: `src/content.config.ts` の `aiNews.tool` に対応する値が無く、更新を見つけても速報記事を作れません。巡回コストだけが発生し、91日で記事化は0本でした。**再開する場合は、先に enum を追加します。** 追加は次の3ファイルをまとめて更新するのが前提で、1つでも欠けるとビルドが通らないか一覧ページにツールが出ません。

- `src/content.config.ts`（`aiNews.tool` の enum）
- `src/types/index.ts`（`AiNewsTool` union 型）
- `src/data/aiNews.ts`（`aiNewsTools` の slug / label / description）

**運用側の判断（Runway）**: enum（`runway`）は残っており記事化自体は可能ですが、動画生成まわりを追う必要がなくなったため外しました。再開する場合は enum の追加は不要で、この節から日次または週次の表へ戻すだけです。補助ソースとして `https://runway.com/news` と、Runway Dev（開発者/エンタープライズ向けAPIプラットフォーム）の変更履歴が出る `https://docs.dev.runwayml.com/api-details/api_changelog/` があります。

過去の詳細メモ（`docs/research/zenn-genspark-basic/`、`zenn-bytedance-seed-basic/`、`zenn-meta-ai-basic/`、`zenn-pika-basic/`、`zenn-runway-basic/`）は削除しません。再開時の履歴として残します。

## GitHub Releases取得コマンド

Dify（**週次確認ソース**。日次では実行しません）:

```bash
gh api -X GET 'repos/langgenius/dify/releases?per_page=100' --paginate
```

n8n（**週次確認ソース**。日次では実行しません）:

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

## Cloudflare changelog の RSS

全製品横断（対象外製品も含むため、タイトル先頭の製品名で絞り込む）:

```
https://developers.cloudflare.com/changelog/rss/index.xml
```

AI・エージェント関連の製品別フィード（存在を確認済み）:

```
https://developers.cloudflare.com/changelog/rss/workers-ai.xml
https://developers.cloudflare.com/changelog/rss/agents.xml
https://developers.cloudflare.com/changelog/rss/ai-gateway.xml
https://developers.cloudflare.com/changelog/rss/workers.xml
```

`pubDate` は製品によって時刻まで入るものと `00:00:00 GMT` 固定のものが混在します。`00:00:00 GMT` 固定のエントリは `date_precision: date-only` を付けます。

新しい製品のフィードを使う場合は、URL を推測せず `https://developers.cloudflare.com/fundamentals/new-features/available-rss-feeds/` で実在を確認してから追加します。

## ソース別の注意

- ChatGPT release notesは環境によって本文取得が不安定なことがあります。本文が取れない場合はOpenAI Newsを補助ソースとして使い、制限を日次サマリーに残します。
- OpenAI Status はCodex Cloud、Code Review、API等の障害が出るため、対象期間内のincidentは `category: incident` として日次サマリーに残します。短時間incidentは記事化せずresearch詳細に留めるのを基本にします。
- **OpenAI公式Blog**は、`openai.com/news/` トップ一覧だけでなく、カテゴリページ（Company / Research / Product / Safety / Engineering / Security / Global Affairs / AI Adoption）と日本語トップ `openai.com/ja-JP/news/` も確認します。新規アンカーが見えたら **`openai.com/index/<slug>/` 個別ポストの URL を必ず取得して日付・本文を確認**します。専用モデル発表（GPT-5.5-Cyber等）、限定プレビュー、特化版のアナウンスは個別ポスト側にしか詳細が載らないことがあります。
- **OpenAI Newsカテゴリはトップ一覧と差分が出ることがあります**。特に Engineering / Security は Codex、sandbox、agent実行環境、API基盤、セキュリティ実装の技術記事が出るため、製品リリースではなくてもCodex / API / enterprise導入に関わる場合は `category: enhancement` として記録します。
- **OpenAI公式サイトの1階層目セクション**も巡回対象にします。`openai.com/academy/`、`openai.com/stories/`、`openai.com/business/`、`openai.com/solutions/` など、`openai.com/<section>/<slug>/` 形式で日付付きページが公開されることがあります。Codex / ChatGPT / API / enterprise use case / Academy guide など、製品活用・機能・業務導入に関わる内容は更新候補として扱います。
- **OpenAI Codex** は GitHub Releases が一次情報で最も粒度が細かいです。安定版本文には `## New Features` / `## Bug Fixes` / `## Documentation` 等のセクションが含まれます。Hooks や Plugin など既存機能の派生改善は本文中の `Plugin details now show...` のような言い回しで表現されることが多いので、新規発表でなくても拾います（→ SKILL.md「派生改善も対象」ルール参照）。
- Claude Release Notesは、1つの日付見出しの下に複数更新が入ることがあります。別製品や別機能として明確に分かれる場合だけ、詳細ファイルを分けます。
- **Claude / Anthropic公式Blogは `anthropic.com/news` だけでなく `claude.com/blog` も確認します**。Claude Platform、Claude API、AWS / Bedrock / Vertex / Foundry 連携、Console、Managed Agents、Skills、MCP connector のような開発者向け発表は `claude.com/blog/<slug>` 側に出ることがあります。
- **Claude のクラウドプロバイダー連携はプロバイダー公式も一次情報として確認します**。特に AWS は `aws.amazon.com/about-aws/whats-new/` と `aws.amazon.com/blogs/machine-learning/` で Claude Platform on AWS / Bedrock 関連の GA・機能拡張を発表するため、`site:aws.amazon.com Claude Platform Anthropic` などで逆引きします。Anthropic公式に掲載が遅れる / 別ドメイン掲載される場合でも、AWS公式で確認できれば対象にします。
- Claude Codeはraw changelogが最も安定しています。
- **Cursor は週次確認ソースです**（日次では確認しません）。確認する場合、`cursor.com/changelog` の個別ポスト URL（例 `cursor.com/changelog/composer-2-5`、`cursor.com/changelog/MM-DD-YY`）の方が本文が詳しいため、トップ一覧で見出しを掴んだら必ず個別 URL を踏みます。メジャー版（`3.0`）と minor 機能名（`Composer 2.5`、`Shared Canvases`）と日付スラッグが混在するため、tag 名だけで重複判定しません。GitHub Releases は公式に未提供。`cursor.com/blog` 側にも re-branding 系・大型 UX 変更（"Meet the new Cursor"）が出るため両方確認します。
- **Cloudflare は全製品横断の changelog なので、AI・エージェント・開発者プラットフォーム関連に絞ります**。`developers.cloudflare.com/changelog/` には WAF、DNS、Magic Transit、Registrar、Stream など本Skillの対象外製品の更新が大量に混ざります。判定基準は「AI / エージェント / MCP / 開発者プラットフォームに関わるか」です。Workers AI、AI Gateway、AI Search、Agents（Agents SDK）、Vectorize、Workers、Durable Objects、Containers、Browser Rendering / Browser Run、Sandbox は対象。ネットワーク・セキュリティ製品でも **MCP や AI が絡む更新は製品を問わず対象**にします（例: Access の MCP server portal 関連）。
- **Cloudflare changelog は RSS が最も安定して日付を取れます**。全製品横断は `https://developers.cloudflare.com/changelog/rss/index.xml`、製品別は `https://developers.cloudflare.com/changelog/rss/<product>.xml`（`workers-ai`、`agents`、`ai-gateway`、`workers` などを確認済み）。RSS のタイトルは `<製品名> - <変更内容>` 形式で製品名が先頭に付くため、横断フィードのままでも対象製品を絞り込めます。フィード一覧は `https://developers.cloudflare.com/fundamentals/new-features/available-rss-feeds/`。
- **Cloudflare は changelog と公式Blogで粒度が違います**。大型発表（`Agents Week` のような週次テーマ、新製品、アーキテクチャ解説）は `blog.cloudflare.com` 側に詳細が出て、changelog には1〜2行の要約しか載らないことがあります。AIニュース記事化を判断するときは blog 側の該当ポストも確認します。AI 関連は `blog.cloudflare.com/tag/ai/` で絞り込めます。
- **Cloudflare Status も確認します**。`https://www.cloudflarestatus.com/` の Workers / Workers AI 系 incident は `category: incident` として記録します。データセンターのメンテナンス告知（GVA / TXL / LHR など地域コード単位）は対象外です。短時間 incident は記事化せず日次サマリーと詳細メモに留めます。
- **n8n は週次確認ソースです**（日次では確認しません）。確認する場合、GitHub Releases は必ず pagination 込みで見ます。HTMLの1ページ目だけを見て完了扱いにしません。週次では stable / beta / 1.x backport が複数溜まるため、**`stable` / `beta` が moving tag である点に注意**し、タグが指す実バージョンと channel を必ず確認します。
- **Workspace Updates Blog** は週次Recap（`weekly-recap-MM-DD-2026.html`）に集約されますが、**個別ポスト URL（`workspaceupdates.googleblog.com/2026/MM/<slug>.html`）の方が情報が詳細**で日付もはっきりします。多言語対応・地域ロールアウト・GA切替などは個別ポストにのみ載るため、Recap だけで完了扱いにしません。
- **Dify は週次確認ソースです**（日次では確認しません）。確認する場合、pre-release は対象期間内であれば `channel: pre-release` として含めます。

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
