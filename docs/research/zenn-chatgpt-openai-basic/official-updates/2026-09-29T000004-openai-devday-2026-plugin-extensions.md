---
date: 2026-09-29
title: "DevDay 2026: plugin extensions で ChatGPT / Codex の中にアプリそのものを置けるように"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/devday-2026-recap/
fetched_at: 2026-09-30T09:40:00+09:00
published_at: 2026-09-29
date_precision: date-only
category: release
---

# 2026-09-29 DevDay 2026: plugin extensions

## 公式内容の日本語要約

**plugin extensions** は、プラグインを「ツール呼び出し」から「**ChatGPT 内でネイティブに動くアプリケーション**」へ引き上げる仕組みである。Sam Altman の表現では「**エディタ、ダッシュボード、ワークスペースまるごとを ChatGPT と Codex の中に直接作れる**」。

開発者ができることは具体的に挙げられている。**プラグインを ChatGPT のサイドバーへ追加**する、**チャットの横に表示される対話型パネル**を作る、**ファイル形式ごとのビューア**を作る。利用者はチャットを続けながら、そのツールを同じ画面で操作する。

開発と流通の側も整備された。**Plugin Creator** が構築を補助し、**提出フローが再設計されてフィードバックが明確化**、**ディレクトリと会話内でのランキング・推薦が改善**された。配布は OpenAI 経由。

早期の例として **Canva、Figma、Adobe** が名指しされている。デモでは plugin extensions で作られた会議アプリが、ChatGPT の中に予定を表示した。OpenAI はこれを「**ChatGPT を人間とエージェントが協働する共有面として開き、週間 12 億人超の利用者へ開発者が直接ネイティブ体験を出せるようにする**」ものと位置づけている。

## できるようになったこと

- サイドバー常駐、対話型パネル、ファイルビューアを自作できる
- Plugin Creator と再設計された提出フローを使える
- ディレクトリ・会話内推薦での発見性が上がる

## 影響範囲

- 対象ユーザー: プラグイン開発者、SaaS 提供者、受託開発
- 対象プラン: ChatGPT および Codex
- API / UI / 管理者機能: 配布チャネルとしての ChatGPT の性格が変わる

教材化メモ: src/content/ai-news-notes/chatgpt-openai/plugin-extensions-chatgpt-as-app-surface.mdx

## 原文確認

- 公式見出し: DevDay 2026 Recap
- 公式URL: https://openai.com/index/devday-2026-recap/
- **制約**: `openai.com` 403。内容は検索経由の報道（TechCrunch 2件、Thurrott、Kantan.News）で突き合わせた。引用は報道が引いた Altman 発言の再引用である。
