# リサーチ学習ログ

リサーチ実走で発見した「新しい一次ソース URL」「取りこぼしの原因と対処」を日付付きで蓄積する。月次で `source-catalog.md` 本体に取り込む候補とする。

エントリは新しい順に上から積む。各エントリは「日付」「学び」「原因」「対処」「カタログ取り込み判断」を残す。

---

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
