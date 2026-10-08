---
date: 2026-10-08
title: "Compliance API のチャットエンドポイントが統合 Claude 体験のチャットも返す（Enterprise beta）"
service: "Claude / Compliance API"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-10-08T09:30:00+09:00
published_at: 2026-10-08
date_precision: date-only
category: enhancement
---

# 2026-10-08 Compliance API が統合 Claude 体験のチャットを返す

## 公式内容の日本語要約

Claude の Compliance API のチャットエンドポイントが、**統合 Claude 体験（unified Claude experience）で発生したチャットも返すようになった。** Claude Enterprise 組織向けの beta で、既存の Compliance Access Key をそのまま使える。

Compliance API は、Enterprise 組織が自組織のチャット・ファイル・プロジェクトをプログラムから取得・削除するための監査用インターフェースである。今回の変更は、チャット画面と Cowork などが1つの体験に統合された後も、**監査・保持・削除の対象が取り残されないようにする**ための追従である。

公式リリースノートの記載は1文で、取得できるフィールドの差分やページネーションの扱いまでは書かれていない。詳細は「Retrieve and delete chats, files, and projects」のドキュメント側を参照する形になっている。

## できるようになったこと

- 統合 Claude 体験で作られたチャットも、既存の Compliance Access Key で取得・削除の対象にできる

## 影響範囲

- 対象ユーザー: Claude Enterprise 組織の管理者・コンプライアンス担当
- 対象プラン: Claude Enterprise（beta）
- API / UI / 管理者機能: Compliance API

## 教材化メモ

- **「監査 API が製品統合に追いついているか」を確認する習慣の題材になる。** 製品側でチャット体験が統合されても、監査 API の取得範囲が自動で広がるとは限らない。今回は公式が明示して追従したケースだが、**逆に追従していない期間が存在したことも示している。** 情シス・法務向け教材では「保持・削除の対象範囲は製品統合のたびに再確認する」という運用を、この例で説明できる。
- **beta である点を扱いの前提に置く。** Enterprise 限定かつ beta なので、保持ポリシーの根拠資料としてそのまま採用するのは早い。GA 後に取得フィールドが確定してから教材へ入れる。
- 記事化は見送った（スコア4）。対象が Enterprise の beta に限られ、公式記載も1文で、読者の手順が変わる粒度まで情報が揃っていない。

## 原文確認

- 公式見出し: "The Compliance API chat endpoints now also return chats from the unified Claude experience"
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 併記: https://platform.claude.com/docs/en/manage-claude/compliance-content-data
- 原文全文は公式ページで確認してください。
