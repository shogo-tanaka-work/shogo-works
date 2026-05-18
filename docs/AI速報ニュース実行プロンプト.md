# AIニュース実行プロンプト集

AIニュース調査・公開作業を依頼するときのコピペ用プロンプトです。

## 基本プロンプト

```text
過去24時間以内のAI最新ニュースを取得してください。

対象リポジトリは shogo-works です。
まず `CLAUDE.md` のAIニュース運用を確認し、以下の2つのSkillを順番に使ってください。

1. `.claude/skills/daily-ai-update-monitor/`
   - 公式ソースだけを確認する
   - 対象期間は Asia/Tokyo で「前回の日次ログの window_end から現在まで」
   - `references/source-catalog.md` と `references/output-format.md` に従う
   - `docs/research/daily-ai-updates/YYYY-MM-DD.md` を作成または更新する
   - 更新ありの場合は `docs/research/<tool-folder>/official-updates/` に詳細メモを作る

2. `.claude/skills/ai-news-publisher/`
   - 日次ログと公式更新詳細をもとに、公開すべきニュースだけを選別する
   - `references/selection-rubric.md` と `references/publishing-map.md` に従う
   - 公開対象は `src/content/ai-news/<tool>/<slug>.mdx` に記事化する
   - 教材化メモを `src/content/ai-news-notes/<tool>/<slug>.mdx` に分離する
   - Knowledge更新は、既存教材の前提が古くなる場合だけ最小差分にする

完了条件:
- AIニュース記事、教材化メモ、日次リサーチログ、公式更新詳細の有無を確認する
- `npm run check` と `npm test` を実行する
- 既存の未コミット変更がある場合は混ぜず、今回分だけ別ブランチにする
- Conventional Commits でコミットする
- draft PR を作成する

秘密情報ファイル（`.env`, `.env.*`, `*.env`, private keys, credentials files）は読まないでください。
```

## PRまで依頼する短縮版

```text
shogo-worksで、過去24時間以内のAI公式アップデートを調査し、公開価値があるものだけAIニュースに追加してください。

`.claude/skills/daily-ai-update-monitor/` → `.claude/skills/ai-news-publisher/` の順に使い、日次リサーチログ・公式更新詳細・AIニュース記事・教材化メモまで作成してください。

検証は `npm run check` と `npm test`。
既存の未コミット変更がある場合は混ぜず、今回分だけ別ブランチでコミットし、draft PRまで作成してください。
```

## 調査だけ依頼する版

```text
shogo-worksで、過去24時間以内のAI公式アップデートを調査してください。

`.claude/skills/daily-ai-update-monitor/` を使い、公式ソースだけを確認して `docs/research/daily-ai-updates/YYYY-MM-DD.md` と必要な `official-updates` 詳細メモを作成してください。

この段階ではAIニュース記事化・コミット・PR作成はしないでください。
```

## 記事化だけ依頼する版

```text
shogo-worksで、直近の `docs/research/daily-ai-updates/YYYY-MM-DD.md` を読み、公開すべきAIニュースだけ記事化してください。

`.claude/skills/ai-news-publisher/` を使い、`selection-rubric.md` と `publishing-map.md` に従って仕分けしてください。

公開対象は `src/content/ai-news/`、教材化メモは `src/content/ai-news-notes/` に作成してください。
Knowledge更新は必要最小限にしてください。
```

## ポイント

- 「AI最新ニュース」だけだと、最初に探索が広がりやすい。
- `daily-ai-update-monitor` と `ai-news-publisher` を名指しすると、参照すべきファイルが固定される。
- `docs/research` は `.gitignore` 対象なので、PRに含めたい場合は「日次リサーチログもPRに含める」と明示する。
- 既存作業が多いリポジトリでは、「今回分だけ別ブランチ」「既存未コミット変更を混ぜない」を必ず入れる。
