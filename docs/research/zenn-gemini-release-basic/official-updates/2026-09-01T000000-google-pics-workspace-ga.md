---
date: 2026-09-01
title: "Google Pics が Workspace で一般提供 — 既定でオン、管理者は無効化可能"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/09/google-pics-brings-pro-level-ai-image-creation-and-editing-to-Google-Workspace.html
fetched_at: 2026-09-02T09:05:00+09:00
published_at: 2026-09-01
rollout_date: 2026-09-01
date_precision: date-only
category: rollout
---

# 2026-09-01 Google Pics の一般提供

教材化メモ: src/content/ai-news-notes/gemini/google-pics-workspace-ga.mdx

## 公式内容の日本語要約

Google が **Google Pics** を一般提供した。Workspace にネイティブ統合された画像生成・編集アプリで、基盤は **Nano Banana** 系の画像生成・編集モデルである。`pics.new` で起動する。

機能は、プロンプトからの画像生成に加えて**オブジェクト単位の精密編集**が中心。画像内の特定要素にホバーして選択し局所編集する、テキスト要素だけを編集・整形・**翻訳**する、Web / SNS / 印刷 / デジタル向けにクロップする、**2K / 4K へアップスケール**する、バージョン履歴を保持して変更を戻す、といった操作ができる。生成時は複数のバリエーションが提示される。

**Workspace 統合が実務上の要点である。** Google ドキュメントやスライドで画像を選択すると、**ワンクリックで Pics の編集ツール一式をアプリを離れずに使える。** この統合はドキュメントとスライドで本日開始、**Drive へは数週間のうちに展開**される。共同編集、リンク共有、Drive での作成・オープンという Workspace 標準の協業機能も備える。

**管理者にとって重要なのは既定値である。** 公式の Getting started には「**This product will be ON by default and can be disabled at the domain/OU/group level.**」と明記されている。つまり、**組織が何もしなければ有効になる。**

**利用上限にも期限が付いている。** 「Usage of generative AI features in Google Pics is subject to usage limits. **At least through February 28, 2027**, your users will have higher access to generative AI features in Google Pics. Access to these generative AI features may be limited afterward.」——**2027-02-28 までは高い利用枠が保証されるが、それ以降は制限されうる。** 変更前に通知するとされている。

## できるようになったこと

- `pics.new` で画像生成・編集アプリを利用できる
- オブジェクト単位の局所編集、テキスト要素の編集・翻訳、2K/4K アップスケール、バージョン履歴
- Google ドキュメント / スライド内の画像をワンクリックで Pics 編集（本日から）
- Drive 保存画像のワンクリック編集（数週間のうちに）

## 影響範囲

- 対象ユーザー: Business Standard / Plus、Enterprise Standard / Plus、Google AI Pro / Ultra（個人）、Google AI Pro for Education、AI Expanded Access アドオン
- 対象プラン: 上記エディション。**管理者は domain / OU / group 単位で無効化可能だが、既定はオン**
- ロールアウト: Rapid Release ドメインは 2026-09-01 開始、Scheduled Release ドメインは **2026-09-15 開始**（いずれも最大15日の段階展開）
- **期限**: 生成AI機能の高い利用枠は **2027-02-28 まで**。以降は制限されうる

## 原文確認

- 公式見出し: Google Pics brings pro-level AI image creation and editing to Google Workspace
- 公式URL: https://workspaceupdates.googleblog.com/2026/09/google-pics-brings-pro-level-ai-image-creation-and-editing-to-Google-Workspace.html
- 補助: https://blog.google/products-and-platforms/products/workspace/google-pics/ 、https://workspace.google.com/blog/product-announcements/google-pics-brings-pro-level-ai-image-creation-and-editing-to-google-workspace
- 原文全文は公式ページで確認してください。
