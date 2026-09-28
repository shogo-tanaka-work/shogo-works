---
date: 2026-09-23
title: "Claude Code の cloud sessions が research preview を脱して一般提供。--remote は --cloud の非推奨エイリアスへ。Pro $100 / Max $250 の一回限りクレジットは 2026-10-07 までに請求"
service: "Claude Code"
source: https://code.claude.com/docs/en/claude-code-on-the-web
fetched_at: 2026-09-28T09:10:00+09:00
published_at: 2026-09-23T21:23:00Z
date_precision: timestamp
category: release
---

# 2026-09-23 Claude Code cloud sessions の GA と期限付きクレジット

> **追補（2026-09-28 記録）**: 発表は 2026-09-23 で本日の窓（2026-09-27T00:10Z→2026-09-28T00:10Z）の外である。09-24 / 09-25 の日次巡回で拾えておらず、**請求期限 2026-10-07（残り9日）が切れる前に記録が必要**と判断して追補した。バージョンリリースではない独立発表であり、かつ期限が明記された告知であるため、`selection-rubric.md` の「日次リリース型ツールの扱い」の例外1・例外2の両方に当たる。

## 公式内容の日本語要約

Claude Code の **cloud sessions（Anthropic 側のインフラで動くセッション）が research preview を抜けて一般提供**になった。公式ドキュメント `code.claude.com/docs/en/claude-code-on-the-web` から research preview の表記が外れ、**対象は Pro / Max / Team、および premium seat か Chat + Claude Code seat を持つ Enterprise 利用者**と明記されている。

**CLI フラグの正本が `--cloud` に変わった。** ドキュメントは "The older `--remote` spelling still works as a deprecated alias for `--cloud`" と記載する。**`--remote` を書いたスクリプトや手順書は当面動くが、非推奨である。** なお `--remote-control` は別機能（ローカルセッションを claude.ai から操作する）で、`--cloud` とは無関係である点もドキュメントが明示している。

**課金の構造は「VM 自体は無課金、モデル利用は通常のプラン枠」である。** ドキュメントの Limitations に "There is no separate compute charge for the cloud VM" とあり、cloud sessions は他の Claude / Claude Code 利用と同じレート制限を共有する。並列実行すればその分だけ枠を消費する。

**期限付きの販促クレジットが別途ある。** 公式 @ClaudeDevs アカウントの 2026-09-23T21:23Z の告知によると、**既存の Pro 加入者に $100、Max 加入者に $250 の一回限りクレジット**が付く。**アカウントごとに1つ、cloud sessions にのみ使える。** 請求は CLI の `/claim-credit` か告知内のリンクから行い、**GitHub 連携が必須**である。**請求期限は 2026-10-07**、報道ベースでは未使用分の失効は 2026-11-04 とされる。告知直後に混乱が生じたため、Anthropic 側が約4時間半後に「クレジットは通常のプラン枠より先に消費されるバッファであって、別建ての従量課金ではない」と補足している。

**取得上の制約**: GA とフラグ変更・課金構造は公式ドキュメントの本文から直接確認した。**一方、クレジット額・請求期限・失効日は公式 X 投稿と複数報道が一次情報で、公式ドキュメントや公式ブログには記載が見つからない。** 本Skillの規約では SNS 投稿を主ソースにしないため、金額と期限は「公式アカウントの告知＋複数報道が一致する範囲」として扱い、記事本文にもその制約を明記する。

教材化メモ: src/content/ai-news-notes/claude-code/cloud-sessions-ga-credit.mdx

## できるようになったこと

- cloud sessions が research preview を脱し、Pro / Max / Team / 対象 Enterprise で一般提供
- CLI の正本フラグが `--cloud` に変更（`--remote` は非推奨エイリアスとして継続動作）
- ブラウザ / モバイル Code タブ / デスクトップアプリ / ターミナル / routines のいずれからも起動可能
- cloud VM 自体への追加課金は無く、通常のプランのレート制限を共有
- Pro $100 / Max $250 の一回限りクレジット（cloud sessions 専用、アカウント1つにつき1回）
- 請求期限 2026-10-07、未使用分の失効 2026-11-04（報道ベース）
- 請求には GitHub 連携が必要。`/claim-credit` またはリンク経由

## 影響範囲

- 対象ユーザー: Claude Code の Pro / Max / Team 加入者、および premium seat / Chat + Claude Code seat の Enterprise 利用者
- 対象プラン: クレジットは個人の Pro / Max のみ。Team / Enterprise は cloud sessions は使えるがクレジットの対象外
- API / UI / 管理者機能: 組織側は `allow_remote_sessions` ポリシーで可否を制御。Zero Data Retention 有効の組織は cloud sessions を利用不可。IP allowlisting 有効の組織は Anthropic ホストのセッションが認証エラーになる

## 原文確認

- 公式見出し: Use Claude Code in the cloud
- 公式URL: https://code.claude.com/docs/en/claude-code-on-the-web
- 関連公式URL: https://claude.ai/code 、https://code.claude.com/docs/en/cloud-environments
- 公式アカウント告知（クレジット条件の出所）: @ClaudeDevs 2026-09-23T21:23Z
- 原文全文は公式ページで確認してください。
