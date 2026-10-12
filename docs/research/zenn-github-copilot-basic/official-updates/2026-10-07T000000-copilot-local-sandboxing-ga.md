---
date: 2026-10-07
title: "GitHub Copilot の local sandboxing が GA。enterprise 側で強制でき、開発者は緩められない"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available
fetched_at: 2026-10-12T09:50:00+09:00
published_at: 2026-10-07
date_precision: date-only
category: rollout
---

# 2026-10-07 local sandboxing が GA

## 公式内容の日本語要約

**local sandboxing** が一般提供になった。Copilot が起動するコマンドとツールを、開発者または組織が定義したポリシーに従い、**ファイル・ネットワーク・資格情報・その他のシステム機能へのアクセスを制限した状態で実行する**。基盤は **Microsoft eXecution Container（MXC）** で、共通のポリシー記述を Windows / macOS / Linux のネイティブな制御へ写す。

制御できる範囲は、**agent のコマンドが読み書きできるファイルとディレクトリ**、および **インターネット、ローカルネットワーク、Git 資格情報、GitHub CLI 資格情報へのアクセス**である。対応環境では **ローカル MCP サーバーや language server などのローカルツール・サービスにもサンドボックスを及ぼせる。**

対象クライアントは **Copilot CLI、Copilot app、Agent Host を使う VS Code セッション**。**Copilot に追加費用なしで含まれる**（プラン別の区分は記載なし）。**既定で有効かどうかは告知に記載が無い。**

管理面では、**enterprise-managed settings でサンドボックスを必須化し、開発者が弱められないポリシーを強制できる。**

**設計上の要点が1つ明記されている。** サンドボックスのポリシーは **Copilot がどのモデルを使っているかに関わらずツール実行へ適用される**。モデルの実行とツールの隔離が別々に扱われているためである。

## できるようになったこと

- agent が起動するコマンドのファイル・ネットワーク・資格情報アクセスをポリシーで絞れる
- enterprise 管理設定でサンドボックスを必須化できる
- ローカル MCP サーバーにもサンドボックスを及ぼせる（対応環境）

## 影響範囲

- 対象ユーザー: Copilot CLI / Copilot app / VS Code（Agent Host）の利用者と、その管理者
- 対象プラン: Copilot に追加費用なしで含まれる
- API / UI / 管理者機能: enterprise-managed settings

## 教材化メモ

- **「モデルと無関係にツール実行を隔離する」という分離は、エージェント統制の設計原則としてそのまま使える。** モデルの挙動を信頼するのではなく、**実行境界で止める**。モデルを差し替えても統制が崩れない構造になる。
- **同じ週に Claude Code 2.1.295 が hook の fail-closed 設定を入れている。** ベンダーが違っても、**「エージェントの実行を落とす側の仕組み」が同時に整備されている**という構図が示せる。
- **既定が有効か無効か告知に書かれていない**点は、そのまま「自社で確認する」項目になる。GA の告知で既定状態が書かれないケースは珍しくなく、**GA を「何もしなくても安全になった」と読まない**という注意に落ちる。
- 「開発者が弱められない」という性質は、**ローカルのガードレールを組織が握れるか**という審査項目の具体例である。

## 原文確認

- 公式見出し: Local sandboxing for GitHub Copilot now generally available
- 公式URL: https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available
- 原文全文は公式ページで確認してください。
