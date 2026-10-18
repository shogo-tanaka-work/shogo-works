---
date: 2026-10-07
title: "Max / Team プランに月次 API クレジットが付与（Max 5x $100 / 20x $200、Team は席単位）"
service: "Claude / Claude Platform"
source: https://support.claude.com/en/articles/12138966-release-notes
fetched_at: 2026-10-08T09:30:00+09:00
published_at: 2026-10-07
date_precision: date-only
category: policy
---

# 2026-10-07 Max / Team に月次 API クレジット

## 公式内容の日本語要約

Claude の Max プランと Team プランに、Claude Platform で自分のアプリやエージェントを動かすための**月次 API クレジット**が付くようになった。数日かけて順次ロールアウトされる。

金額は Max 5x が月 $100、Max 20x が月 $200。Team は Standard 席が1席あたり $20、Premium 席が1席あたり $100 で、**組織で1つの残高にプールされ、月 $500 が上限**。Nonprofit / Scientists の割引 Team プランも席単位の金額は同じ。

**繰り越しはない。** 未使用分は請求サイクル末で失効し、購入済みクレジットより先に月次クレジットが消費される。

受け取りには Claude Console 組織を1つリンクする。Max は claude.ai の Settings > Billing、Team は Organization settings > Billing の API credits セクションで「Link organization」を選ぶ。**リンク先は後から自分で変更できない。** Max は本人（subscriber）、Team は Primary Owner または Owner が操作し、Console 側では Owner / Admin / Billing ロールが必要。**対象プランに7日間在籍していることが条件。**

適用範囲は Claude Platform（Messages API、Batches API、Playground、Managed Agents、Agent SDK）に限られる。**対話的な Claude Code の利用、追加利用枠、Bedrock / Vertex AI / Foundry 経由の利用はカバーしない。** Free / Pro / Enterprise は対象外。1つの Console 組織が受け取れるのは1プラン分のみで、その組織の API キー保有者全員が残高を共有する。クレジットはプランの利用上限を変えない。クレジットが尽きると、購入クレジットや auto-reload がない限り API リクエストは停止し、**Claude プラン側へ課金されることはない。**

## できるようになったこと

- Max / Team の契約だけで、別途 API 課金を立てずに Claude Platform を月 $20〜$500 の範囲で試せる
- 組織単位でクレジットをプールし、席数に応じた検証予算を確保できる

## 影響範囲

- 対象ユーザー: Max 5x / 20x の個人、Team Standard / Premium の組織
- 対象プラン: Max、Team（割引 Team 含む）。Free / Pro / Enterprise は対象外
- API / UI / 管理者機能: claude.ai の Billing 画面、Claude Console の組織リンク

教材化メモ: src/content/ai-news-notes/claude/api-credits-max-team.mdx

## 原文確認

- 公式見出し: "Monthly API credits for Max and Team plans"
- 公式URL: https://support.claude.com/en/articles/12138966-release-notes
- 併記: https://support.claude.com/en/articles/17154008 、 https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers
- 原文全文は公式ページで確認してください。
