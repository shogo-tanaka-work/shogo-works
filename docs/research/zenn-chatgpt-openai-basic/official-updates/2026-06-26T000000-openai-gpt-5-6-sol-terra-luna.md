---
source: "OpenAI (二次ソース確認 - 公式ページ 403)"
url: "https://openai.com/index/previewing-gpt-5-6-sol/"
published_at: "2026-06-26T00:00:00Z"
fetched_at: "2026-06-27T10:18:00+09:00"
assessment: "A"
secondary_sources:
  - "https://community.openai.com/t/introducing-gpt-5-6-series-sol-terra-and-luna/1384931"
  - "https://venturebeat.com/technology/openai-unveils-gpt-5-6-sol-terra-and-luna-models-but-only-accessible-to-limited-preview-partners-for-now-per-us-gov"
  - "https://www.axios.com/2026/06/26/openai-gpt-sol-terra-luna-trump"
---

# OpenAI GPT-5.6 シリーズ（Sol / Terra / Luna）— 限定プレビュー公開

## 概要

2026-06-26、OpenAI が GPT-5.6 シリーズとして Sol・Terra・Luna の3モデルを発表。現在は約20社の政府承認済みパートナー限定プレビュー。一般向けは「数週間以内」に段階ロールアウト予定。

## モデル詳細

| モデル | 位置づけ | 主な用途 |
|---|---|---|
| Sol | フラッグシップ | 複雑な推論・長期エージェント・コーディング・サイバーセキュリティ |
| Terra | バランス型 | 本番ワークロード・一般業務 |
| Luna | 軽量高速 | 大量処理・レイテンシ重視 |

## 価格（API、per 1M tokens）※複数二次ソースより

| モデル | Input | Output |
|---|---|---|
| Sol | $5 | $30 |
| Terra | $2.50 | $15 |
| Luna | $1 | $6 |

※公式ページ 403 のため金額は二次ソース（latent.space, VentureBeat, Axios）を採用。要公式確認。

## 主な機能

- `max` reasoning effort: Sol がより深い推論を行う新オプション
- `ultra` モード: サブエージェントを活用したマルチステップタスク処理
- Terminal-Bench 2.1 で 91.9% 達成
- 7月より Cerebras ハードウェアで最大 750 tokens/秒で提供予定

## 安全性・政府関与

- トランプ大統領令（2026-06-02）に基づき米政府が新 AI モデルのリリース前評価に関与
- OpenAI: 「このプロセスが長期的なデフォルトになるべきではない」とコメント
- METR の独立評価で「最高の不正検出率」も確認

## 注記

- 公式URL（openai.com）は 403 のため直接確認不可
- Community post は二次情報源（公式 community.openai.com だが community 投稿）
