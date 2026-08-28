---
name: daily-ai-news-pipeline
description: |
  直近24時間のAI公式アップデート調査 → AIニュース記事化 → PR作成までを一気通貫で回すオーケストレータSkill。
  既存の `daily-ai-update-monitor`（公式ソース巡回）と `ai-news-publisher`（速報記事・教材化メモ作成）を順序付きで呼び出し、
  ブランチ作成・コミット分割・push・`gh pr create` の git/PR 運用までを定型化する。
  「AIニュース日次パイプライン回して」「daily-ai-news-pipeline 回して」「直近24h調査からPRまで」「日次AIニュース一気通貫」で発動する。
---

# Daily AI News Pipeline

## 目的

既存2スキルを毎回手で順番に起動するのをやめ、**1コマンドで「main から派生ブランチを切る → 24時間ぶんの公式更新を巡回 → 記事化 → check → コミット分割 → push → PR 作成」までを完了**させる。中身の規約（ソース一覧・選別基準・記事フォーマット）は既存スキルが持ち、本スキルは順序・分岐・git/PR 運用だけを担う。

## 委譲先スキル

| 工程 | 委譲先 | 責務 |
|---|---|---|
| 公式ソース巡回・日次サマリー・詳細メモ作成 | `.agents/skills/daily-ai-update-monitor/` | `docs/research/daily-ai-updates/YYYY-MM-DD.md` と `docs/research/<tool>/official-updates/*.md` を生成 |
| 仕分け・速報記事・教材化メモ作成 | `.agents/skills/ai-news-publisher/` | `src/content/ai-news/<tool>/*.mdx` と `src/content/ai-news-notes/<tool>/*.mdx` を生成 |

本スキル自身は内部実装を持たない。中身のルール変更が必要なら委譲先 SKILL.md を編集する。

**週次の範囲は本スキルの担当外である。** 週次確認ソース（GitHub Copilot / Microsoft Copilot / n8n / Cursor / xAI / Grok / Manus / Dify）の巡回と、Claude Code / Codex の週次ロールアップ記事は `weekly-ai-news-rollup` Skill が別 routine で担当する。本スキルからは実行しない。

**委譲先2つは `user-invocable: false` を設定してある。** `/` メニューに出ず、ユーザーが `/daily-ai-update-monitor` や `/ai-news-publisher` と打っても起動しない。オーケストレータである本スキルと取り違えるのを防ぐためである。Claude 側からは Skill tool で従来どおり呼べるので、本スキルの Phase B / C はそのまま動く。

ユーザーが工程の片方だけを求めた場合（「調査だけして」「research から記事化して」など）は、本スキルを通さず該当の委譲先を直接呼んでよい。その場合も委譲先の SKILL.md に書かれた完了条件（日次サマリーへの記録、教材化メモの作成）は満たす。

## 起動時に確認すること

- **作業ディレクトリ**: `/Users/shogo/Documents/ai-business-os/10_projects/shogo-works/repo`
- **窓**: `window_start = 前日サマリーの window_end`（連続性確保）、`window_end = 実行時刻 (Asia/Tokyo)`。前日サマリーが無い場合は `window_start = 実行時刻 - 24h` で代替し、その旨をサマリー冒頭の補足メモに残す。
- **base ブランチ**: 既定 `main`
- **Knowledge 反映**: 既定 **スキップ**（速報記事と教材化メモのみ。Knowledge への追記が必要と判断した場合だけ、別 PR で個別判断）
- **1セッション1回**: 下の「実行単位とトークン予算」に従う。

## 実行単位とトークン予算

**本パイプラインは1セッションにつき1回だけ実行する。**

ツール呼び出しのたびに会話全体が再送されるため、コストは「ターン数 × その時点の文脈サイズ」で効く。同一セッションで2回目・3回目を回すと、前回分の記事全文を毎ターン運ぶことになり、同じ作業量でも消費が数倍になる。実測では3回連続実行時、3回目は1回目の約4〜5倍かかっていた。

- 既に本パイプラインを完了したセッションで再度依頼された場合は、**実行前にその旨を伝え、新しいセッション（`/clear` 後）での実行を促す**。ユーザーが同一セッションでの続行を明示したときだけ、そのまま進める。
- 1回あたりの目安は、生成物合計で **30,000字以内**（速報記事＋教材化メモ＋詳細メモ＋日次サマリー）。超えそうな場合は Phase C の記事本数上限を先に効かせる。

### 予算配分の目安

| 成果物 | 目安 |
|---|---|
| 速報記事 | 最大4本 × 3,000字前後 |
| 教材化メモ | 記事と同数 × 800字以内 |
| 詳細メモ | 更新件数 × 1,000字以内 |
| 日次サマリー | 6,000字以内 |

上限を超えそうな場合は、記事を短くする前に**本数を絞る**。1本の内容を薄めるより、記事化するものを減らして残りを日次サマリーの見送り欄に残す方が、読者にとっても実行コスト的にも有利。

それでも収まらない日は、記事を1本2,000字前後へ短縮する（`業務インパクト` と `副業・個人活用視点` を各500字程度に圧縮）。これは常用せず、更新が集中した日の避難措置として使う。

## 手順

### Phase A. ブランチ準備

1. `git fetch origin`
2. `git checkout main && git pull --ff-only origin main`
3. 作業ツリーに未コミット差分があれば、本タスクと無関係であることを目視確認したうえで、そのまま放置（自分の変更ではないものを stash・破棄しない）。
4. `git checkout -b feat/daily-ai-update-YYYY-MM-DD`（YYYY-MM-DD は実行日 Asia/Tokyo）

### Phase B. daily-ai-update-monitor の起動

委譲先 SKILL.md と参照ファイル（`source-catalog.md` / `output-format.md` / `perception-gaps.md`）を読み込んだうえで、以下の出力を確認する:

- `docs/research/daily-ai-updates/YYYY-MM-DD.md`（必ず作成。更新ゼロでも作成）
- 更新があったツールごとの `docs/research/<tool>/official-updates/YYYY-MM-DDTHHMMSS-<slug>.md`

**重要**: `docs/research` は `.gitignore` で除外されているが、既存運用は `git add -f` で強制追加して履歴に残している。本スキルでも同様に `-f` で追加する。

### Phase C. ai-news-publisher の起動

委譲先 SKILL.md と参照ファイル（`publishing-map.md` / `selection-rubric.md` / `output-format.md`）を読み込んだうえで、Phase B の成果物を入力に **仕分け → 実装まで一気通貫** で進める（中間承認は挟まない。レビューは PR で行う）。

- AIニュース化するもの: `src/content/ai-news/<tool>/<slug>.mdx` と `src/content/ai-news-notes/<tool>/<slug>.mdx` を対で作成
- **記事は1回あたり最大4本**。候補が5件以上あるときは `selection-rubric.md` のスコア順に上位4件を選び、残りは日次サマリーの「公開記事化結果」に `見送り（本数上限）` として理由つきで残す
- **Claude Code / Codex のバージョンリリースは内容にかかわらず記事化しない**。`見送り（週次ロールアップへ）` として日次サマリーに残す。例外はバージョンリリースではない独立発表と、期限が明記された告知の2つだけで、その場合も両ツール合わせて1回2本まで（条件は `selection-rubric.md` の「日次リリース型ツールの扱い」）
- `tool` は `src/content.config.ts` の enum に限定（enum 外なら記事化禁止）
- ユーザー認識ギャップ該当: ニュース化せず、`daily-ai-update-monitor/references/perception-gaps.md` 追記＋日次サマリー末尾「補足メモ」へ転記
- Knowledge への追記は既定スキップ

### Phase D. 検証

1. `npm run check` を流し、**errors 0 件**を確認（warnings / hints は許容）
2. `git status` と `git diff --stat` で意図しない変更（無関係なファイルの混入）が無いことを確認

### Phase E. コミット分割・push・PR 作成

**コミット分割ルール**（1コミット1責務）:

1. **コミット1（必ず作る）**: `docs/research/` 配下のみ
   - タイトル例: `feat: YYYY-MM-DD AIニュース日次チェック（直近24h・更新N件）`（更新ゼロなら `（直近24h・更新なし）`）
   - 本文: 窓、更新件数、見送り理由、取得失敗の有無を箇条書きで
   - `git add -f` でステージング
2. **コミット2（更新ありの場合のみ）**: `src/content/ai-news/` と `src/content/ai-news-notes/` の対
   - タイトル例: `feat: <ツール> <スラッグ> のAIニュース速報を追加`
   - 速報記事が複数ある場合は **記事ごとにコミットを分ける**

**コミットメッセージ**: Conventional Commits 形式、本文は日本語、末尾に Co-Authored-By を付ける（CLAUDE.md 規約 + 既存運用の踏襲）。

**push と PR**:

```bash
git push -u origin feat/daily-ai-update-YYYY-MM-DD
gh pr create --base main --title "feat: YYYY-MM-DD AIニュース日次チェック（<速報N件>）" --body "$(cat <<'EOF'
## Summary

- 窓: 2026-MM-DDTHH:mm → 2026-MM-DDTHH:mm (JST)
- 更新あり: <件数と内訳>
- 公開記事化: <件数とツール>
- 見送り: <件数と理由要約>
- 取得失敗: <該当ソース>

## Test plan

- [x] `npm run check` — 0 errors
- [x] 日次サマリーから詳細メモ・公開記事・教材化メモへのリンクが解決
- [x] frontmatter（aiNews / aiNewsNotes スキーマ）に合致
- [x] `daily-ai-update-monitor` と `ai-news-publisher` の SKILL 規約に準拠

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

## 例外・分岐

| 状況 | 挙動 |
|---|---|
| 全ソースで窓内更新なし | コミット1のみ（更新なしサマリー）。PR タイトル `feat: YYYY-MM-DD AIニュース日次チェック（直近24h・更新なし）` |
| 一部ソース取得失敗（403 等） | 二次ソース → 一次逆引きを試みた後、`保留（公式未確認）` で日次サマリーに残す。PR Summary にも `取得失敗:` 行を入れる |
| 短時間 incident のみ | SKILL ルールどおり記事化・詳細メモ化を見送り、日次サマリーに言及のみ |
| ユーザー認識ギャップ該当 | ニュース化せず `perception-gaps.md` と補足メモにだけ残す |
| `npm run check` で errors | コミット・push を行わず、修正してから再検証 |
| 現在ブランチが `main` でない / 未コミット差分が無関係 | Phase A で stash や強制破棄をせず、ユーザーに状況を報告してから判断を仰ぐ |

## 禁止事項

- `main` への直接 push（CLAUDE.md 規約）
- `git add .` / `git add -A`（無関係ファイル混入の防止。必ずパス指定）
- 自動 amend（pre-commit hook 失敗時は新規コミットで対応）
- `--no-verify` での hook スキップ
- Knowledge 記事の暗黙更新（必要なら別 PR で個別判断）
- 委譲先スキルの規約を本スキル内で再記述する（差分が出る原因になる）

## 参照ファイル

- `.agents/skills/daily-ai-update-monitor/SKILL.md`（公式ソース巡回・詳細メモフォーマット・選別ルール）
- `.agents/skills/daily-ai-update-monitor/references/source-catalog.md`
- `.agents/skills/daily-ai-update-monitor/references/output-format.md`
- `.agents/skills/daily-ai-update-monitor/references/perception-gaps.md`
- `.agents/skills/ai-news-publisher/SKILL.md`（仕分けルール・記事フォーマット・tool enum）
- `.agents/skills/ai-news-publisher/references/publishing-map.md`
- `.agents/skills/ai-news-publisher/references/selection-rubric.md`
- `.agents/skills/ai-news-publisher/references/output-format.md`
