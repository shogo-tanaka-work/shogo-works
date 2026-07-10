---
date: 2026-07-02
title: "Fable 5のサイバー領域セーフガード詳細とジェイルブレイク重大度フレームワーク"
service: "Claude"
source: https://www.anthropic.com/news/fable-safeguards-jailbreak-framework
fetched_at: 2026-07-05T16:43:00+09:00
published_at: 2026-07-02T00:00:00Z
date_precision: date-only
category: policy
---

# 2026-07-02 Fable 5 サイバーセーフガード / ジェイルブレイク重大度フレームワーク

## 公式内容の日本語要約

Anthropicが、6月末に再開したClaude Fable 5のサイバーセキュリティ関連セーフガードの詳細を公開。リクエストを「禁止」「高リスクのデュアルユース」「低リスクのデュアルユース」「無害」の4段階に分類する安全性分類器を採用し、Fable 5では他モデルより広めの安全マージンを設定。あわせて、発見されたジェイルブレイクの深刻度を評価するための「Cyber Jailbreak Severity（CJS）」スケール（CJS-0〜CJS-4）の草案を、Glasswing社と共同で提案。HackerOneプログラムを通じてセキュリティ研究者からのジェイルブレイク報告受付も開始した。

## できるようになったこと

- サイバーセキュリティ関連リクエストを4段階（禁止/高リスクデュアルユース/低リスクデュアルユース/無害）に分類する安全性分類器がFable 5に適用
- ランサムウェア・マルウェア開発・データ窃取・防御回避・攻撃的インフラ（C2）・破壊的攻撃・サイバー物理的破壊工作などは禁止対象として明確化
- ペネトレーションテストや exploit 開発などの高リスクデュアルユースはアクセス制御改善までブロック
- 脆弱性スキャンなど低リスクデュアルユースは基本許可（一部安全マージンでブロックされる場合あり）
- Cyber Jailbreak Severity（CJS-0〜CJS-4）フレームワークの草案を公開。能力向上度・適用範囲・武器化の容易さ・発見されやすさの4軸で評価
- HackerOneプログラムでセキュリティ研究者からのジェイルブレイク報告を受付開始（`cyber-safeguards@anthropic.com` でフィードバック募集）

## 影響範囲

- 対象ユーザー: Claude Fable 5 の全ユーザー（グローバル）
- 対象プラン: 全プラン（Fable 5利用者）
- API / UI / 管理者機能: バックエンドの安全性分類器のポリシー明確化。ユーザー向けUI変更はなし。セキュリティ研究者向けにHackerOneプログラムが新設

## 教材化メモ

- デュアルユース技術（ペネトレーションテスト等）へのAIアクセス制御の設計思想（禁止/高リスク/低リスク/無害の4段階）はAIガバナンス教材の実例として使える
- CJSスケールはAI安全性の業界標準づくりの動きとして、AIポリシー教材に使える

## 原文確認

- 公式見出し: More details on Fable 5's cyber safeguards and our jailbreak framework
- 公式URL: https://www.anthropic.com/news/fable-safeguards-jailbreak-framework
- 原文全文は公式ページで確認してください。
