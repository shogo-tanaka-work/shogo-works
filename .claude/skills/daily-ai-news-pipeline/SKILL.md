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
| 公式ソース巡回・日次サマリー・詳細メモ作成 | `.claude/skills/daily-ai-update-monitor/` | `docs/research/daily-ai-updates/YYYY-MM-DD.md` と `docs/research/<tool>/official-updates/*.md` を生成 |
| 仕分け・速報記事・教材化メモ作成 | `.claude/skills/ai-news-publisher/` | `src/content/ai-news/<tool>/*.mdx` と `src/content/ai-news-notes/<tool>/*.mdx` を生成 |

本スキル自身は内部実装を持たない。中身のルール変更が必要なら委譲先 SKILL.md を編集する。

## 起動時に確認すること

- **作業ディレクトリ**: `/Users/shogo/Documents/ai-business-os/10_プロジェクト/shogo-works/repo`
- **窓**: `window_start = 前日サマリーの window_end`（連続性確保）、`window_end = 実行時刻 (Asia/Tokyo)`。前日サマリーが無い場合は `window_start = 実行時刻 - 24h` で代替し、その旨をサマリー冒頭の補足メモに残す。
- **base ブランチ**: 既定 `main`
- **Knowledge 反映**: 既定 **スキップ**（速報記事と教材化メモのみ。Knowledge への追記が必要と判断した場合だけ、別 PR で個別判断）

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

- `.claude/skills/daily-ai-update-monitor/SKILL.md`（公式ソース巡回・詳細メモフォーマット・選別ルール）
- `.claude/skills/daily-ai-update-monitor/references/source-catalog.md`
- `.claude/skills/daily-ai-update-monitor/references/output-format.md`
- `.claude/skills/daily-ai-update-monitor/references/perception-gaps.md`
- `.claude/skills/ai-news-publisher/SKILL.md`（仕分けルール・記事フォーマット・tool enum）
- `.claude/skills/ai-news-publisher/references/publishing-map.md`
- `.claude/skills/ai-news-publisher/references/selection-rubric.md`
- `.claude/skills/ai-news-publisher/references/output-format.md`
