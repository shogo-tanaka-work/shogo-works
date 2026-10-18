---
date: 2026-10-02
title: "Protected Quick Tunnels。アカウント不要の Quick Tunnel にメール認証を付けられるように"
service: "Cloudflare Tunnel"
product: "Cloudflare Tunnel"
source: https://blog.cloudflare.com/protected-quick-tunnels/
fetched_at: 2026-10-03T09:10:00+09:00
published_date: 2026-10-02
date_precision: date-only
category: enhancement
---

# 2026-10-02 Protected Quick Tunnels

## 公式内容の日本語要約

**Quick Tunnel**（`cloudflared` でアカウント登録なしにローカル環境を一時公開する機能）に、**メール認証による保護**が追加された。従来 Quick Tunnel の URL は知っている者なら誰でも開けたため、開発中のアプリをURL共有した時点で実質公開されていた。

Protected Quick Tunnels では、指定したメールアドレス（またはドメイン）宛の認証を通さないとトンネルへ到達できない。**アカウント不要という Quick Tunnel の手軽さを保ったまま**、閲覧者を絞れる。

## できるようになったこと

- Quick Tunnel の公開範囲をメールアドレス単位で制限できる
- Cloudflare アカウントを作らずに、保護された一時公開ができる

## 影響範囲

- 対象ユーザー: ローカル開発環境を一時共有する開発者、デモ・レビュー時の共有
- 対象プラン: `cloudflared` 利用者（アカウント不要）
- API / UI / 管理者機能: `cloudflared` の Quick Tunnel オプション

## 教材化メモ

- **「手軽さを壊さずに安全側へ倒す」設計の実例**として扱える。認証を足すと普通は手順が増えるが、ここではアカウント登録なしのまま認証だけ足している。社内ツールの公開設計を議論するときの参照になる。
- **Quick Tunnel の URL は従来「知っていれば誰でも開けた」**という事実自体が、教材として価値がある。開発中の画面を Slack に貼る運用が、どの程度のリスクだったかを具体で説明できる。
- AI / エージェント要素が無く、読者への影響も限定的なため**スコア4で見送り**とした。

## 原文確認

- 公式見出し: Protected Quick Tunnels: simple accountless authentication for your next dev project
- 公式URL: https://blog.cloudflare.com/protected-quick-tunnels/
- changelog: https://developers.cloudflare.com/changelog/post/2026-10-02-protected-quick-tunnels/
- 原文全文は公式ページで確認してください。
