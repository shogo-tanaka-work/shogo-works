---
title: "Gemini：Drive「Organize My Files」GA—フォルダ提案・レビュー後一括移動"
tool: "gemini"
toolLabel: "Gemini / Google Workspace"
date: 2026-06-01
sourceUrl: "https://workspaceupdates.googleblog.com/2026/06/organize-my-files-in-drive-now-generally-available.html"
summary: "2026-06-01 の Google Workspace Updates で、**Organize My Files in Drive** が GA（一般提供）になった。2025-10 のベータからの昇格で、**Gemini が散在したファイルの内容・既存フォルダ構造・整理のベストプラクティスを踏まえ、移動先（既存フォルダ / 新規フォルダ作成）を提案** する。ユーザーは My Drive や親フォルダの **「Suggest File Moves」** から提案を確認し、「既存フォルダへの移動」と「関連ファイル群の新規フォルダ作成」の 2 セクションでレビューしたうえで一括移動できる。対象は Business Standard / Plus、Enterprise Standard / Plus、Google AI Pro / Ultra（コンシューマ）、Google AI Pro for Education、AI Expanded Access。Rapid Release / Scheduled Release ともに「Available now」で、英語でグローバルに提供。**2026-07-15 まで**は上限を引き上げたプロモ枠で試用でき、以降は通常のユーザー単位上限になる。利用には管理者が Drive で Gemini for Workspace を有効化し、エンドユーザー側で Workspace smart features を有効にする必要がある。"
description: "GeminiがGoogle Driveの散在ファイルを分析し、既存フォルダへの移動や新規フォルダ作成を提案するOrganize My FilesがGAに。レビューしてから一括適用できるため誤移動リスクを抑えつつDrive整理を半自動化できる。Business/Enterprise・AI Pro対象、7/15までプロモ枠で試せる。"
impact: "ファイル整理は地味だが、**Drive が散らかって目的のファイルに辿り着けない** という生産性ロスは多くの組織に共通する。Organize My Files の GA は、Gemini が「どのフォルダに移すか / 新規フォルダを作るか」を提案し、**適用前にレビューできる** ため、誤移動のリスクを抑えつつ整理を半自動化できる。情シス・Workspace 管理者にとっては、まず **有効化の前提（Drive の Gemini for Workspace + smart features）** を整理し、対象エディションを確認するのが先決。英語先行のため、日本語環境の社員には「提案 UI が英語である」点を周知しておくと混乱が少ない。7/15 までのプロモ枠（上限引き上げ）は、全社展開前に「実際どれだけ提案が出るか・精度はどうか」を検証する好機になる。ファイル整理は権限・共有設定とも絡むため、移動提案を鵜呑みにせず、共有範囲が変わらないかをレビューする運用ルールを添えると安全。"
tags: ["gemini", "google-workspace", "google-drive", "file-organization", "ga", "rollout"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/gemini/workspace-features"
  - "/knowledge/ai-tools/gemini/overview"
draft: false
---

## 要約

2026 年 6 月 1 日の Google Workspace Updates で、**Organize My Files in Drive** が GA（一般提供）になりました。2025 年 10 月のベータからの昇格です。**Gemini が散在したファイルの内容・既存フォルダ構造・整理のベストプラクティスを踏まえ、移動先（既存フォルダ / 新規フォルダ作成）を提案** します。ユーザーは My Drive や親フォルダの **「Suggest File Moves」** から提案を確認し、レビューしてから一括でファイルを移動できます。

## 何が変わったか

- **整理提案**: Gemini が「既存フォルダへの移動」と「関連ファイル群の新規フォルダ作成」の 2 セクションで提案。
- **エントリポイント**: My Drive・親フォルダ内の「Suggest File Moves」から提案ビューにアクセス。
- **レビュー後に適用**: 提案を確認してから一括でファイルを移動（適用前レビュー）。
- **対象エディション**: Business Standard / Plus、Enterprise Standard / Plus、Google AI Pro / Ultra（コンシューマ）、Google AI Pro for Education、AI Expanded Access。
- **ロールアウト**: Rapid Release / Scheduled Release ともに「Available now」、英語でグローバル。
- **プロモ枠**: 2026-07-15 まで上限を引き上げたプロモ枠で試用可能。以降は通常のユーザー単位上限。
- **前提**: 管理者が Drive で Gemini for Workspace を有効化し、エンドユーザー側で Workspace smart features を有効化。

## 業務インパクト（一般企業向け）

ファイル整理は地味ですが、**Drive が散らかって目的のファイルに辿り着けない** 生産性ロスは多くの組織に共通します。Organize My Files の GA で、Gemini が移動先を提案し **適用前にレビューできる** ため、誤移動を抑えつつ整理を半自動化できます。

情シス・Workspace 管理者の最初の一手は、**有効化の前提（Drive の Gemini for Workspace + smart features）** を整理し、対象エディションを確認することです。英語先行のため、日本語環境の社員には「提案 UI が英語である」点を周知しておくと混乱が減ります。

**7/15 までのプロモ枠（上限引き上げ）** は、全社展開前に「実際どれだけ提案が出るか・精度はどうか」を検証する好機です。ファイル整理は権限・共有設定とも絡むため、移動提案を鵜呑みにせず、**共有範囲が変わらないかをレビューする運用ルール** を添えると安全です。

## 副業・個人活用視点

個人の Google AI Pro / Ultra でも対象になるため、**自分の散らかった Drive を Gemini に整理させる** 使い方がそのまま効きます。案件ごとの資料が混在しがちなフリーランスにとって、「関連ファイルを新規フォルダにまとめる提案」は棚卸しの手間を減らします。

ポイントは **提案をレビューしてから適用** できることです。AI に丸投げして勝手に動かされるのではなく、移動先を確認して承認する形なので、重要ファイルの所在を見失う心配が小さい。まずは 7/15 までのプロモ枠で試し、自分の整理スタイルにどれだけ合うかを見てから常用するか判断するのがよいでしょう。英語 UI である点だけ留意してください。
