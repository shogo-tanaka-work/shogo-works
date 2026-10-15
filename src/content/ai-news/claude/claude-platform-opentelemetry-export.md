---
title: "Claude API のトレースが既存の監視基盤へ流れる — OpenTelemetry エクスポートがベータ提供、プロンプト本文を含めるかは content mode で決める"
tool: "claude"
toolLabel: "Claude"
date: 2026-10-14
sourceUrl: "https://claude.com/blog/agent-observability-on-the-claude-platform"
summary: "Claude API と Claude SDK が OpenTelemetry トレースの出力に対応した（public beta）。Messages API のリクエスト、ツール実行、Managed Agents のセッションを span として出し、OTLP を受けられる監視基盤へそのまま流せる。属性は GenAI semantic conventions に従うため、他プロバイダーのデータと同じダッシュボードに並べられる。経路は2つで、SDK トレーシング（コードで設定・権限不要）と API トレーシング（Console で宛先追加・Admin 権限が必要）で取れる範囲が違う。既定の content mode は metadata_only で、content にするとプロンプトと応答そのものが span に入る。Full content の既定上限は span あたり 0.75 MB で、超過時は短縮され anthropic.content.truncated が true になる。"
description: "エージェントの挙動を「あとから読み返せる」状態にする仕組み。導入判断の分かれ目は機能ではなく、プロンプト本文をどこへ置くかの判断である。"
impact: "本番で動いているエージェントの失敗・遅延・トークン消費を、既存の監視基盤で追えるようになる。一方で Full content を選ぶとプロンプトと応答が自社の監視基盤へ出るため、保存期間とアクセス制御の責任が送信先側へ移る。API トレーシングは Admin 権限が必要で、情シスの承認を前提にした導入になる。"
tags: ["claude", "claude-platform", "opentelemetry", "可観測性", "managed-agents", "監視設計", "トークン集計", "ガバナンス"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/claude/overview"
draft: false
---

## 要約

Claude API と Claude SDK が **OpenTelemetry（OTel）トレースの出力**に対応しました。ステータスは **public beta** です。

**何が変わるかは、これまで何が見えなかったかを思い出すと分かります。**

エージェントを本番で動かすと、必ず「なぜこの結果になったのか」を調べる場面が来ます。ところが従来は、**APIの外側から見えるのはリクエストとレスポンスだけ**でした。Managed Agents のように内部で複数のモデル実行とツール実行が走る構成では、**どのステップで時間がかかったのか、どのツールが失敗したのか、トークンがどこで消えたのかが外から追えません。** ログを自前で仕込んでも、サーバー側で走る server tools の内側は埋められません。

**今回はここが埋まりました。** Messages API のリクエスト、ツール実行、Managed Agents のセッションが **span** として出力され、**OTLP を受けられる監視プラットフォームへそのまま流れます。**

**属性が GenAI semantic conventions に従う点が効きます。** OpenTelemetry には生成AI向けの属性規約があり、Claude の span はそれに沿っています。つまり**他のプロバイダーのデータと同じダッシュボードに並べられる**ということです。監視基盤側で Claude 専用の設定を書く必要がありません。

**経路は2つあり、取れるものが違います。** ここを混同すると「設定したのに見えない」になります。

**SDK トレーシング**はアプリ側のコードで tracer provider を登録します。**権限は不要**です。クライアントツール（tool runner 経由で自分が実行するツール）、self-hosted sandbox 内のツール、ファイルアップロードなどの他の API リクエストが取れます。対応言語は **Python / TypeScript / C# / Go / Java / PHP / Ruby** です。

**API トレーシング**は Claude Console で宛先を追加します。**Admin 権限が必要**です。こちらは**リクエスト内の各モデル実行、Managed Agents のターン、API 側が走らせる server tools** が取れます。SDK を使っていないクライアントからのリクエストも対象になります。

**両方を設定すると1つのトレースに統合されます。** ただし **Claude Platform on AWS では API span が別トレースになる**と明記されています。

**導入判断の中心は、機能ではなく content mode です。** 各宛先と各 SDK クライアントに content mode があります。

既定は **`metadata_only`** で、span に入るのは ID・時刻・ステータス・トークン数と、自分で決めた文字列（エージェント名、ツール名と説明、MCP サーバー名）だけです。**`content`** にすると、**モデルへのプロンプトと応答そのもの**が span に入ります。失敗や遅延の原因を読み、会話を丸ごと振り返り、実トラフィックから eval を作れるようになります。

**ここが分かれ目です。** Full content を選ぶと、**プロンプトと応答は自社の監視基盤に保存されます。** 公式も「その保存とアクセス制御は監視プラットフォーム側の設定に従うので、組織の要件を満たしているか確認してほしい」と書いています。**データの置き場所と責任が移るという判断**であり、機能のオン・オフではありません。

**データ制約がある組織には追加の扱いがあります。** HIPAA / FERPA / K-12 のデータ取り扱い制約を Anthropic と結んでいる組織では、**content mode の設定にかかわらず宛先はメタデータのみを出します**（SDK span は対象外）。**zero data retention 下でも Full content は使えます**。Messages API のリクエストでは、API はエクスポートする内容を宛先へ届けるまでメモリ上にのみ保持します。ただし **Managed Agents は zero data retention の対象外**で、OpenTelemetry を使ってもデータ保持の扱いは変わりません。

**Full content には既定のサイズ上限があります。** **span あたり 0.75 MB**です。これは英語テキストで 200k トークンのコンテキストウィンドウに相当し、多くの監視基盤とプロキシの 1 MB 制限を下回る値として選ばれています。超過すると短縮され、**`anthropic.content.truncated` が `true`** になります。**リクエスト span はシステムプロンプトと古いメッセージから落とし、ツール span は結果の末尾から落とします。** 画像と文書は種類だけが残ります。1M トークンを丸ごと通すには約 4 MB が必要で、SDK は `traces.max_content_bytes`、Console は Advanced settings の「Maximum content size in MB」で変更します。

**トークン集計には重複カウントの罠があります。** 同じリクエストに SDK span と API span の両方があるとき、**合計するのは API span 側だけ**です。どちらも `anthropic.messages.create` という名前なので、**span の kind（SDK 側が `CLIENT`、API 側が `SERVER`）で判別します。** compaction が走ったリクエストでは、compaction 分が `gen_ai.usage.*` に含まれないため別の属性を加算します。

**span の配信は best effort で、欠落しうると明記されています。** 呼び出し側が `traceparent` ヘッダの sampled フラグを落とせば、そのリクエストの span は出ません。**API キー単位の正確な使用量（鍵の漏洩検知など）には Usage API を使う**よう公式が案内しています。**トレースは監視の道具で、課金の台帳ではない**という線引きです。

**対応パートナーは12社が挙がっています。** Arize AI、Braintrust、Databricks、Datadog、Grafana Cloud、Honeycomb、Langfuse、LangSmith、New Relic、PostHog、Sentry、Splunk。いずれも接続手順を自社ドキュメントで公開しています。

**Claude Code / Agent SDK / Cowork は別系統です。** それぞれ専用のドキュメントが正本になります。

## 何が変わったか

- **OpenTelemetry エクスポート**が public beta で提供（Messages API / Sessions API / Managed Agents / server tools / クライアントツール）
- **属性は GenAI semantic conventions 準拠**（他プロバイダーのデータと同じダッシュボードへ並べられる）
- **SDK トレーシング**: コードで設定、**権限不要**、対応言語は Python / TypeScript / C# / Go / Java / PHP / Ruby
- **API トレーシング**: Claude Console で宛先追加、**Admin 権限が必要**、SDK を使わないクライアントも対象
- **両方設定で1トレースに統合**（**Claude Platform on AWS では API span が別トレース**）
- **content mode**: 既定 `metadata_only` / 全文は `content`
- **HIPAA / FERPA / K-12 制約のある組織では、宛先はメタデータのみ**（SDK span は対象外）
- **zero data retention 下でも Full content 可**。ただし **Managed Agents は zero data retention 対象外**
- **Full content の既定上限は span あたり 0.75 MB**、超過時は短縮して `anthropic.content.truncated: true`
- 上限変更は SDK の `traces.max_content_bytes` / Console の「Maximum content size in MB」。**1M トークンには約 4 MB**
- **トークン集計は API span 側のみを合計**。SDK span と API span は kind（`CLIENT` / `SERVER`）で判別
- **span の配信は best effort で欠落しうる**。正確な使用量は Usage API
- セッションは `anthropic.session.id`、スレッドは `gen_ai.conversation.id` でまとめる
- 対応パートナー12社（Arize AI / Braintrust / Databricks / Datadog / Grafana Cloud / Honeycomb / Langfuse / LangSmith / New Relic / PostHog / Sentry / Splunk）
- **料金・プラン別の差・リテンション・サンプリング仕様は公式ページに記載がない**

## 業務インパクト（一般企業向け）

**「エージェントを本番に出していいか」という議論の材料が変わります。** これまでは「失敗したら気づけるのか」という問いに対して、アプリ側のログで答えるしかありませんでした。内部のモデル実行とツール実行が見えない状態で、**実質的に「様子を見る」以上のことができませんでした。** トレースが出るなら、**どのステップが落ちたかを後から特定できる**という前提で話が進みます。公式も「より多くの権限を与える前に挙動を確認する手段」としてトレースを位置づけています。

**導入の最初の決定は content mode です。** ここを決めずに「まず入れてみる」をやると、**プロンプトと応答が監視基盤へ流れた後で気づく**ことになります。扱っている業務データがプロンプトに入る構成なら、**監視基盤の保存期間とアクセス権が、そのデータの保存期間とアクセス権になります。** 情シスと法務の確認対象は Claude 側ではなく、**自社の監視基盤側**です。この順序を間違えないことが実務の要点です。

**API トレーシングに Admin 権限が必要な点は、段取りに影響します。** 開発者が自分の判断で始められるのは SDK トレーシングだけです。**モデル実行単位の内訳や Managed Agents のターンを見たいなら、組織の承認が必要**になります。PoC の設計時に、どちらの経路で何を見るつもりかを決めておくと手戻りが減ります。

**トークン集計の仕様は、コスト管理の担当者に直接関わります。** SDK span と API span を両方合計すると**二重計上**になります。compaction を使っている構成では、逆に**加算しないと漏れます**。さらに span は欠落しうると公式が明記しています。**「ダッシュボードの数字を請求の根拠にしない」**という線を最初に引くべきです。正確な使用量は Usage API 側で取ります。

**既存の監視基盤を持っている組織が有利な変更です。** Datadog / Grafana / New Relic / Splunk などを既に運用しているなら、**新しい監視製品を増やさずに AI 部分を同じ画面へ載せられます。** 稟議の難易度が下がります。逆に監視基盤を持っていない組織では、**この機能を活かすために監視基盤の導入から始まる**ことになり、話の規模が変わります。

**HIPAA / FERPA / K-12 の制約がある組織では、宛先側は自動的にメタデータのみになります。** 設定ミスで全文が出る事故は起きにくい設計です。ただし **SDK span は対象外**と明記されているため、**アプリ側のコードで設定した content mode は別に確認する必要があります。**

## 副業・個人活用視点

**「エージェントの監視を設計できる」は、今の時点で希少なスキルです。** エージェントを作れる人は増えました。**動かし続ける部分を設計できる人は、まだ足りていません。** OpenTelemetry は特定ベンダーに縛られない標準で、ここを押さえると**Claude に限らず他プロバイダーでも同じ話ができます。** 単発の構築案件より、運用設計の相談のほうが継続します。

**content mode の判断を言語化できると、それ自体が提案になります。** 「全文を取るか、メタデータだけにするか」は技術の問題ではなく、**顧客のデータがどこに保存されてよいかという問題**です。クライアントの業種によって答えが変わります。**この問いを最初に出せるかどうか**で、提案の信頼度が変わります。実装の前に決める項目として整理しておくと強いです。

**トークン集計の落とし穴は、記事にすると読まれます。** 「SDK span と API span を両方足すと二重計上になる」「compaction 分は別属性」「span は欠落しうるので請求根拠にしない」。**公式ドキュメントに書いてありますが、分散して書かれています。** 実際に集計を組んだ人の手順としてまとめると、同じ作業をする人の時間を節約できます。検索で拾われる種類の内容です。

**0.75 MB という上限は、自分で確かめられる数字です。** 長いプロンプトを投げて `anthropic.content.truncated` が `true` になる条件、**システムプロンプトから落ちる順序**、ツール結果が末尾から落ちる挙動。公式は仕様を書いていますが、**実際に何が消えるかを見た記録は見つけにくいです。** Claude Platform のアカウントと監視基盤の無料枠だけで検証できる範囲で、**公式ドキュメントの補完として読まれる題材**になります。

**パートナー12社のうち無料枠があるものを選べば、個人でも全体を通せます。** Langfuse や PostHog のようにオープンソース・無料枠がある選択肢が含まれています。**自分の環境で一通り動かした経験**は、企業向けの提案で「やったことがある」と言える根拠になります。ベータのうちに触っておく価値があります。
