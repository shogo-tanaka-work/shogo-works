---
date: 2026-10-13
title: "Microsoft 365 Copilot に trust-aware controls（間接プロンプトインジェクション対策）。Outlook の送信者設定が前提"
service: "Microsoft Copilot"
source: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/building-trust-aware-controls-for-ai-differentiated-handling-of-untrusted-conten/4562160
fetched_at: 2026-10-19T09:45:00+09:00
published_at: 2026-10-13
date_precision: date-only
category: enhancement
---

# 2026-10-13 Microsoft 365 Copilot の trust-aware controls

## 公式内容の日本語要約

**扱う問題は間接プロンプトインジェクションである。** メール・文書・メッセージなどの取得コンテンツに仕込まれた指示が、AI アシスタントに命令として処理される攻撃で、**既存の権限の範囲内で成立するため、認証・アクセス統制・DLP では捕まらない**。公式は OWASP Top 10 for LLM Applications 2026 を引き、プロンプトインジェクションがアプリケーション層の最大リスクに位置付けられていると述べている。

**対策は、取得コンテンツ（ツール出力）と主モデルの間に置く決定論的な強制レイヤーである。** 分類器フィルタ、入力サニタイズ、堅牢化したシステムプロンプトといった既存の緩和策を**置き換えるのではなく足す**位置づけで、構成要素は4つ。(1) **trust classification** — 決定論的・ポリシーベースの信号で取得コンテンツを trusted / untrusted に分類する（例: 組織外からの外部メールは組織境界で untrusted とする）。(2) **quarantined processing** — untrusted コンテンツを制約された経路に通し、構造化表現へ変換してタスクに必要な情報だけを残し、悪性と疑われる部分を落とす。(3) **provenance markers** — untrusted 由来のコンテンツに印を付け、以降の処理と応答へ反映する。(4) **safer synthesis** — 主モデルには trusted コンテンツはそのまま、untrusted は変換後の表現だけを渡す。

**Microsoft 365 Copilot にこの強制レイヤーを導入する。** 初期の適用範囲は**リスクの高いコンテンツ、特に外部とのやりとり**に絞られる。対象コンテンツ種別・ソースの拡大と、企業側の信号・ポリシー基盤との統合は「検討中」である。

**管理者の作業が2点ある。** **untrusted コンテンツを識別する Outlook の送信者設定を有効にする必要がある**（公式は設定名と場所を明示していない）。もう1つは、**MSRC の update guide にある CVE-2026-55145 の構成ガイダンスを確認すること**である。ロールアウト日・地域の時期は示されておらず、**提供状況と挙動はリリースチャネルとテナント環境によって異なる**とされる。

投稿日は 2026-10-13 だが、フッターは "Updated Oct 12, 2026" で日付が一致しない。ブロック・変換されたコンテンツのレポート・ログ・監査の手段は記載がない。

## できるようになったこと

- 外部メールなど untrusted とみなしたコンテンツを、主モデルへ渡す前に構造化表現へ変換して処理できる
- untrusted 由来の印（provenance marker）を以降の処理と応答へ反映できる

## 影響範囲

- 対象ユーザー: Microsoft 365 Copilot 利用者。**管理者の設定が前提**
- 対象プラン: 記載なし（リリースチャネル・テナント環境で挙動が異なる）
- API / UI / 管理者機能: 管理者機能（Outlook 送信者設定）、Copilot の内部処理

## 教材化メモ

- **「権限の範囲内で成立する攻撃は、権限統制では止まらない」**という一点が最も重要。DLP も認証も通ってしまう。**AI を入れると、既存のセキュリティ設計に穴ではなく新しい層が必要になる**例として強い。
- **決定論的な強制レイヤーを分類器の外側に置いた設計判断**が教材になる。「モデルに判断させる」緩和策だけでは不足で、**モデルの外で機械的に止める層を足す**という構造。Claude Code の hooks の fail-closed 設定と同じ思想である。
- **CVE 番号が付いており、管理者の設定が前提**である点は、「機能告知に見えるが実質はセキュリティ対応依頼」というパターンの実例。blog を読まないと気付けない。**release notes 側にはまだ出ていない。**
- 監査・ログの手段が書かれていないため、**「止まったことをどう確認するか」が未解決**。導入後の検証設計を考える演習に使える。

## 原文確認

- 公式見出し: Building Trust-Aware Controls for AI: Differentiated handling of untrusted content
- 公式URL: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/building-trust-aware-controls-for-ai-differentiated-handling-of-untrusted-conten/4562160
- 関連: CVE-2026-55145（Microsoft Security Response Center の update guide）
- 原文全文は公式ページで確認してください。
