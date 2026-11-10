---
date: 2026-11-07
title: "Copilot code review の設定が API 化、レビュー概要の表示も整理"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-11-06-copilot-code-review-api-management-and-review-overview-updates
fetched_at: 2026-11-09T09:40:00+09:00
published_at: 2026-11-07T00:27:19Z
date_precision: timestamp
category: enhancement
---

# 2026-11-07 Copilot code review の API 管理とレビュー概要の更新

## 公式内容の日本語要約

Copilot code review の設定を REST / GraphQL API から読み書きできるようになった。enterprise / organization / repository の3階層が対象で、これまで画面でしか触れなかった設定をコードで管理できる。

Copilot のレビュー出力は attribution フィールドで識別でき、**使われた review effort と、典拠として参照した skills / MCP サーバー / カスタムインストラクションも取れる**。レビュー概要の表示は圧縮され、effort とアンケートはフッターへ移り、スキップされたファイルと除外ファイルは「Files not reviewed」へまとめられ、空のセクションは隠れる。thumbs-down には理由の入力を求めるようになった。

ほかに、エージェントセッションでの AI クレジット表示、auto-review ルールの bypass リスト対応、課金の永続化・リトライ・bot 作成 PR に関する不具合修正が入った。対象は Pro / Pro+ / Max / Business / Enterprise。

## できるようになったこと

- コードレビュー設定を API で3階層にわたり取得・更新できる（設定の構成管理・監査が可能になる）
- レビュー結果がどの skill / MCP サーバー / カスタムインストラクションを根拠にしたか追跡できる
- auto-review ルールに bypass リストを設定できる

## 影響範囲

- 対象ユーザー: Copilot code review を使う組織の管理者、設定を自動化したい基盤チーム
- 対象プラン: Pro / Pro+ / Max / Business / Enterprise
- API / UI / 管理者機能: REST / GraphQL の両方。レビュー概要の見た目が変わるため、スクリーンショットを使った社内手順書は差し替えが要る

## 教材化メモ

- **「AI のレビューが何を根拠にしたか」を API から取れるようになった点が本質である。** skills / MCP サーバー / カスタムインストラクションのどれが効いたか分かれば、**カスタムインストラクションを足したことでレビュー品質が上がったかを検証できる。** 勘で指示文を増やす運用から、効果測定のある運用へ移す入口になる。
- **設定の API 化は Policy as Code の前提である。** 3階層（enterprise / org / repo）で設定が重なる構造なので、**どの階層で何を縛るかを決めてからコード化する**順序を教える題材になる。画面で設定してきた組織が API へ移すとき、まず現状をエクスポートして差分を見る手順が要る。

## 原文確認

- 公式見出し: "Copilot code review: API management and review overview updates"
- 公式URL: https://github.blog/changelog/2026-11-06-copilot-code-review-api-management-and-review-overview-updates
- 原文全文は公式ページで確認してください。
