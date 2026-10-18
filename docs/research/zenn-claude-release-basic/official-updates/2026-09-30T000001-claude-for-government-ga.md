---
date: 2026-09-30
title: "Claude for Government が一般提供開始（FedRAMP High）"
service: "Claude for Government"
source: https://claude.com/blog/claude-for-government-is-now-generally-available
fetched_at: 2026-10-01T09:20:00+09:00
published_at: 2026-09-30T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-30 Claude for Government の一般提供

## 公式内容の日本語要約

Anthropic は **Claude for Government** を米国の連邦・州の機関向けに一般提供開始した。**FedRAMP High 認可環境**で提供され、**2026年7月からパブリックベータ**だった。

提供される製品は、**Claude**（ファイルアクセス・skills・プラグイン・プロジェクトを備えたデスクトップアプリ）、**Claude Code**（公共部門のソフトウェア構築・近代化向け）、**Claude Code CLI**（早期アクセス）、**Claude for Microsoft 365**（早期アクセス）。

**統制面。** FedRAMP High 認可に加え、公共部門のコンプライアンス要件に合わせた管理者統制、機関の ATO（Authorization to Operate）手続きを支える監査ログと文書。**会話履歴は機関が管理する端末上にローカル保持**される。

**課金モデルが特徴的である。** **席数課金なし**。機関は固定の増分単位で利用量に対して支払い、**上限を超えない hard cap** を設定できる。管理者はグループ単位で利用枠とモデル制限を定めたユーザー階層を作成でき、残高が尽きる前に burndown アラートが出る。

**クラウドプロバイダーとの個別契約は不要**で始められる。

## できるようになったこと

- 米国の連邦・州機関が FedRAMP High 環境で Claude / Claude Code を利用できる
- 席数課金ではない、上限付き従量課金
- グループ単位の利用枠・モデル制限とアラート

## 影響範囲

- 対象ユーザー: **米国の連邦・州機関のみ**
- 対象プラン: claude.com/solutions/government から申請
- 判定: **記事化は見送り（スコア不足 5点）**。日本の読者への直接の影響がほぼない

## 教材化メモ

- **「席数課金なし + hard cap + グループ別のモデル制限」という課金設計は、日本の企業でも使える型である。** AI ツールの社内展開で最も止まる理由が「費用が読めない」であり、**上限を先に決めてから配る**という順序は、公共部門向けの要件から生まれた設計として説明すると説得力が出る。
- **会話履歴を機関管理の端末にローカル保持する**という選択は、クラウド型 AI の導入障壁への直接的な回答。日本でも自治体・医療・金融で同じ論点が出るため、**「どこにデータが残るか」を要件定義で最初に確定させる**ことの重要性を示す実例になる。
- **ATO（Authorization to Operate）に相当する国内手続きは何か**という問いに展開できる。監査ログと文書がベンダー側から提供されるかどうかが、導入審査の工数を大きく変える。**ベンダー選定のチェックリスト項目として「審査用の文書が揃っているか」を加える**根拠になる。
- **「パブリックベータから一般提供まで約3か月」という期間**は、コンプライアンス要件が厳しい領域でのロールアウト速度の目安として記録しておく。

## 原文確認

- 公式見出し: Claude for Government is now generally available
- 公式URL: https://claude.com/blog/claude-for-government-is-now-generally-available
- 原文全文は公式ページで確認してください。
