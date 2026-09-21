---
date: 2026-09-17
title: "エージェント CLI のカスタマイズ利用状況が usage metrics API に追加（skills / custom agents / MCP / slash commands / plugins）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-17-agentic-cli-customizations-now-in-the-usage-metrics-api/
fetched_at: 2026-09-21T10:15:00+09:00
published_at: 2026-09-17T00:00:01Z
date_precision: date-only
category: enhancement
---

# 2026-09-17 エージェント CLI カスタマイズの利用状況 API

## 公式内容の日本語要約

Copilot の usage metrics API に、**エージェント CLI のカスタマイズ利用状況**が加わった。対象は **skills / custom agents / MCP サーバー / slash commands / plugins** の5種類である。

指標は2つ。**「どの項目が最も使われたか」**（上位5件と対話回数）と、**「何種類が使われたか」**（カテゴリ横断の distinct 数）。**GitHub 提供の項目は名前付きで表示されるが、利用者が定義した名前はプライバシー保護のため表示されない。**

閲覧には enterprise owner / billing manager / organization owner、または **「View Copilot Metrics」権限**が要り、**Copilot usage metrics ポリシーが有効**である必要がある。

## できるようになったこと

- skills / custom agents / MCP / slash commands / plugins の利用上位5件と対話回数を取る
- カテゴリごとの利用種類数を取る
- 定着しているカスタマイズと、使われていないカスタマイズを見分ける

## 影響範囲

- 対象ユーザー: enterprise / organization の管理者、メトリクス閲覧権限保有者
- 対象プラン: Copilot Business / Enterprise（usage metrics ポリシー有効時）
- API / UI / 管理者機能: usage metrics API

## 教材化メモ

**ハーネスエンジニアリングの「測れなかった層」が測れるようになった、という位置づけで扱う。** CLAUDE.md・skills・custom agents・MCP といったカスタマイズ層は、これまで**作ったあと誰が使っているかを確認する手段がなかった。** 社内へ配ったスキルが実際に使われているかを人数と回数で見られると、**カスタマイズの棚卸しが感覚ではなくデータで回る。**

**ただし「顧客定義の名前は出ない」ため、自社スキルは名前ではなく件数でしか見えない。** 上位5件が匿名のままでは改善に結び付きにくいので、**社内側で命名規約と対応表を持っておく**運用が要る、という実務上の注意が付く。

**Claude Code の `claude plugin eval`（2.1.269）と組で教えると効く。** 片方は「品質を測る」、こちらは「使われ方を測る」。**カスタマイズ層にも計測が要る**という同じ主張が、2社の独立した実装で裏づけられる。

## 原文確認

- 公式見出し: Agentic CLI customizations now in the usage metrics API
- 公式URL: https://github.blog/changelog/2026-09-17-agentic-cli-customizations-now-in-the-usage-metrics-api/
- 原文全文は公式ページで確認してください。
