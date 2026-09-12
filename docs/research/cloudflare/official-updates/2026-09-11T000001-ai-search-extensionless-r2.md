---
date: 2026-09-11
title: "AI Search が拡張子なし R2 オブジェクトを Content-Type メタデータで索引可能に"
service: "Cloudflare AI Search"
product: "AI Search"
source: https://developers.cloudflare.com/changelog/post/2026-09-11-extensionless-r2-content-type/
fetched_at: 2026-09-12T09:20:00+09:00
published_date: 2026-09-11
date_precision: date-only
category: enhancement
---

# 2026-09-11 AI Search が拡張子なし R2 オブジェクトに対応

## 公式内容の日本語要約

Cloudflare **AI Search** が、**ファイル拡張子を持たない R2 オブジェクト** を、対応する `Content-Type` メタデータが付いている場合に索引できるようになりました。

従来は、索引時のファイルタイプ判定を拡張子に依存していたため、拡張子のないオブジェクトキーは対象外でした。今回の変更で、**拡張子を持たないオブジェクトキーをサポートしつつ、索引時のファイルタイプ検証は維持されます。**

UUID やハッシュをそのままキーにしているバケット、コンテンツアドレッシングでオブジェクトを保存しているバケットが、そのまま AI Search の対象にできるようになった、という位置づけです。

対応ファイルタイプと `Content-Type` の要件は R2 データソースのドキュメントに記載されています。

## できるようになったこと

- 拡張子なしのオブジェクトキーを持つ R2 オブジェクトの AI Search 索引（対応 `Content-Type` メタデータが必要）

## 影響範囲

- 対象ユーザー: R2 を AI Search のデータソースにしている開発者
- 対象プラン: 記載なし
- API / UI / 管理者機能: AI Search の索引動作

## 教材化メモ

- **スコア不足（4点）で記事化を見送った更新。** 適用範囲が「拡張子なしキーを使っている R2 バケット」に限定され、該当しない読者には作業が発生しない。見送り判断の基準を示す例として使える。
- ただし **「拡張子でファイルタイプを判定する」という設計の限界** そのものは一般的な話題。コンテンツアドレッシング（ハッシュをキーにする）を採用すると拡張子が消えるため、後段のツールが動かなくなる、という因果はストレージ設計の教材に使える。
- `Content-Type` メタデータを保存時に必ず付ける習慣は、**後から効いてくるメタデータ設計** の実例として短く触れられる。

## 原文確認

- 公式見出し: AI Search supports extensionless R2 objects with Content-Type metadata
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-11-extensionless-r2-content-type/
- 原文全文は公式ページで確認してください。
