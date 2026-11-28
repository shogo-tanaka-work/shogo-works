---
title: "Anthropic が Claude Ship をベータ提供：PR のレビュー・修正・承認判断までを Claude が担当、承認ポリシーは自社リポジトリのファイルで書く"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-11-23
sourceUrl: "https://claude.com/resources/articles/introducing-claude-ship"
summary: "Anthropic が、プルリクエスト（PR）を開いたあとの工程を Claude に任せる Claude Ship をベータ提供すると発表した。GA 済みの Code Review に、CI 失敗やマージ競合、レビュー指摘を直す PR Steward と、チームが書いたポリシーに沿って承認可否を判断する Claude Approvals（いずれもベータ）を加えた構成。開発者は Claude Code の /ship コマンドで試せ、管理者はリポジトリ単位でオンにして、レビューの深さ、実行タイミング、月額上限を決める。Team と Enterprise プランの GitHub リポジトリが対象で、ZDR・HIPAA 構成・顧客管理の暗号鍵を使う組織は利用できない。"
description: "Claude Ship の3つのエージェント、/ship コマンドと管理者設定の2つの入口、課金と提供範囲、承認を自動化する際の注意点を整理する。"
impact: "PR の承認までを AI に任せる運用が、公式機能として組める。一方で、承認の根拠はポリシーファイルの書き方に左右され、ブランチ保護の設定次第では人の目を通さずにマージできる状況も生じる。まず観測モードで判断の質を見る運用が公式に推奨されている。"
tags: ["claude-code", "claude-ship", "code-review", "pr-steward", "claude-approvals", "管理者機能", "ベータ"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/claude-code/overview"
draft: false
---

## 要約

Anthropic は 2026-11-23、**Claude Ship** をベータで提供開始しました。PR を開いたあとの「レビュー → 修正 → 承認」を Claude に任せるための仕組みで、自社の Claude Code チームが社内で使ってきた運用を製品化したものと説明されています。

Claude Ship は3つのエージェントで構成されます。

- **Code Review**: 複数の観点で PR を審査し、指摘を検証・分類して投稿します。すでに一般提供（GA）です。
- **PR Steward（ベータ）**: 失敗した CI、マージ競合、レビュー指摘に対応して PR を直します。承認とマージはしない設計で、push のたびに「何を変え、どう戻すか」をコメントします。
- **Claude Approvals（ベータ）**: チームがリポジトリにファイルとして書いた承認ポリシーに従い、承認してよい変更を判断します。公式は「より賢い CODEOWNERS」と表現しています。

## 何が変わったか

これまでの Claude の PR 支援は、主にレビュー（指摘の投稿）まででした。Claude Ship では、**指摘を受けた修正と、承認の可否判断まで**が公式の機能範囲に入ります。

入口は2つあります。

- **開発者向け**: Claude Code の `/ship` コマンド。変更を push して PR を開き、レビューし、指摘や失敗したチェックへの対応まで進めます。マージできるかどうかは、本人の権限とリポジトリのブランチ規則しだいです。Claude Code とデスクトップアプリで本日から順次提供されます。
- **管理者向け**: リポジトリ単位でオンにします。Code Review と PR Steward は管理者が有効化し、Claude Approvals は、デフォルトブランチにポリシーファイルがあるリポジトリで動き始めます。レビューの深さ（Quick / Standard / Deep）、実行タイミング、月額の上限を決められ、既存のブランチ保護や必須チェックとも併用できます。

公式は、導入の初期は Claude Approvals を**観測モード**（判断を表示するだけで強制しない）で動かし、信頼できると判断してから、ブランチ保護で必須にする進め方を勧めています。

## 業務インパクト（一般企業向け）

**提供範囲**: Claude Team と Enterprise プランで、GitHub 上のリポジトリが対象です。Zero Data Retention、HIPAA 構成、顧客管理の暗号鍵を使う組織は利用できません。

**課金**: トークン課金のため、有効にすると費用が増えます。額は PR の数と大きさ、レビューの深さ、実行頻度、PR Steward の作業量で決まります。管理者は Code Review と PR Steward に上限を設定できます。Claude Approvals には基本料金がありませんが、ポリシーで使う分類器はトークン分が課金され、Claude のレビューを条件にするポリシーは、観測モードでも Code Review の課金が発生します。`/ship` は通常の Claude Code 利用として数えられます。なお、対象の Enterprise 組織には、30日以内に使える1万ドル以上のクレジットが用意されています（申請期限は2027-01-15、条件あり）。

**導入前に決めておくこと**:

- **誰の承認を何人分必要とするか**: ポリシーは、パスごとに必要な承認数や、Claude が承認してよい範囲を決められます。
- **人の目が入らないケースを把握する**: 公式ドキュメントは、ポリシーの書き方やブランチ規則しだいで、作者以外の誰も見ずにマージできる場合があると注意しています。たとえば、必須チェックにしていない場合、GitHub の規則が「承認1件」を求めていて Claude の承認がそれを満たす場合、Claude がレビュー無しで承認する規則を書いた場合です。
- **ポリシーファイルが入るとレビューが止まる場合がある**: 変更ファイルがすべてポリシーの対象になると、自動の Code Review が止まります。続けたい場合は、規則に `claude/code_review` を明記します。

## 副業・個人活用視点

個人開発で1人で PR を出している場合、公式の対象は Team と Enterprise の GitHub リポジトリなので、そのままの形では使えない人が多いはずです。ただ、**「承認の条件をファイルに書いて、観測モードで試してから強制する」**という進め方は、自分で書く PR チェックリストにも応用できます。

受託開発や小規模チームの案件では、`/ship` の流れ（push、PR 作成、レビュー、指摘対応）を手元で試し、Code Review の指摘がどれくらい実際のバグに当たるかを見てから、PR Steward やポリシーの導入を検討するのが現実的です。公式も「AI は見落とすことがある」と明記しているため、**承認の最終責任は人が持つ**前提で組み立ててください。

## 関連リンク

- [Introducing Claude Ship（公式）](https://claude.com/resources/articles/introducing-claude-ship)
- [Claude Ship 製品ページ](https://claude.com/product/claude-ship)
- [Claude Approvals（公式ドキュメント）](https://code.claude.com/docs/en/approvals)
