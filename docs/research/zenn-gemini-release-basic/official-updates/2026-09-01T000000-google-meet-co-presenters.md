---
date: 2026-09-01
title: "Google Meet で Gemini が共同プレゼンターをワンクリック提案"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/08/add-co-presenters-in-google-meet-with-one-click.html
fetched_at: 2026-09-02T09:05:00+09:00
published_at: 2026-09-01
rollout_date: 2026-08-31
date_precision: date-only
category: enhancement
---

# 2026-09-01 Google Meet の共同プレゼンター提案

## 公式内容の日本語要約

Google Meet で共同プレゼンターを追加する操作が、**Gemini による提案のワンクリック**に短縮された。従来は複数の手動ステップが必要だった。

仕組みは、**会話中のトリガーフレーズを Gemini が検知する**というもの。参加者が「Can you please add me as a co-presenter?」「Next slide please.」のような発話をすると、**Ask Gemini in Meet パネルに「Let [名前] co-present.」という提案（nudge）が表示され、クリックすると共同プレゼンターに指定される。**

条件が複数ある。提案が出るのは **Google スライドのメインプレゼンターに対してのみ**で、**Chrome または Edge ブラウザ**であること、そして**トリガーフレーズが英語で発話されること**が必要である。**日本語での発話では動作しない。**

管理者側は、**Ask Gemini in Meet が有効な組織では既定でオン**になる。

## できるようになったこと

- 会話中の発話を起点に、共同プレゼンター指定をワンクリックで完了できる

## 影響範囲

- 対象ユーザー: Business Standard / Plus、Enterprise Standard / Plus
- 対象プラン: Ask Gemini in Meet が有効な組織
- 制約: **メインプレゼンターのみ / Chrome または Edge のみ / トリガーフレーズは英語のみ**
- ロールアウト: Rapid・Scheduled 両ドメインで **2026-08-31 開始**、最大15日の段階展開

## 教材化メモ

- **「英語での発話が必要」という制約は、日本国内の実務ではほぼ機能しないことを意味する。** 多言語対応の順序は機能の有用性を大きく左右するため、**日本語対応の有無を確認せずに機能紹介をしない**という原則の実例になる。
- **会話の内容をトリガーにした UI 提案**というパターン自体は注目に値する。明示的な操作ではなく発話を起点にする設計は、**「AI が会話を常時聞いている」ことを前提**とする。便利さと引き換えに何を許容しているか、という論点を含む。
- 記事化は見送り（スコア4点）。対象条件が狭く、日本語環境では動作しないため読者への実務影響が薄い。

## 原文確認

- 公式見出し: Add co-presenters in Google Meet with one click
- 公式URL: https://workspaceupdates.googleblog.com/2026/08/add-co-presenters-in-google-meet-with-one-click.html
- 補助: https://support.google.com/meet/answer/13882437
- 原文全文は公式ページで確認してください。
