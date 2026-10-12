---
date: 2026-10-06
title: "Copilot 利用メトリクスから agent 活動が欠落。IDE 更新が必要（遡及補填なし）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-06-update-your-ide-to-restore-agent-activity-in-copilot-usage-metrics
fetched_at: 2026-10-12T09:50:00+09:00
published_at: 2026-10-06
date_precision: date-only
category: incident
---

# 2026-10-06 Copilot 利用メトリクスの agent 活動欠落

## 公式内容の日本語要約

複数の IDE が Copilot の agent セッションを Copilot SDK へ移したが、**移行後のセッションが「どの IDE から来たか」を申告していなかった**。その結果、利用メトリクス側で帰属が付かず、**agent 活動の大半がレポートから落ち、一部は Copilot CLI の活動として計上された**。症状は「全体の Copilot 利用は伸びているのに、agent 活動や agent lines of code だけ下がって見える」である。

影響を受けるのは agent mode で Copilot SDK を使う IDE バージョンのみで、それより前のバージョンの利用者は正しく計上されている。

修正版と提供時期は次のとおり。**VS Code 1.139.0 以降は提供済み**、**Visual Studio 18.12 は 2026-10 中の見込み**、**JetBrains 系は次のプラグインリリース（2026-10 下旬見込み）**、**Eclipse と Xcode は次のプラグインリリース（2026-11 見込み）**。

**欠落したデータは遡って補填されない。** 利用者が更新するまで、その利用者ぶんの agent 相互作用と agent lines of code は enterprise / organization / user の全レポート（1日・28日の双方）で過少計上され続ける。**課金には影響しない**（帰属だけの問題）。Copilot CLI 側のメトリクスは逆に過大になっている可能性があり、各クライアントが更新されるにつれ解消するが、過去の CLI データは訂正されない。

## できるようになったこと

- VS Code 1.139.0 以降へ更新すれば agent 活動が正しく計上される
- 管理者は per-user レポートの `totals_by_ide` の `last_known_ide_version` / `last_known_plugin_version` で古いクライアントを特定できる

## 影響範囲

- 対象ユーザー: Copilot の利用メトリクスを見ている管理者と、agent mode を使う開発者
- 対象プラン: 記載なし（organization / enterprise のレポートに影響）
- API / UI / 管理者機能: 利用メトリクスのレポートと API。課金は影響なし

## 教材化メモ

- **「測定対象が静かに欠けるとき、グラフは下がって見える」という典型例である。** 利用が減ったのではなく帰属が落ちた。**AI ツールの利用状況を数字で経営に報告している組織は、クライアントのバージョン分布を同じダッシュボードに置かないと解釈を誤る。**
- **遡及補填が無いという点が重要である。** 更新を促すのは「今後の精度」のためで、空いた期間は埋まらない。**測定を根拠に投資判断をする運用では、計測系の変更履歴そのものを記録する必要がある。**
- 管理者の実作業は「最低バージョンをデバイス管理で強制する」に落ちる。AI ツールのバージョン統制が、セキュリティだけでなく**計測の正確さのためにも必要**になった例である。

## 原文確認

- 公式見出し: Update your IDE to restore agent activity in Copilot usage metrics
- 公式URL: https://github.blog/changelog/2026-10-06-update-your-ide-to-restore-agent-activity-in-copilot-usage-metrics
- 原文全文は公式ページで確認してください。
