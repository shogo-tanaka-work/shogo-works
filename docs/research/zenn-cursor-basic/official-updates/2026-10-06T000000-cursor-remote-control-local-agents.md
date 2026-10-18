---
date: 2026-10-06
title: "Cursor の remote control — iOS アプリからローカル agent を操作。Enterprise 以外は既定で有効"
service: "Cursor"
source: https://cursor.com/changelog/remote-control-local-agents
fetched_at: 2026-10-12T10:00:00+09:00
published_at: 2026-10-06
date_precision: date-only
category: release
---

# 2026-10-06 Cursor の remote control

## 公式内容の日本語要約

**remote control** により、**自分のコンピューター上で動いているローカル agent を、Cursor の iOS アプリから閲覧・返信できる**ようになった。ペアリング後は agent の一覧を開き、それぞれが何をしているかを確認したり、メッセージを送ったりできる。

**既定の状態が重要である。** **Enterprise organization を除く全利用者で既定有効**である。**Enterprise の管理者は Org settings の Security and identity > Remote control で手動で有効化する必要がある。**

個々の利用者のペアリング手順は、iOS アプリへサインインし、自分のコンピューターを選び、**Cursor デスクトップアプリ側でペアリング要求を承認する**こと。コンピューターをスリープさせないために、デスクトップ設定で **「Keep this computer awake」** を有効化できる（電源接続・蓋を開けた状態が必要）。

**agent はコンピューター上に留まる。** クラウドへ移すのではなく、アプリがリモートから接続する形である。**remote control はクラウド agent に依存しない。** コンピューターの電源が入りオンラインであることが動作条件である。

## できるようになったこと

- iOS アプリからローカル agent の状態を見て、メッセージを送れる
- ローカルマシンをスリープさせない設定を入れられる

## 影響範囲

- 対象ユーザー: Cursor 利用者（Enterprise 以外は既定有効）
- 対象プラン: プラン別の提供範囲の記載なし。Enterprise のみ既定無効
- API / UI / 管理者機能: iOS アプリ、デスクトップアプリ、Org settings > Security and identity

## 教材化メモ

- **「既定有効、ただし Enterprise だけ既定無効」という提供形態が、統制の観点でそのまま論点になる。** Business 相当以下の組織では、**管理者が何もしなくても、開発者の手元のマシンへ外部から接続する経路が開く。** ペアリングは本人の承認が必要なので直ちに危険ではないが、**組織として許可するかを決める前に機能が有効になっている。**
- **前週に GitHub Copilot の computer use（画面と入力デバイスの操作）を記録したのと同じ系統の変化である。** 「人間が使う画面・人間の手元のマシン」をエージェント経由で触る口が、ベンダー横断で増えている。**今週は Cursor が「手元のマシンへ外から入る」側を足した。**
- **「コンピューターをスリープさせない設定」は見落としやすいコストである。** 常時起動の前提が入ると、電力・セキュリティ（画面ロックの運用）・物理的な持ち運びの前提が変わる。

## 原文確認

- 公式見出し: Remote control for local agents
- 公式URL: https://cursor.com/changelog/remote-control-local-agents
- 一覧: https://cursor.com/changelog
- 原文全文は公式ページで確認してください。
