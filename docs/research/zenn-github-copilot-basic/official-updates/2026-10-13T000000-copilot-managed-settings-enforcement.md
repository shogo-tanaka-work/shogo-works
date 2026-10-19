---
date: 2026-10-13
title: "GitHub Copilot の managed settings が起動時のポリシー再取得強制と最小クライアントバージョン強制に対応"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-13-enterprise-managed-settings-enforcement-updates
fetched_at: 2026-10-19T09:40:00+09:00
published_at: 2026-10-13
date_precision: date-only
category: enhancement
---

# 2026-10-13 enterprise managed settings の強制の強化

## 公式内容の日本語要約

**強制のしかたが2点追加された。**

**1つ目は `forceRemoteSettingsRefresh` である。** 対応クライアントに、**キャッシュ済みポリシーではなく起動時にサーバー側の現行設定を取得させる**。server-managed / MDM-managed / ファイルベースのいずれでも `true` を設定でき、**一度 server-managed 値を受け取った後は、以降の起動で再取得が必須になる**。MDM とファイル配布では、**クライアントの初回サインイン前から鮮度を要求できる**。有効な間は**キャッシュ応答では要件を満たせず、現行ポリシーを確認できないクライアントは fail closed（使えない方向）で止まる**。対応クライアントは Copilot CLI、VS Code、GitHub Copilot app。

**2つ目は `sandbox` キーによる最小クライアントバージョンの強制である。** managed settings に `sandbox` を含めると、**GA 済みのローカルサンドボックス機能に対応した最小バージョン未満のクライアントはブロックされ、更新するまで使えない**。公式は「今後、他のガバナンス向けキーにも最小バージョン要件を追加していく」と述べているが、具体のキー名は挙げていない。

発効日は示されておらず、告知日（2026-10-13）から利用できる。

## できるようになったこと

- 起動時にポリシーの再取得を強制し、キャッシュで古いポリシーが使われるのを防げる
- `sandbox` を managed settings に含めることで、古いクライアントを更新まで利用停止にできる

## 影響範囲

- 対象ユーザー: Copilot CLI / VS Code / GitHub Copilot app の利用者
- 対象プラン: 記載なし（enterprise managed settings 前提）
- API / UI / 管理者機能: 管理者機能（managed settings）

## 教材化メモ

- **「ポリシーを書いたのに効いていない」の原因がキャッシュである**という、統制運用でよくある落とし穴がそのまま題材になる。**設定の配布と適用は別の問題**であり、鮮度を強制する仕組みが要る。
- **fail closed を選んだ設計判断**が明記されている点が重要。ポリシーを確認できないときに「とりあえず動かす」のではなく止める。可用性より統制を優先する判断の具体例である。
- `sandbox` キーの副作用（**古いクライアントの利用者が突然使えなくなる**）は、ロールアウト計画の演習に向く。クライアント更新の周知を先に回す必要がある。

## 原文確認

- 公式見出し: Enterprise managed settings enforcement updates
- 公式URL: https://github.blog/changelog/2026-10-13-enterprise-managed-settings-enforcement-updates
- 原文全文は公式ページで確認してください。
