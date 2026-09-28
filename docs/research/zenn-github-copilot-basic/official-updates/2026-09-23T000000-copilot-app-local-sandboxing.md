---
date: 2026-09-23
title: "GitHub Copilot app にローカルサンドボックスが public preview で追加。既定は無効、OS が強制できない場合はエラーで停止"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-23
date_precision: date-only
category: release
---

# 2026-09-23 Copilot app のローカルサンドボックス

## 公式内容の日本語要約

GitHub Copilot app に **ローカルサンドボックス（public preview）** が追加された。公式告知は目的を **「意図しないコマンドの影響を抑えるため、マシン上のファイル・ネットワークリソース・資格情報へのアクセスを制限する」**と説明している。

**対象はローカルリポジトリと作業ツリーのセッションで、プロジェクト単位で設定する。** 制御できるのは3領域である。

- **filesystem** — 読み書き可フォルダと読み取り専用フォルダの指定
- **network** — 外向きインターネットとローカルネットワークの可否
- **credentials** — Git と GitHub CLI の認証情報の利用可否

**既定は無効である。** アプリの設定で `Sandbox new sessions` を有効にする必要がある。既存セッションには `/sandbox on` で適用できる。

**重要なのは失敗時の挙動である。** 公式告知は、**OS が要求したポリシーを強制できない場合、サンドボックス化されたシェルはサンドボックスなしで実行するのではなくエラーで失敗する**と明記している。**対応 OS の一覧は告知に示されていない。**

**cloud sandbox セッションとリモートホストセッションは対象外**である。

## できるようになったこと

- ローカルセッションにファイル・ネットワーク・資格情報のサンドボックスを適用（public preview）
- プロジェクト単位でポリシーを設定、既存セッションには `/sandbox on`

## 影響範囲

- 対象ユーザー: GitHub Copilot app でローカルリポジトリを扱う開発者
- 対象プラン: 公式告知に明記なし
- API / UI / 管理者機能: アプリのプロジェクト設定（filesystem / network / credentials）

## 教材化メモ

- **「強制できないならエラーで止める」という設計判断**が教材として最も価値がある。サンドボックスを要求したのに黙って素通しで実行されるほうが危険である。**フォールバックを許さない設計**の具体例として、権限設計の章で使える。
- **既定が無効である**点は正直に伝える必要がある。**機能が存在することと、有効になっていることは別**。public preview の機能を「入っているから安全」と案内すると外す。
- **資格情報をサンドボックスの制御対象に含めている**のは、エージェントの事故が「ファイルを壊す」だけでなく「認証情報を使って外へ出る」形でも起こるという前提の表れである。

## 原文確認

- 公式見出し: Local sandboxing in the GitHub Copilot app
- 公式URL: https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app
- 原文全文は公式ページで確認してください。
