---
name: weekly-ai-news-rollup
description: |
  週次のAIニュース運用を担うSkill。(1) `source-catalog.md` の「週次確認ソース」（GitHub Copilot / Microsoft Copilot / n8n / Cursor / xAI / Grok / Manus / Dify）を巡回し、
  (2) Claude Code と Codex の直近7日ぶんのパッチリリースをツールごとに1本のロールアップ記事へまとめ、
  (3) PR 作成までを行う。日次パイプライン（`daily-ai-news-pipeline`）が扱わない範囲だけを担当する。
  「週次AIニュース回して」「weekly-ai-news-rollup 回して」「週次ロールアップ作って」で発動する。
---

# Weekly AI News Rollup

## 目的

日次パイプラインは「日次巡回6ソース × 直近24時間」だけを見る。本Skillはその外側にある2つの穴を、週1回まとめて埋める。

1. **週次確認ソースの巡回**。日次では見ないツールの更新を拾う。
2. **Claude Code / Codex のロールアップ**。この2ツールはほぼ毎日リリースが出るため、日次側では
   **バージョン番号が付いたリリースを内容にかかわらず `見送り（週次ロールアップへ）` として詳細メモだけ残し**、
   本Skillが1週間ぶんを1本へまとめる。権限・セキュリティ・資格情報の修正が含まれるものも対象に入る。

日次側の判定条件（何を単独記事にし、何をロールアップへ回すか）の正本は
`.agents/skills/ai-news-publisher/references/selection-rubric.md` の「日次リリース型ツールの扱い」である。本Skillで再定義しない。

## 起動時に確認すること

- **作業ディレクトリ**: `/Users/shogo/Documents/ai-business-os/10_projects/shogo-works/repo`
- **窓**: `window_start = 前週サマリーの window_end`。前週サマリーが無い場合は `window_start = 実行時刻 - 7日` とし、その旨をサマリー冒頭の補足メモに残す。
- **base ブランチ**: 既定 `main`
- **Knowledge 反映**: 既定スキップ

## 手順

### Phase A. ブランチ準備

1. `git fetch origin`
2. `git checkout main && git pull --ff-only origin main`
3. 作業ツリーに無関係な未コミット差分があれば、stash や破棄をせず状況を報告してから判断を仰ぐ。
4. `git checkout -b feat/weekly-ai-rollup-YYYY-MM-DD`

### Phase B. 週次確認ソースの巡回

`.agents/skills/daily-ai-update-monitor/` の SKILL.md と `references/source-catalog.md` を読み、
**`## 週次確認ソース` のみ**を巡回する（`## 日次巡回ソース` は日次パイプラインが担当済みなので見ない）。

- 収集ルール、詳細ファイルの書式、`category` の付け方、二次ソース → 一次ソース逆引きは `daily-ai-update-monitor` の規約に従う。
- 詳細ファイルの出力先も同じく `docs/research/<tool-folder>/official-updates/YYYY-MM-DDTHHMMSS-<slug>.md`。
- 週次サマリーは `docs/research/weekly-ai-updates/YYYY-MM-DD.md` に作成する。更新ゼロでも作成する。
- **`aiNews.tool` enum に無いツールは記録しない**（正本は `src/content.config.ts`）。
- 確認したが更新が無かったソースは `更新なし` として残す。確認していないものを「更新なし」と書かない。
- **廃止・EOL 告知を最初に拾う。** 特に GitHub Copilot は発効日・退役日が明記されているものが多い。期限までの残日数を週次サマリーに書く。

### Phase C. Claude Code / Codex のロールアップ記事

対象は `docs/research/zenn-claude-code-release-basic/official-updates/` と
`docs/research/openai-codex/official-updates/` の、**窓内に作成された詳細メモのうち日次で単独記事化されなかったもの**。

単独記事化済みかどうかは、当該期間の日次サマリー（`docs/research/daily-ai-updates/*.md`）の「公開記事化結果」で確認する。
`見送り（週次ロールアップへ）` と記録されたものがロールアップ対象である。

- **ツールごとに1本**。両方に対象があれば最大2本、片方だけなら1本、対象ゼロならそのツールの記事は作らない。
- **セキュリティ修正や、利用者側の対応が必要な変更が含まれる週は、「今週の要点」の冒頭でそれを最初に書く。** 日次で単独記事にしないぶん、週次が唯一の告知面になる。埋もれさせない。
- 対象が1件しかない週は記事を作らず、週次サマリーに `ロールアップ見送り（対象1件）` と残す。まとめる意味が無いためである。
- 出力先は通常の記事と同じ `src/content/ai-news/<tool>/<slug>.mdx`、教材化メモも対で
  `src/content/ai-news-notes/<tool>/<slug>.mdx` に作る。
- slug は `<tool>-weekly-YYYY-MM-DD`（週の終端日）とする。

#### ロールアップ記事の構成

frontmatter は通常記事と同じスキーマ（`src/content.config.ts` の `aiNews`）に従う。

- `title`: 「Claude Code 週次まとめ（M/D〜M/D） — <その週で最も効く1点>」のように、**版数ではなく変化の中身を主語にする**
- `date`: 週の終端日
- `sourceUrl`: そのツールのリリース一覧 URL（Claude Code は CHANGELOG、Codex は GitHub Releases）
- `tags`: 通常記事と同じ付け方に加えて `weekly-rollup` を必ず含める

本文は次の3節にする。通常記事の4節構成は使わない。

1. **今週の要点** — 3〜5行。「読者が今週なにか対応する必要があるか」に最初に答える。無ければ「対応不要」と明言する。
2. **変更一覧** — バージョンごとではなく**テーマごと**にまとめる（権限まわり / 表示 / パフォーマンス / プラグイン、など）。
   各項目の末尾に該当バージョンを `(2.1.240, 2.1.243)` のように括弧で添える。版数を見出しにしない。
3. **拾わなかったもの** — 内部改善・軽微な修正がある旨を1〜2行で触れ、公式 CHANGELOG へのリンクで締める。全件を書き写さない。

**分量は1本あたり2,000字以内**。日次の速報記事より短くする。1週間ぶんを網羅することが目的ではなく、
「今週この2ツールで何が起きたか」を1回の読み切りで掴ませることが目的である。

### Phase D. 検証

1. `npm run check` を流し、errors 0 件を確認する
2. `git status` と `git diff --stat` で無関係なファイルの混入が無いことを確認する

### Phase E. コミット分割・push・PR 作成

**コミット分割**:

1. **コミット1（必ず作る）**: `docs/research/` 配下のみ。`git add -f` でステージングする（`docs/research` は `.gitignore` 対象）
   - タイトル例: `feat: YYYY-MM-DD AIニュース週次チェック（週次ソース・更新N件）`
2. **コミット2以降（対象がある場合のみ）**: ロールアップ記事と教材化メモの対。**ツールごとにコミットを分ける**
   - タイトル例: `feat: Claude Code 週次まとめ（M/D〜M/D）を追加`

Conventional Commits 形式、本文は日本語、末尾に Co-Authored-By を付ける。

```bash
git push -u origin feat/weekly-ai-rollup-YYYY-MM-DD
gh pr create --base main --title "feat: YYYY-MM-DD AIニュース週次チェック（<ロールアップN本>）" --body "..."
```

PR body には窓、週次ソースの更新件数、ロールアップ対象件数と本数、取得失敗を書く。

## 例外・分岐

| 状況 | 挙動 |
|---|---|
| 週次ソースに窓内更新なし・ロールアップ対象もなし | コミット1のみ（更新なしサマリー）で PR を作る |
| ロールアップ対象が1件のみ | 記事を作らず `ロールアップ見送り（対象1件）` として週次サマリーに残す |
| 日次パイプラインが数日落ちていて詳細メモが欠けている | 欠測日を週次サマリーの補足メモに明記する。欠測分の遡り調査はしない（窓が二重になるため） |
| 一部ソース取得失敗 | 二次ソース → 一次逆引きを試み、`保留（公式未確認）` で残す |
| `npm run check` で errors | コミット・push を行わず、修正してから再検証 |

## 禁止事項

- `main` への直接 push
- `git add .` / `git add -A`
- `--no-verify` での hook スキップ
- 日次巡回6ソースの再巡回（日次パイプラインの担当。二重記事化の原因になる）
- 単独記事化済みの更新をロールアップへ再掲する（重複）
- ロールアップ記事へ全バージョンの changelog を書き写す

## 参照ファイル

- `.agents/skills/daily-ai-update-monitor/references/source-catalog.md`（週次確認ソース一覧）
- `.agents/skills/daily-ai-update-monitor/references/output-format.md`（詳細ファイルの書式）
- `.agents/skills/ai-news-publisher/references/selection-rubric.md`（日次リリース型ツールの扱い）
- `.agents/skills/ai-news-publisher/references/output-format.md`（記事・教材化メモの書式）
