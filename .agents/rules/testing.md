---
paths:
  - "tests/**"
  - "**/*.test.*"
---

# 検証

## TDDの手順

1. 失敗するテストを先に書く（Red）
2. テストが通る最小実装をする（Green）
3. リファクタリングする（Refactor）

既存テストを無断で削除・コメントアウトしない。仕様変更でテストが不要になった場合は、その理由をコミットメッセージに書く。

## 変更後に実行する

```bash
npm run check   # astro check（型・未解決import）
npm test        # Vitest
npm run build   # 全ページ生成。getStaticPaths とリンクの破綻はここで出る
```

UI変更時は 1440px、1280px、1024px、768px、390px で確認し、`scrollWidth` が `clientWidth` を超えていないことを確認する。

## テストの方針

- 正常系・異常系の両方をカバーする。
- テスト名は「○○のとき、○○すること」の形式で書く。
- モックは最小限に。実際の動作に近い形でテストする。
- 日付・タイムゾーンが絡む処理は、境界値（月初・月末の深夜）をテストする。
- 静的データは整合性テストを書く。参照先が実在すること、id が一意であることを機械的に確認する。

## ファイル配置

`src/` と同じ階層構造を `tests/` に作る。

- `src/utils/aiNews.ts` → `tests/utils/aiNews.test.ts`
- `src/data/services.ts` → `tests/data/services.test.ts`

## 構造

```
describe("機能名", () => {
  it("正常系: ○○のとき、○○すること", () => {
    // Arrange（準備）
    // Act（実行）
    // Assert（検証）
  });

  it("異常系: ○○のとき、エラーを返すこと", () => {
    // Arrange / Act / Assert
  });
});
```
