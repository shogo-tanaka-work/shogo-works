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

（記入欄。次の取りこぼしが出たらここに追記し、定期的に source-catalog.md へ昇格させる）
