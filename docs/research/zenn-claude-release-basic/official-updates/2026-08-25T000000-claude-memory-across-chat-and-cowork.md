---
date: 2026-08-25
title: "Claude のメモリがチャットと Cowork で統合。トピック単位の閲覧・編集と、センシティブ話題の保存設定を追加"
service: "Claude"
source: https://claude.com/blog/claudes-memory-works-everywhere-and-you-decide-whats-in-it
fetched_at: 2026-08-26T09:05:00+09:00
published_at: 2026-08-25
date_precision: date-only
category: release
---

# 2026-08-25 Claude のメモリがチャットと Cowork で統合

## 公式内容の日本語要約

Claude のメモリが、チャットと Claude Cowork で**同一のもの**になった。Cowork がクラウドでタスクを実行するとき、チャットで蓄積した内容がそのまま参照でき、逆に Cowork で出てきた内容もチャットへ戻る。従来は再説明が必要だった前提（担当者、四半期の優先事項、プロジェクトの状況など）が、タスクを渡した時点で共有されている。

メモリの更新方式も変わった。**会話終了後に要約するのではなく、会話中にトピックを追加していく**方式になっている。「これを覚えて」と指示しなくても、次の会話から反映される。メモリの一時停止とリセットはいつでも可能。

保存内容は Memory 設定の **Topics** に短いファイルの一覧として並び、1件ずつ読む・編集する・削除することができる。公式は「会社の旧名称を1ファイル直せば以降のすべての会話に効く」という例を挙げている。

センシティブな話題（健康、人種、民族、宗教的信条、政治、ジェンダーアイデンティティなど）は**既定では保存されない**。「include sensitive topics in memory」設定をオンにすると保存対象になり、保存のたびに通知が出る。オンにする前の内容は遡って保存されない。ただしこの設定をオンにしても、**識別番号（SSN・政府発行 ID 等）、犯罪歴、在留資格、AUP 違反にあたる内容は保存されない**。

提供範囲は、Free / Pro / Max では web・デスクトップ・モバイルで**既定オン**（センシティブ話題の保存だけは既定オフ）。**Team / Enterprise では管理者が組織単位で可否を制御**し、個人ユーザー側は既定オフで、自分でオンにするまで有効にならない。

## できるようになったこと

- チャットと Cowork で同一のメモリを共有（クラウド実行のタスクでもチャットの文脈が使える）
- 会話中にメモリが更新される（会話後の要約方式から変更）
- Memory 設定の Topics でメモリをファイル単位に閲覧・編集・削除
- センシティブ話題の保存を利用者側の判断でオンにできる（既定オフ、保存時に通知、遡及保存なし）

## 影響範囲

- 対象ユーザー: Free / Pro / Max は既定オン。Team / Enterprise は管理者が可否を制御し、個人は既定オフ
- 対象プラン: web / デスクトップ / モバイル（iOS・Android は最新版が必要）
- API / UI / 管理者機能: 設定 UI（Settings > Memory）と管理者向けの組織単位トグル

教材化メモ: src/content/ai-news-notes/claude/memory-across-chat-and-cowork.mdx

## 原文確認

- 公式見出し: Claude's memory works everywhere, and you decide what's in it
- 公式URL: https://claude.com/blog/claudes-memory-works-everywhere-and-you-decide-whats-in-it
- 併記: Claude Release Notes 2026-08-25 「Memory now works across chat and Cowork in the cloud」 https://support.claude.com/en/articles/12138966-release-notes
- 原文全文は公式ページで確認してください。
