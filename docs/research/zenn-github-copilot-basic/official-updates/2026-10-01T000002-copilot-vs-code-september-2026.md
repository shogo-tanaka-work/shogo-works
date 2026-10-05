---
date: 2026-10-01
title: "GitHub Copilot in VS Code, September 2026 releases（v1.136〜v1.140）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-01-github-copilot-in-vs-code-september-2026-releases
fetched_at: 2026-10-05T09:40:00+09:00
published_at: 2026-10-01T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-10-01 Copilot in VS Code 9月分まとめ

## 公式内容の日本語要約

VS Code **v1.136 から v1.140**（2026年9月出荷分）の Copilot 関連変更をまとめた月次エントリ。

主な内容は次のとおりで、**大半が preview / research preview** である。

- **HydraFusion によるモデル調整**（research preview。2026-09-30 の単独告知と同じもの）
- **定期実行のスケジュール**（毎時 / 毎日 / 毎週の自動化、preview）
- **プルリクエストをマージ可能な状態まで持っていく**（レビューとコンフリクト解消をエージェントが担う、preview）
- Agents ウィンドウからの **Dev Container セッション**対応
- **完了セッションの整理**（done 印の提案と自動クリーンアップ、preview）
- **対応が必要なセッションの通知**（アプリケーションバッジ、preview）
- **ChatGPT と VS Code をまたいだ Codex の会話継続**

既定値の変更、管理者・エンタープライズ向けポリシーの変更、セキュリティ / サンドボックス、MCP、廃止予告についての記載は本エントリには無い。

## できるようになったこと

- Copilot の定期実行スケジュール設定（preview）
- PR のレビューとコンフリクト解消をエージェントへ委譲（preview）
- Dev Container 上でのエージェントセッション
- ChatGPT ↔ VS Code 間の Codex 会話継続

## 影響範囲

- 対象ユーザー: VS Code の Copilot 利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: 本エントリには管理者向け変更の記載なし

## 教材化メモ

- **「定期実行」と「PR をマージ可能にする」が同じ月に preview で出た**点が重要である。片方は時間軸、もう片方は完了条件をエージェントへ渡す機能で、**人間がトリガーを引かなくても動く範囲が広がっている**。無人実行の承認フローを組織として決めていない場合、preview のうちに方針を決めるべき領域になる。
- **ChatGPT と VS Code をまたいだ Codex の会話継続**は、GitHub（Microsoft）の製品に OpenAI の会話状態が入り込む形で、**ベンダー境界が利用者体験の側から溶けている**実例。データの流れとして、どちらの監査ログに残るのかを確認する観点を渡せる。
- 月次まとめエントリは **preview の棚卸しに向いている**。個別告知を追うと preview と GA の区別が曖昧になるが、月次でまとめて読むと「ほぼ全部 preview」という事実が見える。社内標準に入れる判断の材料として、この読み方自体を教えられる。

## 原文確認

- 公式見出し: GitHub Copilot in VS Code, September 2026 releases
- 公式URL: https://github.blog/changelog/2026-10-01-github-copilot-in-vs-code-september-2026-releases
- 原文全文は公式ページで確認してください。
