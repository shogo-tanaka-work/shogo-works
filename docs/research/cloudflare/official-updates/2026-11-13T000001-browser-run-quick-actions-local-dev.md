---
date: 2026-11-13
title: "Browser Run Quick Actions がローカル開発で動作"
service: "Cloudflare Browser Run"
source: https://developers.cloudflare.com/changelog/post/2026-11-13-quick-actions-local-dev/
fetched_at: 2026-11-14T09:20:00+09:00
published_at: 2026-11-13T18:00:00Z
date_precision: timestamp
category: enhancement
---

# 2026-11-13 Browser Run Quick Actions のローカル対応

## 公式内容の日本語要約

`wrangler dev` で、browser binding の `.quickAction()` が手元の Chrome に対して動く（従来は remote モードのみ）。制約は2つ: `json` アクションは AI モデルが無いためスキーマに合うプレースホルダーを返すエミュレーション、Kitesurf ブラウザは未対応。

## 教材化メモ

- スコア5（1/1/1/0/2）で見送り。開発体験の小改善。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-13-quick-actions-local-dev/
- 原文全文は公式ページで確認してください。
