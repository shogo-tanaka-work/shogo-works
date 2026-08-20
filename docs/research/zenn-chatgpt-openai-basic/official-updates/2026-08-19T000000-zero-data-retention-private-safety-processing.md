---
date: 2026-08-19
title: "Zero Data Retention を維持したまま横断的な安全監視を行う Private Safety Processing をプレビュー"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/offering-zero-data-retention-for-frontier-models/
fetched_at: 2026-08-20T09:20:00+09:00
published_at: 2026-08-19
date_precision: date-only
category: policy
---

# 2026-08-19 Offering Zero Data Retention for frontier models

## 公式内容の日本語要約

OpenAI が、API の Zero Data Retention（ZDR）を維持したまま安全監視を強化する仕組み **Private Safety Processing** をプレビュー公開しました。ZDR は「リクエスト処理後にプロンプトと応答を保持しない」「OpenAI の担当者は顧客コンテンツを閲覧しない」「明示的なオプトインが無い限り学習に使わない」という約束です。今回の発表は、この約束を崩さずに安全対策を一段進めるための設計を示したものです。

背景として、深刻なリスクは1回のやり取りでは見えず、複数のやり取りをまとめて見たときに初めて分かることがある、という問題があります。安全機構の突破を繰り返し試す、複数アカウントで分担する、正当な研究を装う、といったパターンがこれに当たります。エージェントが長時間タスクを実行する場合、「停止を指示された後も動き続ける」ような意図からの逸脱も同様です。従来の ZDR 対応の安全機構はやり取りを1件ずつ評価するため、この横断的な視点を持てませんでした。

Private Safety Processing は、この横断評価を「OpenAI の担当者がコンテンツにアクセスできないまま」行います。ZDR デプロイでは顧客が管理するインフラ上にコンテンツが残ります。加えて、OpenAI 側のストレージに置く選択肢も開発中で、その場合は顧客が管理する鍵で暗号化され、OpenAI は鍵の複製を持ちません。リスクを検知したときに OpenAI へ渡るのは「どの種類の活動か」を示す限定的なシグナルだけで、フラグが立った場合でも担当者はコンテンツ本体を見ません。顧客側は自社システムの情報でアラートや措置を調査でき、異議申し立てや調査協力のために自ら情報を共有することもできます。

現在は一部の early customer でテスト中です。**2026年9月に段階的な提供開始と技術ホワイトペーパーの公開を予定**しています。

なお脚注で、法令上の報告義務がある児童性的虐待コンテンツ（CSAM）の疑いがある画像については、ZDR デプロイでも従来どおり手動レビューと報告のために保持される旨が明記されています。

## できるようになったこと

- ZDR を維持したまま、複数のやり取りを横断した不正利用パターンの自動検知が可能になる（プレビュー段階）
- 顧客管理鍵で暗号化した OpenAI 側ストレージという選択肢が開発中
- 検知時に OpenAI へ渡るのは活動種別を示す限定シグナルのみで、コンテンツ本体は渡らない

## 影響範囲

- 対象ユーザー: ZDR 対象の API 顧客（金融・医療・機密性の高い事業データを扱う組織を中心に想定）
- 対象プラン: API の ZDR 適用対象。現時点は early customer でのテスト、一般提供は 2026年9月予定
- API / UI / 管理者機能: 直接の API 変更ではなく、データ保持ポリシーと安全監視の設計変更。情シス・法務のレビュー対象

教材化メモ: src/content/ai-news-notes/chatgpt-openai/zero-data-retention-private-safety-processing.mdx

## 原文確認

- 公式見出し: Offering Zero Data Retention for frontier models
- 公式URL: https://openai.com/index/offering-zero-data-retention-for-frontier-models/
- 取得経路の制約: クラウド実行環境から `openai.com` への WebFetch は 403 を返したため、本文は別経路（Exa web_fetch）で取得した公式ページ本文を根拠にしている。`openai.com/news/` 一覧でも `Offering Zero Data Retention for frontier models / Company / Aug 19, 2026` として掲載を確認済み。
- 原文全文は公式ページで確認してください。
