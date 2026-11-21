---
title: "Claude の Computer use が Team・Enterprise プランでベータ提供へ：既定はオフ、管理者がアプリ単位で許可・禁止を制御"
tool: "claude"
toolLabel: "Claude"
date: 2026-11-20
sourceUrl: "https://support.claude.com/en/articles/12138966-release-notes"
summary: "Anthropic が、Claude が利用者の画面を見て許可されたデスクトップアプリを操作する Computer use を、Team・Enterprise プランでベータ提供すると発表した。組織への展開は段階的で、既定はオフ。Owner が組織設定の Capabilities からオンにし、Enterprise ではカスタムロールで対象者を絞り、アプリ単位のブロックリスト・許可リストや MDM でも制御できる。一方で Claude と各アプリの間にサンドボックスはなく、フォルダ制限や読み取り専用設定は Computer use には効かない。HIPAA 対応構成、Claude Code の ZDR、CMEK、FERPA・K-12 設定の組織は有効化できない。"
description: "Team・Enterprise 向け Computer use ベータの提供範囲、管理者が握る設定（有効化、ロール、アプリ制御、MDM）、効かない制限、導入前に決めておくことを整理する。"
impact: "画面操作を代行するエージェントを組織で使えるかどうかを、管理者が段階的に決められるようになった。ただしフォルダ制限が効かないため、既存の AI 利用ルールをそのまま当てはめず、許可アプリと対象者を先に決める必要がある。"
tags: ["claude", "computer-use", "team", "enterprise", "管理者機能", "ガバナンス", "ベータ"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Anthropic は 2026-11-20 付の Claude リリースノートで、**Computer use を Team・Enterprise プランでベータ提供**すると告知しました。Computer use は、Claude が利用者の画面を見て、利用者が許可したデスクトップアプリの中で人間と同じようにクリックや入力を行う機能です。組織への展開は段階的で、すべての組織にすぐ出るわけではありません。

公式ヘルプによると、**既定はオフ**です。組織の Owner（または Primary Owner）が、組織設定の Capabilities で「Chat and Cowork unified」をオンにしたうえで、Claude Desktop 欄の Computer use をオンにします。管理者が自分たちの規則に合わせて、対象者・対象アプリ・対象端末を絞れる設計になっています。

## 何が変わったか

- **提供範囲**: Team・Enterprise プランでベータ。新しい Claude 体験（Chat と Cowork の統合）で使え、Claude Desktop（macOS 14 以降、Windows）に加え、Computer access が有効なら Web・モバイルからも、Desktop を開いた PC に対して使える
- **使えない場面**: 従来の「Cowork」オプションで始めたタスクと Claude Code では動かない
- **有効化できない組織**: HIPAA 対応構成、Claude Code の Zero Data Retention、顧客管理の暗号鍵（CMEK）、FERPA・K-12 設定のいずれかがある組織
- **対象者の制御**: Enterprise ではカスタムロールの機能として扱い、ロール単位で外せる。Team にカスタムロールはなく、全員が対象
- **アプリの制御**: 「ブロックするアプリ」または「許可するアプリのみ」のどちらかのリストを使える。Mac はバンドル ID、Windows は実行ファイル名などで指定する
- **端末の制御**: MDM でポリシーキー `computerUseEnabled` を false にすると、端末単位でオフにできる（Claude Desktop 5.1231.0 以降）
- **反映の遅れ**: オフにしたりアプリを禁止したりしても、各利用者の Claude Desktop へ届くまで約1時間、場合によってはそれ以上かかる

## 業務インパクト（一般企業向け）

最も注意すべきは、公式が明記している**制限が効かない点**です。

- Claude と利用者のアプリの間に**サンドボックスはない**。画面上の Web ページやメールの内容が、意図しない操作の原因になりうる
- 利用者が接続を許したフォルダの外でも、許可したアプリを通じてファイルを開く・変更する・削除することができる
- フォルダの接続制限や「読み取り専用」の設定は、Computer use には**適用されない**
- アプリのブロックリストは、Claude in Chrome、組み込みブラウザ、Claude Code、デスクトップ拡張には効かない。Web サイトやブラウザ拡張（パスワードマネージャーなど）、リモートデスクトップも対象外で、利用者が個人アカウントに切り替えた場合もリストは適用されない

導入を検討する組織では、次の順で決めるのが現実的です。

1. 対象者を決める（Enterprise ならロールで限定。Team は全員が対象になるため、段階導入が難しい点に注意）
2. 許可アプリを絞る。パスワードマネージャーなどはブロックリストに入れる
3. MDM で端末単位の例外を用意する
4. 既存の AI 利用ガイドラインに、画面上の機密情報とプロンプトインジェクションの扱いを追記する

## 副業・個人活用視点

この告知は Team・Enterprise 向けの管理機能が中心で、個人プランの話ではありません。フリーランスとして企業の Team・Enterprise 環境で働く場合は、**自分のアカウントでなく発注元の組織設定に従う**ことになるため、案件先の管理者がどのアプリを許可しているかを先に確認してください。

小規模な法人やチームで Team プランを管理する立場なら、オンにする前に「許可するアプリを絞る」「個人アカウントでは同じ制御が効かない」点を整理しておくと、後から運用ルールを足すより安全です。
