---
date: 2026-08-28
title: "OpenAI が Cursor へのモデル提供契約を終了、シャットオフ提案日は 2026-11-12"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/
fetched_at: 2026-08-30T09:10:00+09:00
published_at: 2026-08-28
date_precision: date-only
category: policy
---

# 2026-08-28 OpenAI が Cursor へのモデル提供契約を終了

## 公式内容の日本語要約

OpenAI は 2026-08-28、SpaceX に対し **Cursor へ OpenAI モデルを提供している契約を巻き取る（wind down）意向を通知した**と公表した。**提案しているシャットオフ日は 2026-11-12**。契約上可能な最大の予告期間を取ることで、開発者が Cursor 経由で OpenAI モデルを使える期間を最大化するとしている。

判断の理由は、**SpaceX が OpenAI の利用規約の範囲内で技術を使うと確信できないため**である。OpenAI は根拠として2点を挙げた。1つは、Musk 氏による Twitter（現在は SpaceX の一部と OpenAI は記述）買収後、同社が OpenAI との契約条件に違反したこと。もう1つは、2026年に入ってから Musk 氏が宣誓のうえで、xAI（これも現在は SpaceX の一部と記述）が OpenAI の利用規約に違反したと認めたことである。

Cursor との個別契約には、**支配権の変更（change of control）後、一定期間内に解約できる条項**が入っていた。OpenAI は、次期モデル **Astra** が規約に沿って使われることを担保する責任が上がっていることも理由に挙げ、**解約は可能な限り遅い日付に設定しつつ、今後の新モデルは Cursor へ提供しない**という形を取った。

OpenAI は Cursor と約4年協業してきたとし、チームと製品に敬意を示したうえで、**影響を最も受けるのは Cursor で OpenAI モデルを使ってきた開発者である**と明記し、移行の支援に踏み込む意向を示している。

## できるようになったこと

- （機能追加ではない）Cursor 経由での OpenAI モデル利用に **2026-11-12 という期限**が設定された
- 新モデル（Astra を含む）は**今後 Cursor へ提供されない**

## 影響範囲

- 対象ユーザー: Cursor で OpenAI モデル（GPT 系）を選択して使っている開発者・チーム
- 対象プラン: Cursor の全プラン（OpenAI モデルを利用している場合）
- API / UI / 管理者機能: Cursor 側のモデル選択から OpenAI モデルが消える見込み。Cursor CEO の Michael Truell 氏は OpenAI モデルが Cursor のユーザートラフィックの約5%と発言している（報道ベース）

教材化メモ: src/content/ai-news-notes/chatgpt-openai/openai-cursor-contract-wind-down.mdx

## 原文確認

- 公式見出し: Our decision on Cursor following its acquisition by SpaceX
- 公式URL: https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/
- 一覧での確認: https://openai.com/news/ （Company / Aug 28, 2026）
- 補足: `openai.com` は WebFetch が HTTP 403 を返すため、一覧は Exa 経由、個別ポストは検索結果で公式 URL を特定したうえで Exa 経由の本文取得で確認した。URL スラッグの推測は行っていない。
- 原文全文は公式ページで確認してください。
