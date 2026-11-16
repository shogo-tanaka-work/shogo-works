---
date: 2026-11-10
title: "GitHub Copilot の管理・IDE まわり3件（Enterprise シート管理 API の App 対応、GHES 対応 GA、C++ の MSBuild 自動構成）"
service: "GitHub Copilot"
source: https://github.blog/changelog/label/copilot/
fetched_at: 2026-11-16T09:50:00+09:00
published_at: 2026-11-10
date_precision: date-only
category: enhancement
---

# 2026-11-10 / 2026-11-13 Copilot の管理・IDE まわり

## 公式内容の日本語要約

窓内に出た、モデル追加・廃止以外の3件をまとめる。

**1. Enterprise のシート管理 API を GitHub App から呼べるようになった（2026-11-10、improvement）**
Enterprise GitHub Apps が enterprise レベルの Copilot シート管理 API を呼べるようになり、どのユーザーと enterprise team に Copilot シートを割り当てるかを App 側から制御できる。新しい enterprise fine-grained permission `Enterprise Copilot license management` が必要。

**2. GitHub Copilot app の GitHub Enterprise Server（GHES）対応が GA（2026-11-13、release）**
GHES アカウントを Copilot app に追加して、リモートリポジトリ・Issue・Pull Request を扱える。従来は opt-in のプレビューだった。先に GitHub.com または GHE.com アカウントでサインインし、Settings > Accounts > Add account から GitHub Enterprise Server を選ぶ。**Copilot app 1.2.0 以降が必要。GHES では Cloud sessions は使えない。**

**3. C++ language server が MSBuild ビルドを自動構成（2026-11-10、improvement）**
Copilot の C++ language server が MSBuild のビルド構成を自動で検出・設定する。

## 影響範囲

- 対象ユーザー: 1 は Enterprise 管理者と社内自動化の実装者、2 は GHES 利用組織、3 は Windows / MSBuild の C++ 開発者
- 対象プラン: 1 は Copilot Enterprise、2 は GHES ライセンス保有組織
- API / 管理者機能: 1 は新しい fine-grained permission の付与作業が発生する

## 教材化メモ

記事化しない（本Skillの記事化対象は Claude Code / Codex のロールアップのみ）。1 は「ライセンス配布を人手の管理画面から API へ移す」流れの例で、Claude Code 側の cost report API（2.1.317）やプール予算の引き当て順（2.1.319）と同じ系列に置ける。AI 利用の配賦・棚卸しが各ベンダーで同時に API 化されている。

## 原文確認

- 公式見出し: GitHub App support for Enterprise Copilot seat management / GitHub Enterprise Server support in the GitHub Copilot app / C++ language server now auto-configures MSBuild builds
- 公式URL: https://github.blog/changelog/2026-11-10-github-app-support-for-enterprise-copilot-seat-management 、https://github.blog/changelog/2026-11-13-github-enterprise-server-support-in-the-github-copilot-app 、https://github.blog/changelog/2026-11-10-c-language-server-now-auto-configures-msbuild-builds
- 原文全文は公式ページで確認してください。
