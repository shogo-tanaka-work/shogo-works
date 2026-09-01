# リサーチ学習ログ

リサーチ実走で発見した「新しい一次ソース URL」「取りこぼしの原因と対処」を日付付きで蓄積する。月次で `source-catalog.md` 本体に取り込む候補とする。

エントリは新しい順に上から積む。各エントリは「日付」「学び」「原因」「対処」「カタログ取り込み判断」を残す。

---

## 2026-07-10: Runway Devの変更履歴は消費者向けchangelogとは別ドメインに出る

### 学び: Runway Dev（開発者/エンタープライズAPIプラットフォーム）自身の変更履歴は `docs.dev.runwayml.com/api-details/api_changelog/` にある

- **発見**: 2026-07-08にRunway News（`runwayml.com/news/introducing-runway-dev`）で発表された「Runway Dev」が、消費者向け製品changelog（`runwayml.com/changelog`）に何日経っても反映されないため継続保留にしていたが、実際にはRunway Dev自身が別ドメインで独自のAPI changelogを運用しており、2026-07-08付で「Seedream 5.0 Pro in Runway API」というエントリが既に存在していた。
- **原因**: source-catalogのRunway補助ソースが`runwayml.com/news`のみで、Runway Devという新製品ライン自体が別ドメイン・別changelogを持つ可能性を想定していなかった。
- **対処**: source-catalog.mdのRunway行・注記に `docs.dev.runwayml.com/api-details/api_changelog/` を追加。「Runway Devの変更履歴は消費者向けchangelogではなくこちらに出る」という注記を追加。
- **カタログ取り込み判断**: 反映済み（2026-07-10）。

---

## 2026-07-09: Pika補助ソース `pika.pika.page/posts` は無関係の別サービスだった

### 学び: `pika.pika.page` は Pika Labs（AI動画生成の pika.art）ではなく、`Good Enough` 社のブログ執筆ツール「Pika」の公式ブログ

- **発見**: 日次巡回で `pika.pika.page/posts` を確認したところ、投稿内容（テーブル機能・変数挿入・Bandcamp埋め込み・多言語ブログ対応など）がAI動画/画像生成と無関係で、ブログCMS機能の話であることが判明。過去の日次サマリーでは「直前投稿2026-06-24」「直後投稿2026-07-08予定」という観測を`pika.pika.page`の投稿日から拾っており、Pika Labs本体の更新と誤認していた可能性が高い。
- **原因**: source-catalogのPika補助ソースに `https://pika.pika.page/posts` を「本文を取りやすい補助ソース」として登録していたが、ドメイン名の類似（pika）のみで同一サービスと誤認していた。
- **対処**: source-catalog.md のPika行・注記から `pika.pika.page` を削除。Pika Labs（pika.art）の補助確認は `pika.art/` トップページ観測のみとする。過去の日次サマリーで「pika.pika.page由来の観測」を根拠にしていた記述は、今後参照する際は無効な情報として扱う。
- **カタログ取り込み判断**: 反映済み（2026-07-09）。

---

## 2026-06-04: openai.com 個別ポストの取りこぼし（403ブロック）

### 学び: openai.com はサーバー直アクセス（WebFetch / curl）を 403 で全面ブロックする

- **発見**: 日次巡回で `openai.com/news`・`openai.com/index/<slug>` が WebFetch も curl（ブラウザUA付き）も 403。結果、GPT-Rosalind 新機能・Wasmer×Codex 事例・frontier governance blueprint・public-policy-agenda の個別ポストを初回で取りこぼし、ユーザー指摘で追補した。
- **原因**: Cloudflare のボット保護。`help.openai.com` だけでなく `openai.com` 本体ドメインも対象。検索スニペット経由でしか日付・本文を確認できない。
- **対処**:
  - OpenAI 個別ポストは **WebSearch（および二次報道）で本文・公開日を確認**するフローを正規ルートにする。`openai.com/index/<slug>` を直接 fetch できる前提で巡回しない。
  - 可能なら外部のアナウンス集約（ユーザー提供の「OpenAI最新情報」フィードや releasebot.io）と突き合わせて取りこぼしを検知する。
  - gemini-cli の googleSearch は trusted-folder 制約（exit 55）でこのリポジトリ内から使えない場合がある。WebSearch を一次手段にする。
- **カタログ取り込み判断**: source-catalog.md の OpenAI 行に「openai.com は直 fetch 不可・WebSearch 経由で確認」の注記を追加する候補。次月レビューで反映。

---

## 2026-05-15: OpenAI Status / Runway News / xAI記事カテゴリの補強

### 学び1: OpenAI StatusはCodex / Code Review incidentの一次情報になる

- **発見**: OpenAI Status「Codex Cloud and Code Review experiencing high failure rate」（2026-05-14）。
- **原因**: source-catalogに `status.openai.com` がなく、incident categoryを定義していても巡回対象が不足していた。
- **対処**: ChatGPT / OpenAI補助ソースに `https://status.openai.com/` を追加し、Codex Cloud / Code Review / API incidentは `category: incident` として記録するルールを追加。
- **カタログ取り込み**: 反映済み（2026-05-15）。

### 学び2: Runway大型発表はchangelogではなくNewsに出ることがある

- **発見**: Runway News「Introducing Runway Agent」（2026-05-13）。今回の2026-05-15日次窓からは外れるが、前日調査でchangelogだけを見ると漏れる可能性がある。
- **原因**: source-catalogのRunway補助ソースが空で、`runwayml.com/news` を巡回していなかった。
- **対処**: Runway補助ソースに `https://runwayml.com/news` を追加し、SKILL.mdにもNews確認ルールを追加。
- **カタログ取り込み**: 反映済み（2026-05-15）。

### 学び3: xAI / Grok のAIニュースカテゴリが必要になった

- **発見**: xAI公式「Introducing Grok Build Early Beta」（2026-05-14）はcoding agent / CLIの大型発表で、既存のai-news enumに対応カテゴリがなかった。
- **原因**: source-catalogにはxAI / Grokがあるが、公開記事側 `aiNews.tool` enum と publisher skill のカテゴリ一覧に `xai-grok` がなかった。
- **対処**: `src/content.config.ts`、`src/types/index.ts`、`src/data/aiNews.ts` に `xai-grok` を追加し、publisher skillのカテゴリ一覧にも反映。
- **カタログ取り込み**: 反映済み（2026-05-15）。

## 2026-05-14: OpenAI Newsカテゴリ面 / 日本語トップの取りこぼし対策

### 学び: OpenAI Newsはカテゴリページに技術記事が目立つ形で出る

- **取りこぼし**: OpenAI Engineering / Security「Building a safe, effective sandbox to enable Codex on Windows」（`https://openai.com/index/building-codex-windows-sandbox/`、2026-05-13公開）。
- **原因**: `openai.com/news/` トップと `openai.com/index/<slug>/` 個別確認に寄っており、`openai.com/ja-JP/news/` のカテゴリカード、および `openai.com/news/engineering/` / `openai.com/news/security/` のカテゴリ面を明示巡回していなかった。
- **対処**: source-catalog の OpenAI 補助ソースに Newsカテゴリ（Company / Research / Product / Safety / Engineering / Security / Global Affairs / AI Adoption）と日本語トップを追加。SKILL.md にカテゴリ巡回ルールと、Engineering / Security の Codex / sandbox / agent runtime / API infrastructure / security implementation 記事を `category: enhancement` で拾う判断を追加。
- **カタログ取り込み**: 反映済み（2026-05-14追補）。

## 2026-05-13: OpenAI Academy / 1階層目セクションの取りこぼし対策

### 学び: OpenAI公式の dated page は `openai.com/index/` 以外にも出る

- **取りこぼし**: OpenAI Academy「How finance teams use Codex」（`https://openai.com/academy/how-finance-teams-use-codex/`、2026-05-12公開）。
- **原因**: source-catalog では `openai.com/news/` と `openai.com/index/<slug>/` 個別ポストを重視していたが、`openai.com/academy/` のような1階層目セクション配下を明示巡回対象にしていなかった。
- **対処**: source-catalog の ChatGPT / OpenAI 補助ソースに `openai.com/academy/`、`openai.com/stories/`、`openai.com/business/`、`openai.com/solutions/` を追加。SKILL.md の重要ルールにも `openai.com/<section>/<slug>/` 型の dated page を巡回対象にする旨を追加。
- **カタログ取り込み**: 反映済み（2026-05-13追補）。

## 2026-05-12: Claude Platform on AWS と Claude Code v2.1.139 の取りこぼし対策

### 学び1: Claude開発者向け発表は `claude.com/blog` とクラウドプロバイダー公式も見る

- **取りこぼし**: Claude Platform on AWS GA（2026-05-11公開）。Claude API / Console / Managed Agents / Skills / MCP connector などのネイティブClaude Platform機能をAWSアカウント経由で使える発表。
- **原因**: Claude本体の巡回対象が `support.claude.com` Release Notes と `anthropic.com/news` に寄っていた。開発者向け / クラウド連携の公式発表が `claude.com/blog` と AWS公式（What's New / Machine Learning Blog）に出るパターンをカタログ化していなかった。
- **対処**: source-catalog の Claude 補助ソースに `claude.com/blog`、AWS What's New、AWS Machine Learning Blog、Claude Platform Docs を追加。SKILL.md の重要ルールと追補検索クエリにも Claude Platform / AWS 逆引きを追加。
- **カタログ取り込み**: 反映済み（2026-05-12 PR追補）。

### 学び2: Claude Code Releases はタグ確認だけでなく本文の主要機能を抽出する

- **取りこぼしリスク**: Claude Code v2.1.139 の agent view / `/goal` / hooks 改善のように、1つのリリース本文に複数の大きな機能がまとまる。
- **原因**: GitHub Release の存在確認はできても、本文の `What's changed` を読み込まないと、ユーザー視点で重要な機能名をニュース判定に反映しづらい。
- **対処**: SKILL.md に「Claude Code は GitHub Releases本文の What's changed を読む」を追加。`claude agents` / agent view / `/goal` / hooks / plugin / MCP を明示的な抽出キーワードにした。
- **カタログ取り込み**: 反映済み（2026-05-12 PR追補）。

## 2026-05-09: 初版投入（漏れ4件の振り返り）

### 学び1: OpenAI 公式 Blog は `openai.com/index/<slug>/` 個別ポストを必ず確認する

- **取りこぼし**: GPT-5.5-Cyber 限定プレビュー（`openai.com/index/gpt-5-5-with-trusted-access-for-cyber/`、2026-05-08公開）
- **原因**: source-catalog で `openai.com/news/` が「補助ソース」扱いだったため、トップ一覧のみ確認して個別ポスト URL を踏まなかった。専用モデル発表・限定プレビュー・特化版アナウンスは個別ポスト側にしか詳細が載らない。
- **対処**: source-catalog のソース別注意に「`openai.com/index/<slug>/` 個別ポストの URL を必ず取得して日付・本文を確認」を追記。SKILL.md の重要ルールにも明文化。
- **カタログ取り込み**: 反映済み（2026-05-09 PR）。

### 学び2: OpenAI Codex は独立ツールとして扱う

- **取りこぼし**: Codex v0.130.0（2026-05-08T23:09Z、`github.com/openai/codex/releases`）
- **原因**: source-catalog の14ツールに Codex 自体が無かった。Claude Code は入っているが、OpenAI 系のエージェント CLI が盲点。
- **対処**: source-catalog 表に独立行追加。GitHub Releases 取得コマンド追加。詳細出力先を `docs/research/openai-codex/official-updates` に確定。
- **カタログ取り込み**: 反映済み（2026-05-09 PR）。

### 学び3: 「Stable 化済み機能の派生改善」を切り捨てない

- **取りこぼし**: Codex Hooks の派生改善（v0.124.0 で Stable 化済み、v0.130.0 でプラグイン経由可視化が追加）
- **原因**: 「初出ではないから対象外」という暗黙の判断が働いた。が、派生改善は導入決定への影響が大きい。
- **対処**: 候補判定に「既存機能の派生改善（category: enhancement）」を明記。output-format に `category` フィールドを追加。
- **カタログ取り込み**: 反映済み（2026-05-09 PR）。

### 学び4: Workspace Updates は週次 Recap だけで完了扱いにしない

- **取りこぼし**: Workspace Studio 多言語対応（日本語含む）。発表は 2026-05-07 で window 外だが、ロールアウトは 5/8〜10 で window 内。
- **原因**: 「公開日が窓内に入るか」だけで判定しており、発表日 vs ロールアウト日 の二軸を考えていなかった。また Recap は集約だが個別ポストの方が情報量が多い。
- **対処**: SKILL.md 候補判定に「窓判定の二軸化（rollout_date）」を追加。output-format に `rollout_date` フィールド追加。source-catalog で Workspace 個別ポスト優先を明記。
- **カタログ取り込み**: 反映済み（2026-05-09 PR）。

---

## 取り込み待ち（次月レビュー対象）

### 学び5: `openai.com` が403のとき、価格・モデル発表を拾う検索を必ず1本入れる

- **取りこぼし**: GPT-5.6 Luna 80% / Terra 20% の値下げ（2026-07-30 発表、`openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/`）。2026-07-31 のチェックで漏れ、2026-08-01 に追補で記録。
- **原因**: `openai.com/news/` と `help.openai.com` が直接フェッチ403のため、代替として `learn.chatgpt.com/docs/changelog` と OpenAI Status のみを見ていた。`learn.chatgpt.com` は ChatGPT / Codex のプロダクト更新は載るが、API の価格改定は載らない。403 のときに代替ソースが1系統に絞られ、`openai.com/index/<slug>` 側の発表が丸ごと死角になった。
- **対処**: `openai.com` が403の窓では、`learn.chatgpt.com` の確認に加えて価格・モデル系のWeb検索（例: `OpenAI price OR pricing OR deprecation <YYYY-MM> site:openai.com`）を最低1本走らせる。二次ソース（Axios / CNBC / VentureBeat 等）で発表を見つけたら一次 URL を逆引きして記録する。
- **カタログ取り込み**: 未（次月レビューで source-catalog.md の「ソース別の注意」へ昇格を検討）。

### 学び6: Runway の公式ドメインが `runwayml.com` → `runway.com` へ移行

- **検知**: 2026-08-03 の巡回で `https://runwayml.com/changelog` が `https://runway.com/changelog` へ 308 Permanent Redirect。
- **原因**: source-catalog に旧ドメイン（`runwayml.com`）が主ソースとして記載されたまま。リダイレクトが追従されない取得方法だと、1回のフェッチが空振りして「取得失敗」に計上されうる。
- **対処**: Runway の主ソースは `https://runway.com/changelog`、News は `https://runway.com/news` を先に踏む。`docs.dev.runwayml.com/api-details/api_changelog/`（Runway Dev API changelog）は 2026-08-03 時点で旧ドメインのままのため、両ドメインが並存している前提で扱う。
- **カタログ取り込み**: 未（次月レビューで source-catalog.md の Runway 行を新ドメインへ差し替え）。

### 学び7: 「製品 changelog に出ない種類の更新」をベンダーごとに把握する

- **取りこぼし**: 3件。Cursor の SpaceX 買収完了（2026-08-14T23:40Z、`cursor.com/blog/joining-spacex`）と AIUC-1 認証取得（2026-08-13、`cursor.com/blog/aiuc-1`）、Cloudflare の MCP トラフィック検出と Access for Workers（いずれも 2026-08-14、`blog.cloudflare.com`）。2026-08-16 の巡回で追補記録した。
- **原因**: 主ソース（`cursor.com/changelog`、Cloudflare changelog RSS）だけを見て「窓内の新規なし」と判定した。source-catalog には Cursor・Cloudflare とも「blog も確認する」と既に明記されており、**カタログの不備ではなく実行時の漏れ**である。主ソースに更新がないと、補助ソースの確認自体をスキップする挙動が繰り返されている。
- **対処**: ベンダーごとに「主ソースに載らない更新の種類」を意識する。Cursor は企業動向（買収・認証・組織）が blog のみ、Cloudflare は大型発表の詳細が blog（changelog は1〜2行）、Claude は開発者向けが `claude.com/blog`。**主ソースが空でも補助ソースを必ず踏む**。特に changelog が製品更新に限定されているベンダーでは、企業・ガバナンス系の発表が構造的に死角になる。
- **カタログ取り込み**: 未（次月レビューで source-catalog.md の「ソース別の注意」へ、ベンダー別の「主ソースに載らない更新の種類」として昇格を検討）。

### 学び8: OpenAI Codex changelog の URL が `learn.chatgpt.com` へ移動

- **検知**: 2026-08-16 の巡回で `https://learn.chatgpt.com/docs/changelog` が `https://learn.chatgpt.com/docs/changelog` へ 308 Permanent Redirect。
- **対処**: source-catalog の OpenAI Codex 補助ソース欄を `https://learn.chatgpt.com/docs/changelog` へ差し替える。学び5 で「`learn.chatgpt.com` は API の価格改定は載らない」と記録済みのため、その注記は引き続き有効。
- **カタログ取り込み**: 済（source-catalog.md の OpenAI Codex 行は更新済み）。あわせて 2026-08-27 に Knowledge 側の記事 45 本の一次ソースも新ドメインへ移行した。**単純置換は不可**で、`config-*` は `/docs/config-file/`、`agents-md`・`rules`・`speed`・`subagents` は `/docs/agent-configuration/`、`integrations/*` は `/docs/third-party/` のようにパスが再編されている。また **catch-all リダイレクトがあり、存在しないパスでも 308 を返す**。308 が返ることをリンク健在の根拠にしないこと。

### 学び9: `blog.cloudflare.com` の個別ポストは Exa がクロールエラーを返す

- **検知**: 2026-08-16 の巡回で、Exa の `web_fetch` が `blog.cloudflare.com` の個別ポスト2件に対して `CRAWL_INFRASTRUCTURE_ERROR` を返した。WebFetch では正常に取得できた。
- **対処**: Cloudflare blog は WebFetch を優先する。個別ポストの URL が不明な場合は、WebSearch（`allowed_domains: ["blog.cloudflare.com"]`）でスラッグを特定してから WebFetch で踏む。
- **カタログ取り込み**: 不要（取得手段の運用メモ。source-catalog 本体の変更は伴わない）。

### 学び10: 開発者向け changelog とヘルプセンター Release Notes で掲載日がずれ、後日「既出」の重複候補が上がる

- **検知**: 2026-09-01 の巡回で、ChatGPT Release Notes の `# August 31, 2026` 配下に「Use website tools in the desktop browser」（Site tools / WebMCP）と「Use the browser extension in more browsers」（Edge / Brave / Opera / Vivaldi）を発見し、記事化候補として2本を起草した。実装直前に既存記事を確認したところ、**両項目とも公開済み記事 `src/content/ai-news/chatgpt-openai/chatgpt-work-signed-in-websites-and-site-tools.mdx`（2026-08-25、マージ済み）で既に扱われていた**。既存記事の方が詳しく（Site tools は GPT-5.6 Sol / Terra が必要で Luna 非対応、Enterprise / Edu ワークスペースでは利用不可、拡張の設定は `Settings > Computer Use`）、重複記事を作る利益が無かったため見送りに切り替えた。
- **原因**: 既存記事は **開発者向け changelog** を根拠に 2026-08-25 付で書かれていた（本文に「同日、開発者向けの changelog では関連する2点が告知されています」とある）。一方、**ヘルプセンターの Release Notes に正式掲載されたのは 08-31** で、`# August 25, 2026` 配下には当該2項目は無い（08-25 配下は「Scheduled tasks can respond to app updates and be shared」と「ChatGPT Work can now complete tasks on signed-in websites」の2項目のみ）。**同じ更新が、ソースによって6日ずれて出現する。**
- **対処**: **記事を書く前に `src/content/ai-news/<tool>/` の既存ファイルを必ず確認する。** 「open な未マージ PR の確認」はパイプラインに組み込まれているが、**マージ済みの公開記事との重複チェックは手順に無かった**。未マージ PR だけでなく、直近2週間ぶんの既存記事の title / summary を突き合わせる。特に **OpenAI は先行ソース（開発者向け changelog）と Release Notes の二重掲載があるベンダー**として意識する。
- **副次的な注意**: 既存記事側の日付が実態とずれている（08-25 付だが公式 Release Notes 上は 08-31）。**過去記事の日付を遡って修正するかは運用判断**のため、本日は変更していない。修正する場合は `date` と本文の「同日」表現の両方を直す必要がある。
- **カタログ取り込み**: 未（次月レビューで、`ai-news-publisher/SKILL.md` の「実装完了前チェック」へ「既存記事との重複確認」を追加するか検討）。
