---
title: "Gemini Notebook が Gemini アプリの連携アプリに — @Gemini Notebook でチャットからノートブックを作成・編集、既定でオン（EEA はオフ）"
tool: "gemini"
toolLabel: "Gemini"
date: 2026-10-23
sourceUrl: "https://workspaceupdates.googleblog.com/2026/10/take-actions-on-your-notebooks-from-Gemini-Notebook-directly-in-the-Gemini-app.html"
summary: "Google Workspace Updates が 2026-10-23、Gemini Notebook が Gemini アプリの連携アプリ（Connected App）として使えるようになったと告知した。チャットで @Gemini Notebook と入力すると、ノートブックの作成・編集・削除、ソースの追加・更新・削除、ノートブックとソースの一覧表示、ノートブックの内容に基づく質問への回答を自然言語で行える。Gemini が関連する依頼で自動的に呼び出すこともある。管理者側は既定で有効で、Gemini アプリと Gemini Notebook の両方がオンのグループまたは組織部門の利用者だけが使える。利用者は設定の連携アプリから切り替えられ、欧州経済領域（EEA）では既定でオフになる。Rapid Release と Scheduled Release のドメインで提供中。"
description: "Gemini アプリのチャットから @Gemini Notebook でノートブックを操作。管理者設定は既定オン、EEA は既定オフ。"
impact: "ノートブックに社内資料を集めている組織では、チャットから直接ソースの追加や削除ができるようになる。管理者は既定でオンになる点と、EEA だけ既定がオフになる点を把握しておく必要がある。"
tags: ["gemini", "gemini-notebook", "connected-apps", "workspace", "管理者"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Google Workspace Updates は 2026-10-23、**Gemini Notebook が Gemini アプリの連携アプリ（Connected App）として使えるようになった**と告知しました。これまでノートブックの操作は Gemini Notebook の画面で行う必要がありましたが、Gemini アプリのチャットの中から自然言語で頼めるようになります。Rapid Release と Scheduled Release のドメインで、すでに提供されています。

Google Workspace のすべての顧客、Workspace Individual の契約者、個人の Google アカウントの利用者が対象です。

## 何が変わったか

- **呼び出し方**: チャットで `@Gemini Notebook` と入力する。Gemini が依頼の内容に合うと判断したときに、自動で呼び出すこともある
- **できること**: ノートブックの作成・編集・削除、ソースの追加・更新・削除、ノートブックとソースの一覧表示、ノートブックの内容に基づく質問への回答
- **管理者の制御**: 連携アプリは既定で有効。利用できるのは、Gemini アプリと Gemini Notebook の両方がオンになっているグループまたは組織部門の利用者だけ
- **利用者の制御**: 設定の連携アプリ（Settings > Connected Apps）で切り替えられる
- **地域差**: 既定ではオンだが、欧州経済領域（EEA）では既定でオフ

## 業務インパクト（一般企業向け）

**新しく管理者が設定を追加する必要はなく、何もしなければオンのまま使われます。** すでに Gemini と Gemini Notebook を許可している部門では、利用者がチャットから「このファイルをノートブックに追加して」と頼めるようになります。

注意点は2つです。1つ目は、**削除操作もチャットから実行できる**ことです。ノートブックやソースを誤って消すリスクが、画面操作のときより下がる分だけ増えます。2つ目は、**EEA だけ既定がオフ**なことです。グループ会社が欧州にある場合、部門によって挙動が変わるため、社内案内に注意書きを入れておくと問い合わせを減らせます。

導入前に、情シスは Gemini と Gemini Notebook のアクセス設定が、どのグループ・組織部門でオンになっているかを確認してください。

## 副業・個人活用視点

**調べ物の素材を、チャットを離れずにノートブックへ貯められます。** 案件のリサーチ中に見つけた資料を、その場で `@Gemini Notebook` に追加させ、後でノートブックに質問する使い方ができます。

個人の Google アカウントでも使えるため、クライアントの資料を扱わない自分用のリサーチ環境から試せます。クライアントの機密資料を載せる場合は、先方の Workspace の設定とデータの扱いを確認してください。

## 情報源の制約

本記事は Workspace Updates Blog の個別ポストを根拠にしています。連携アプリが呼び出せる操作の範囲と利用上限の詳細は、公式ヘルプで確認してください。
