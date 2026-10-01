---
date: 2026-09-28
title: "Claude Managed Agents が NVIDIA OpenShell と統合。エージェントの実行権限を既定拒否で統制する"
service: "Claude / Anthropic（Managed Agents）"
source: https://claude.com/blog/giving-companies-more-control-over-their-ai-agents-with-nvidia
fetched_at: 2026-09-29T10:53:00+09:00
published_at: 2026-09-28
date_precision: date-only
category: release
---

# 2026-09-28 Claude Managed Agents × NVIDIA OpenShell

## 公式内容の日本語要約

Anthropic が NVIDIA と連携し、**Claude Managed Agents を NVIDIA の Open Agent Safety Platform（中核が OpenShell）と統合**すると発表した。NVIDIA 側は同日、OpenShell を **Apache 2.0 のオープンソース**として公開している。

**OpenShell はエージェントの実行とアクセスを制御するランタイムで、「ルールで許可されない限りすべてを拒否する」既定拒否型**である。ツール利用を毎回検査し、ファイルアクセス・ネットワーク接続・データ取り扱いにポリシーを適用する。ログを監査できるほか、**エージェントが到達可能な範囲を数学的に検証（証明）できる**とされる。

**Anthropic 側の設計は層の分離である。** Managed Agents は**エージェントループを、作業が実際に実行されるサンドボックスとは別のサーバーで走らせる**ことでセキュリティ境界を作る。**資格情報は別の vault に置き、エージェントからは見えない。**「保護が単一の層に依存しない」構造にしている、という説明である。ここに OpenShell が加わることで、サンドボックス経由のアクセス統制をさらに厳格に強制できる。

**提供状況**: Managed Agents は顧客管理のサンドボックス、またはマネージドなプロバイダー環境で**現在利用可能**。OpenShell は GitHub と NVIDIA の開発者向けリソースから**即日オープンソースで入手可能**。

想定対象は、事業部門を横断してエージェントを展開する企業、機微な独自データを扱う組織、アクセス制御と監査可能性が要求される環境。**Notion / 楽天 / Asana が Managed Agents の利用企業として挙げられている。**

**背景として、直近のセキュリティ事案が「長時間動くエージェントに対して、オープンでカスタマイズ可能な統制手段を組織へ渡す必要がある」という文脈で言及されている。** Anthropic の chief commercial officer Paul Smith は「企業は AI エージェントに最も重要な仕事を任せつつあり、特に機微な環境では何をしたのかを指示し検証する必要がある」と述べている。

**報道ベースでは、OpenShell を含む NVIDIA のプラットフォームに100社以上が参画した一方、OpenAI は参加していない。** この点は公式発表本文では確認できない。

## できるようになったこと

- Managed Agents のサンドボックスアクセスを OpenShell の既定拒否ポリシーで統制
- ツール利用ごとの検査と、ファイル・ネットワーク・データ単位のポリシー適用
- エージェントの到達範囲を数学的に検証し、ログを監査
- OpenShell を Apache 2.0 で自社環境へ持ち込んでカスタマイズ

## 影響範囲

- 対象ユーザー: Claude Managed Agents を使う企業、エージェントのガバナンス要件を持つ情シス・セキュリティ部門
- 対象プラン: Managed Agents（顧客管理サンドボックス / マネージド環境）
- API / UI / 管理者機能: 管理者向けの統制レイヤー追加。OpenShell 自体はオープンソースのランタイム

教材化メモ: src/content/ai-news-notes/claude/managed-agents-nvidia-openshell.mdx

## 原文確認

- 公式見出し: Giving companies more control over their AI agents, with NVIDIA
- 公式URL: https://claude.com/blog/giving-companies-more-control-over-their-ai-agents-with-nvidia
- NVIDIA 側公式: https://nvidianews.nvidia.com/news/open-agent-safety-platform
- 「100社以上が参画・OpenAI は不参加」は報道のみで、公式本文では未確認
- 原文全文は公式ページで確認してください。
