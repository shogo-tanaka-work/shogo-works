---
date: 2026-09-14
title: "Copilot in PowerPoint に Brand Kit 経由の組織共有スキル（Brand Skill）。ブランド管理者が .md / .zip をアップロードして全社配布できる"
service: "Microsoft Copilot"
source: https://techcommunity.microsoft.com/category/microsoft365copilot/blog/microsoft365copilotblog
official_url: https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint
fetched_at: 2026-09-21T10:15:00+09:00
published_at: 2026-09-14T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-14 Copilot in PowerPoint の Brand Skill 対応

## 公式内容の日本語要約

Microsoft 365 Copilot blog に **「Brand Kit and Skills in Copilot in PowerPoint」**（著者: Derek Johnson、2026-09-14）が掲載された。**Tech Community の個別ポスト本文は JavaScript ローダーのみを返して取得できない**状態が続いているため、内容は **Microsoft Support の公式ドキュメント**（`support.microsoft.com/.../brand-skill-support-copilot-powerpoint`）で確認した。

**ブランド管理者が、再利用可能なスキルを Brand Kit へアップロードして組織へ共有できる。** 手順は Microsoft Copilot アプリから Brand Kit を開き、**Skills の `+` からアップロードまたは手入力**する。**形式は `.md` ファイルまたは `.zip`。** 追加後は Edit / Delete が可能で、**Brand Kit の共有アクセスを持つ全員が使える。**

利用側は、PowerPoint の Copilot ペインで **`+` → Select brand** で Brand Kit を選び、さらに **`+` → Choose skills** でスキルを選ぶ。

**適用は PowerPoint for Microsoft 365 / Mac / iPhone / Android** とドキュメントに記載がある。

## 影響範囲

- 対象ユーザー: ブランド管理者（Enterprise Brand Manager ポリシー配下）、Brand Kit の共有アクセスを持つ Copilot in PowerPoint 利用者
- 対象プラン: Microsoft 365 Copilot ライセンス前提（**公式本文で明示確認できていない**）
- API / UI / 管理者機能: Brand Kit（Copilot アプリ）、PowerPoint の Copilot ペイン

## 教材化メモ

**`SKILL.md` 形式が Microsoft 側にも現れた点が、いちばん大きい。** Claude Code / Copilot CLI と同じ **frontmatter + 指示本文の Markdown ファイル**という形が、Office アプリの中にも入ってきた。**「スキル」がベンダー横断の共通フォーマットへ収束しつつある**という流れの実例で、同じ週の Claude Code の AGENTS.md 対応（2.1.277）と並べられる。

**統制面の要点は「配布物としてのプロンプト」である。** ブランド管理者がアップロードした指示文が、**組織の全員の生成物に効く。** つまり **プロンプトがレビュー対象の成果物になった**ということで、誰が書き、誰が承認し、いつ棚卸しするかを決める必要がある。**スキルは自動では有効にならず、ブランド管理者が公開して初めて効く**点は、導入時の説明で外せない。

**二次情報として Message Center ID `MC1473165` と「9月中旬 Frontier → 9月下旬 GA」というロールアウト日程が流通しているが、一次情報で確認できていない。** 日程は自社テナントの Message Center で確認すること。

## 原文確認

- 公式見出し: Brand Kit and Skills in Copilot in PowerPoint（Microsoft 365 Copilot Blog、2026-09-14）
- 公式URL（ドキュメント）: https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint
- blog 一覧: https://techcommunity.microsoft.com/category/microsoft365copilot/blog/microsoft365copilotblog
- **個別ポスト本文は未取得。** 原文全文は公式ページで確認してください。
