---
date: 2026-10-27
title: "GitHub Copilot が server-to-server 認証に対応（public preview）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication
fetched_at: 2026-11-02T09:40:00+09:00
published_at: 2026-10-27T21:36:55Z
date_precision: timestamp
category: release
---

# 2026-10-27 GitHub Copilot が server-to-server 認証に対応（public preview）

## 公式内容の日本語要約

Organization にインストールした GitHub App 向けの server-to-server 認証が public preview になった。Copilot SDK で作ったサービスやエージェントが、**サインイン中の利用者の資格情報に依存せず、organization の代理でリクエストできる。** ワークロード自身が持つ ID になるため、認証と使用量が個人に紐づかなくなる。

手順は、GitHub App に read-only の `Copilot Requests` organization 権限を与え、organization へインストールし、短命の installation access token を Copilot SDK へ渡す。**使用量はインストール先の organization に帰属し課金される。** organization のモデルポリシー・予算・支出統制がそのまま適用される。

Organization の owner は、どのアプリがアクセスを持つかを確認でき、AI usage CSV レポートの `app_client_id` フィールドでアプリ帰属の使用量を識別でき、アプリを suspend または uninstall してアクセスを止められる。

## 影響範囲

- 対象ユーザー: Copilot SDK でサービス・エージェントを作る開発者
- 管理者: アプリ帰属の使用量が CSV で識別可能。停止は suspend / uninstall

## 教材化メモ

記事化しない（週次ソースの巡回記録）。**「エージェントの身元を人から切り離す」という流れの実装例**である。個人トークンでエージェントを動かす運用は、退職・権限変更・監査のすべてで破綻する。組織所有の ID に移す設計と、その使用量を識別する手段（`app_client_id`）が同時に出ている点が実務的。

## 原文確認

- 公式見出し: GitHub Copilot supports server-to-server authentication
- 公式URL: https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication
- 原文全文は公式ページで確認してください。
