---
paths:
  - "src/components/islands/**/*.tsx"
  - "src/components/islands/**/*.ts"
---

# React Islands

Island は「Astro では実現できないクライアント操作」だけを担当する。表示だけの理由で React を選ばない。

- コンポーネントは表示責務を中心にし、API アクセスは専用の関数または hook へ置く。
- state は必要最小限にし、既存値から導出できる値を重複保存しない。
- 非同期処理の失敗を、画面上の意味あるメッセージとして扱う。握りつぶさない。
- Island 間で状態を共有しない。共有が必要になった時点で設計を見直す。
- サーバー側で確定するデータは props として Astro から渡す。Island 内で再取得しない。
- PC・タブレット・スマートフォンすべてでページ全体の横スクロールを発生させない。
- Grid/Flex の可変領域には `min-width: 0` を設定する。
- 画面幅だけで重要な操作や情報を失わせない。隠す場合は代替導線を残す。
- `dangerouslySetInnerHTML` を使わない。
- ポータル（`createPortal`）で body 直下へ出す要素は、閉じる操作とフォーカストラップを必ず実装する。
- キーボード操作（Tab / Escape / 矢印）で到達・離脱できることを確認する。
