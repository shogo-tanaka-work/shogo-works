# ナレッジ記事への画像追加ガイド

## ディレクトリ構成

```
src/content/knowledge/
  prompt-engineering/
    images/              ← 画像はここに配置
      zero-shot-example.png
    zero-shot-prompting.mdx
  context-engineering/
    images/
      rag-overview.png
    rag-architecture.mdx
  harness-engineering/
    images/
      ci-pipeline.png
    ci-cd-guardrails.mdx
```

各カテゴリの `images/` ディレクトリに画像を配置する。

## MDXでの使い方

### 基本パターン

```mdx
import { Image } from 'astro:assets';
import ragOverview from './images/rag-overview.png';

## RAGの全体像

<Image src={ragOverview} alt="RAGアーキテクチャの概要図" />
```

### サイズ指定

```mdx
<Image src={ragOverview} alt="RAGアーキテクチャ" width={800} />
```

`width` のみ指定すればアスペクト比は自動維持される。

### キャプション付き

```mdx
<figure>
  <Image src={ragOverview} alt="RAGアーキテクチャの概要図" />
  <figcaption>図1: RAGの基本的な処理フロー</figcaption>
</figure>
```

## 画像の仕様

| 項目 | 推奨値 |
|---|---|
| フォーマット | PNG（スクリーンショット）/ WebP（写真） |
| 最大幅 | 1600px（記事の表示幅は max-w-3xl ≈ 768px、Retina対応で2倍） |
| ファイルサイズ | 500KB以下を目安（Astroが自動でWebP変換・最適化） |
| ファイル名 | kebab-case（例: `rag-overview.png`、`ci-pipeline-flow.png`） |
| alt属性 | 必須。画像の内容を日本語で簡潔に記述する |

## 仕組み

- Astroの `astro:assets` が自動で **WebP変換・リサイズ・遅延読み込み** を適用
- Cloudflare Imagesアダプタにより本番環境でさらに最適化される
- Content Collectionの glob は `**/*.mdx` なので `images/` 内のファイルは収集対象外（問題なし）

## 注意点

- `import` は MDXファイルの frontmatter (`---`) の直後、本文の前に書く
- 相対パスで `./images/ファイル名` と指定する
- `public/` には置かない（Astroの最適化が効かなくなるため）
