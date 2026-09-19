---
date: 2026-09-16
title: "Claude Docs と Claude Slides がベータで登場。PowerPoint / PDF 書き出しに対応し、Claude Design も会話内から使える"
service: "Claude"
source: https://claude.com/blog/cowork-is-now-claude
fetched_at: 2026-09-17T09:02:00+09:00
published_date: 2026-09-16
date_precision: date-only
category: release
---

# 2026-09-16 Claude Docs / Claude Slides のベータ提供

教材化メモ: src/content/ai-news-notes/claude/claude-docs-slides-beta.mdx

## 公式内容の日本語要約

「one Claude」統合の発表と同じ 2026-09-16、Anthropic は **Claude Docs と Claude Slides を新規に提供開始**し、**既存の Claude Design も会話の中から使えるようにした**と発表しました。

公式の説明は「ドキュメントを頼めば、あなたと Claude で一緒に書く。プレゼンを頼めば、Claude がスライドを下書きする。**直接編集でき、Claude からそのまま発表もでき、PowerPoint または PDF として書き出せる**」というものです。

**3つとも有料プランでのベータ提供で、Enterprise については管理者が有効化のタイミングを決めます。** Claude Design を単体で使っている場合は従来どおり動作します。

公式が示す利用像は、1つの会話から**レポート（Docs）とスライド（Slides）を同時に作り、両者の内容が最初から揃っている**状態です。成果物には**共有可能な単一リンク**が割り当てられ、モバイルからも開けます。要素を選んで動かす直接操作と、Claude への指示による修正の両方ができます。スライド上に Claude 向けのコメントを残す運用も示されています。

ヘルプセンター側では3者の役割が分けて説明されています。**Claude Design はブランドに沿ったビジュアルとモックアップ、Claude Slides はプレゼン、Claude Docs は「Claude とチームで一緒に書く living document」**です。会話内のチャート・図・インタラクティブなビジュアル（artifacts）とは区別され、**「他人の前に出す成果物」向けの経路**として位置づけられています。

なお同日の統合発表により、これらは**モードを切り替えずに通常の会話から呼び出せます。**

## できるようになったこと

- **Claude Docs**: Claude とチームで共同編集する living document を作成
- **Claude Slides**: プレゼンを下書きし、Claude から直接発表できる
- **Claude Design**: 会話内から利用可能に（単体利用は従来どおり）
- **PowerPoint / PDF への書き出し**に対応
- 成果物は**1つの共有リンク**で扱え、モバイルからも開ける
- 直接編集と、Claude への指示による修正の両方が可能
- スプレッドシートは**数式が動く状態**で受け取れる

## 影響範囲

- 対象ユーザー: 有料プランの利用者（ベータ）
- 対象プラン: 有料プラン。**Enterprise は管理者が有効化時期を決定**
- API / UI / 管理者機能: UI 機能追加 + **Enterprise 管理者の有効化判断が発生**
- 提供状態: **3機能ともベータ**

## 原文確認

- 公式見出し: Claude Cowork and chat are now one Claude（Claude Docs / Claude Slides の発表を含む）
- 公式URL: https://claude.com/blog/cowork-is-now-claude
- ヘルプセンター: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
- 原文全文は公式ページで確認してください。
