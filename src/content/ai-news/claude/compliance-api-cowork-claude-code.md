---
title: "Claude Code のセッションが監査対象になった：Compliance API が Cowork と Claude Code をカバー"
tool: "claude"
toolLabel: "Claude"
date: 2026-08-11
sourceUrl: "https://claude.com/blog/compliance-api-cowork-and-claude-code"
summary: "Anthropic が Compliance API の対象を Claude Cowork（デスクトップ / Web / モバイル）と Claude Code（CLI / デスクトップ）へ拡張した。Claude Enterprise 向けのベータで、既存の Compliance Access Key をそのまま使える。新設のセッションエンドポイントは、プロンプトと応答、ツール呼び出しの内容（Web / MCP）、Skill を含むトランスクリプトを、検証済みユーザー ID・組織 ID・タイムスタンプなどのメタデータとともに返す。"
description: "カバー範囲には明確な穴がある。Claude Code on the web、Claude Platform 経由の Claude Code、Amazon Bedrock / Google Cloud Vertex AI / Microsoft Foundry 上のセッションは現時点で対象外。既存の OpenTelemetry エクスポートとは併用できる。"
impact: "これまで「チャットは監査できるがコーディングエージェントは見えない」状態だった Enterprise で、監査範囲の穴が一つ塞がる。同時に、対象外の経路が残っていることが、利用経路をどう統制するかという設計課題を浮かび上がらせる。"
tags: ["claude", "claude-code", "cowork", "enterprise", "compliance", "governance"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Anthropic が 2026-08-11、**Compliance API の対象範囲を Claude Cowork と Claude Code へ広げた**と発表しました。Claude Enterprise 向けのベータ提供です。

Compliance API は、組織が自社の Claude 利用を外部の監査・DLP・eDiscovery 基盤へ取り込むための管理者向け API です。これまで対象は Claude の通常のチャットセッションに限られていました。つまり、**社員がブラウザで Claude と話した内容は監査できるのに、同じ社員が Claude Code でコードベースを触った内容は見えない**という状態が続いていたことになります。今回の拡張は、この穴のうち大きい部分を塞ぐものです。

対象になったのは Claude Cowork（デスクトップ / Web / モバイル）と Claude Code（CLI / デスクトップ）です。新設されたセッションエンドポイントは、サーバー側に保持されたトランスクリプトを統合した形で返します。返る内容は2種類に分かれます。ひとつはセッションの中身で、**プロンプトと応答、ツール呼び出しの内容（Web および MCP）、そして Skill** が含まれます。もうひとつはメタデータで、検証済みのユーザー ID とメールアドレス、組織 ID、セッション ID とメッセージ ID、タイムスタンプが返ります。

導入のハードルは低く設計されています。**既存の Compliance Access Key をそのまま使える**ため、別途の連携実装は不要です。すでに Compliance API を有効にしている組織は、新しいエンドポイントを今日から照会できます。まだ使っていない組織は platform.claude.com のドキュメントから有効化します。OpenTelemetry のエクスポートを併用している場合は、そちらと共存します。

一方で、カバー範囲には明示された除外があります。**Claude Code on the web、Claude Platform 経由の Claude Code、そして Amazon Bedrock / Google Cloud Vertex AI / Microsoft Foundry 上のセッションは現時点で対象外**です。「Claude Code が監査できるようになった」と一括りに理解すると、実際には見えていない経路が残ります。

## 何が変わったか

- Compliance API の対象に Claude Cowork（デスクトップ / Web / モバイル）と Claude Code（CLI / デスクトップ）が加わった
- 新設のセッションエンドポイントが、サーバー側保持のトランスクリプトを統合形式で返す
- 返る内容にプロンプト・応答・ツール呼び出しの内容（Web / MCP）・Skill が含まれる
- メタデータとして検証済みユーザー ID / メール、組織 ID、セッション ID / メッセージ ID、タイムスタンプが返る
- 既存の Compliance Access Key をそのまま利用でき、追加の連携実装が不要
- Claude Enterprise 限定のベータ提供。既存の OpenTelemetry エクスポートとは併用可能
- 対象外: Claude Code on the web、Claude Platform 経由の Claude Code、Bedrock / Vertex AI / Foundry 上のセッション

## 業務インパクト（一般企業向け）

コーディングエージェントの社内導入で、法務や情シスが最後まで抵抗する論点は、たいてい「何が起きたか後から追えるのか」です。チャット UI なら会話ログという分かりやすい単位があります。しかしコーディングエージェントは、ファイルを読み、コマンドを実行し、外部の MCP サーバーを叩きます。**この一連の動作がログとして残らなければ、インシデント時に何が持ち出されたのかを再構成できません。**

今回の拡張で、Claude Enterprise ではこの再構成が可能になります。とくに**ツール呼び出しの内容が含まれる**点が実務的には大きい。どのファイルを読んだか、どの MCP サーバーへ何を渡したかが記録に残るということです。DLP や eDiscovery の基盤にすでに Claude のチャットログを流し込んでいる組織なら、同じ経路に Claude Code のセッションを追加するだけで済みます。

そのうえで、除外リストの読み方を間違えないでください。**Bedrock / Vertex AI / Foundry 経由が対象外である**という事実は、クラウドプロバイダー経由で Claude を使っている組織にとって決定的です。「Anthropic が監査 API を出したから統制できる」という説明は、その組織では成り立ちません。同様に、Claude Code on the web が対象外である以上、CLI とデスクトップだけを許可し Web 版をブロックする、といった経路の絞り込みが監査要件とセットになります。**監査できる経路だけを許可する**という設計に踏み込むかどうかが、この発表を受けた実務上の判断になります。

また、記録される内容がプロンプトと応答の全文を含むことは、それ自体が管理対象データの増加を意味します。誰がこの API を叩けるのか、取得したトランスクリプトをどこに保管し、いつ消すのか。Compliance Access Key の管理権限を含めて、有効化の前に決めておくべき事項です。監査ログを整備した結果、機微情報の保管場所が一つ増えた、では本末転倒になります。

## 副業・個人活用視点

Enterprise 限定の機能なので、個人でそのまま使う話ではありません。ただし、**企業向けに AI 導入支援をしている個人にとっては、提案書の解像度を上げる材料**になります。

コーディングエージェントの導入提案が止まる理由は、性能ではなく統制であることが多い。「Claude Code を入れたい」という現場の声に対して、情シスが「ログはどうなるのか」と返して膠着する、という構図です。ここで**「Compliance API の対象が 2026-08 に Claude Code まで広がった。ただし Bedrock 経由と Web 版は対象外なので、CLI とデスクトップに経路を絞る前提で設計する」**と具体的に言えるかどうかで、提案の通り方が変わります。除外リストまで押さえた説明は、調べていないと出てこないので差がつきます。

案件として拾える形にするなら、監査ログの取り込み側です。Compliance API から取得したトランスクリプトを既存の SIEM やログ基盤へ流し込む部分は、実装が必要な領域として残ります。ここは Anthropic が用意してくれる部分ではないので、**取得・整形・保管の仕組みを作る**という切り口で提案できます。保持期間や権限設計まで含めて設計できると、単発の実装ではなく運用込みの相談になります。

学習の観点では、この発表を「監査 API が増えた」で終わらせず、**エージェントのログに何が含まれるべきかという問い**として読むと応用が利きます。プロンプトと応答だけでは足りず、ツール呼び出しの内容が要る。この判断はどのエージェント基盤にも共通します。自分で MCP サーバーやエージェントを作るとき、何をログに残す設計にするかの参照点になります。
