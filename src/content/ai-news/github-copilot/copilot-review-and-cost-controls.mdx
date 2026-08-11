---
title: "GitHub Copilot が 08-07 週にレビュー運用とコスト可視化をまとめて更新"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-08-07
sourceUrl: "https://github.blog/changelog/label/copilot/"
summary: "GitHub Copilot は 2026-08-07 に5件、08-10 に1件の更新を出した。code review の effort level が GA になり Low / Medium が Lite / Balanced へ改名、Code Quality による Copilot の自動レビュアー追加は撤回、impact dashboard に ROI セクション、usage metrics API にエージェントアプリ別の内訳、web の Copilot Chat にトークン消費表示が入った。"
description: "個別には小さい更新だが、方向は揃っている。レビューをいつ・どの深さで走らせるかを組織が明示的に決める形へ寄せつつ、消費量と費用対効果を管理者と利用者の双方から見えるようにしている。"
impact: "Code Quality の自動レビュアー撤回は、放置するとレビューが静かに止まる種類の変更。effort level の改名も既存の設定ドキュメントを古くする。どちらも通知を見落とすと後から気づきにくい。"
tags: ["github-copilot", "code-review", "cost-management", "governance", "metrics"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHub Copilot は 2026-08-07 に5件、2026-08-10 に1件の更新を出しました。個別には小さな変更ですが、並べると方向が揃っています。レビューをいつ・どの深さで走らせるかを組織が明示的に決める形へ寄せることと、消費量と費用対効果を管理者・利用者の双方から見えるようにすることです。

**code review の effort level が GA**（08-07）。プルリクエストの複雑さに応じてレビュー深度を選ぶ機能で、単純な変更には Lite、規模が大きい・複雑・機微な変更には Balanced を割り当てます。プレビュー時の名称 **Low / Medium は Lite / Balanced へ改名**され、既存の設定は自動的に引き継がれます。対象は Copilot Pro / Pro+ / Max / Business / Enterprise。組織管理者は Settings → Copilot → Copilot code review から組織全体の既定を設定でき、独自設定を持たないリポジトリはそれを継承します。適用された effort level は、タイムラインイベントと PR コメントに表示されるようになりました。

**Code Quality が Copilot を自動レビュアーに追加しなくなった**（08-07）。Copilot への自動レビュー依頼、push 時のレビュー、ドラフト PR へのレビュー依頼という3つの設定がオフになりました。理由は利用者からのフィードバックで、「レビュアーを追加するかどうかは利用者が選ぶべきだ」という指摘を受けたためとされています。この自動挙動は Code Quality が一般提供になった 2026-07-20 時点で有効化されていたもので、今回それを撤回した形です。維持したい場合は、リポジトリまたは組織のレベルで ruleset を作り「Automatically request Copilot code review」を明示的に有効化する必要があります。適用範囲は GitHub Enterprise Cloud と GitHub Team。

**impact dashboard に ROI セクション**（08-07）。「Potential return on investment」として、導入フェーズ別に2枚のカードを並べます。各カードには開発者1人あたりの月額コスト、それが人件費に占める割合、開発者1人あたりの月間プルリクエスト数が入ります。コストは実際の AI クレジット消費量から算出され、管理者は給与セレクタで自組織の報酬水準に合わせた試算ができます。公式はこれを精緻な財務データではなく方向性を示す推定値だとしています。

**usage metrics API がエージェントアプリ別の内訳に対応**（08-07）。任意フィールド `totals_by_3rd_party_agent` が追加され、`agent_name`、安定した識別子の `agent_id`、ジョブ起動回数の `user_initiated_interaction_count`、集計レポートでは `session_count` を取得できます。従来はエージェントの活動がすべて合算されていました。

**Copilot Chat on web の会話コントロール拡張**（08-10）。チャットウィンドウの最小化、会話履歴へのアクセス改善、そして**セッション単位・メッセージ単位のトークン消費とクォータの表示**が入りました。全 Copilot プランで一般提供です。

このほか、週次まとめ（08-07）では Copilot App に `/side` コマンドと処理モデルの表示、CLI に実験的な `/worktree` と Git 非依存の `/rewind`、VS Code 1.132 に `/btw` サイドチャットが入っています。

## 何が変わったか

- code review の effort level が GA。Low / Medium → **Lite / Balanced** へ改名（既存設定は自動引き継ぎ）
- 組織管理者が effort level の組織既定を設定可能。リポジトリは既定を継承、個別レビューで上書き可
- 適用された effort level がタイムラインイベントと PR コメントに表示される
- **Code Quality による Copilot の自動レビュー依頼・push 時レビュー・ドラフト PR レビューが既定オフに**
- 自動レビューを維持するには ruleset で「Automatically request Copilot code review」を明示的に有効化
- impact dashboard に ROI セクション（開発者あたり月額コスト・人件費比率・月間 PR 数）
- usage metrics API に `totals_by_3rd_party_agent` を追加（エージェントアプリ別の利用実績）
- Copilot Chat on web にトークン消費・クォータ表示、ウィンドウ最小化、会話履歴アクセスを追加
- App に `/side`、CLI に `/worktree` `/rewind`、VS Code 1.132 に `/btw` を追加

## 業務インパクト（一般企業向け）

この6件のうち、**放置すると実害が出るのは Code Quality の自動レビュアー撤回**です。

2026-07-20 に Code Quality が GA になったとき、Copilot が自動的にレビュアーとして入る挙動が有効でした。この前提で運用を組んだチームは、PR を出せば Copilot のレビューが付くものとして動いています。それが 08-07 に既定オフへ戻りました。何もしなければ、明日から Copilot のレビューコメントが付かなくなります。壊れるのではなく、静かに止まります。この種の変更は、誰も気づかないまま数週間経ってから「最近レビューが来ないな」と発覚するのが典型です。

自動レビューを続けたい組織は、ruleset で明示的に有効化する必要があります。作業自体は数分ですが、「誰がそれをやるか」が決まっていない組織では放置されます。まず自社が Code Quality を使っているかを確認し、使っているなら ruleset の設定を今週中のタスクとして立てるべきです。

GitHub 側の判断そのものは筋が通っています。「レビュアーを追加するかは利用者が選ぶべき」という指摘は正当で、GA と同時に自動で入る設計の方が押し付けがましいものでした。ただ、GA 時点の既定を3週間足らずで撤回している点は、Copilot 周りの既定値が今後も動きうることを示しています。既定値に依存した運用は、明示的な設定に置き換えておく方が安全です。

effort level の改名も、影響は小さいものの見落としやすい変更です。社内の手順書やオンボーディング資料に「Low を選ぶ」と書いてあれば、その記述は古くなります。設定値そのものは自動で引き継がれるため動作は変わりませんが、ドキュメントと画面表示が食い違う状態は新任者を確実に混乱させます。

ROI セクションと usage metrics API の拡張は、**導入推進側にとって使える材料**です。AI コーディング支援の投資対効果は、社内説明で必ず問われる一方、説得力のある数字を作りにくい領域でした。GitHub 自身が指標の型を出したことに意味があります。ただし公式が directional estimate と断っている点は、そのまま引用すべきです。「開発者1人あたり月額◯円で PR が◯本増えた」という数字を精密な効果測定として提示すると、後で突っ込まれたときに全体の信頼が落ちます。

usage metrics API のエージェント別内訳は、複数のエージェントアプリを併用している組織で効きます。「どれが実際に定着したか」を推測ではなく実データで見られるようになるため、ライセンスの整理に直結します。導入したまま誰も使っていないエージェントに費用を払い続けている、という状態を検出できます。

## 副業・個人活用視点

個人利用者にとって直接効くのは、**Copilot Chat on web のトークン消費表示**です。

セッション単位・メッセージ単位のクォータが常時見えるようになりました。これは地味ですが、AI ツールを使ううえでの感覚を作ってくれる機能です。長い会話を続けると消費が増える、コンテキストを積むと1メッセージあたりのコストが上がる — こうした挙動は説明されても実感しにくく、請求を見て初めて理解するのが普通です。数字が目の前に出ていると、「この質問は新しい会話で聞いた方がいい」という判断が自然に身につきます。

同じ週に入った App の `/side` と VS Code の `/btw` も、この文脈で読むと意味が見えます。どちらも「本筋の会話を汚さずに脇道の質問をする」ための導線で、VS Code 側は本筋のコンテキストキャッシュを保つと明記されています。つまり、会話を分けることが品質だけでなくコストの面でも有利になる、という設計です。この使い分けは Claude Code や他のツールでも同じ理屈が成り立つため、習慣として身につけておく価値があります。

CLI の `/rewind` は、Git を使わずに以前の会話状態へ戻せる機能です。試行錯誤の多い作業で、コミットを刻まずに巻き戻せるのは実務的に便利です。実験的な `/worktree` は、会話ごとに隔離されたワークスペースを作ります。Claude Code の worktree 機能と発想が同じで、複数の作業を並行させたい人には馴染みやすいはずです。

案件の観点では、**ROI ダッシュボードと usage metrics API が提案の材料になります**。中小企業で Copilot を導入したものの、「効果があるのか分からない」という理由で更新をためらうケースは珍しくありません。指標が公式に用意されたことで、「導入効果を可視化する仕組みを整える」という支援が成立します。API 側を使えば、エージェント別の利用実績を自社の BI に流し込むところまで組めます。管理者権限と usage metrics ポリシーの有効化が前提になるため、提案時にはそこを先に確認してください。

## 関連リンク

- [Copilot code review effort levels are generally available](https://github.blog/changelog/2026-08-07-copilot-code-review-effort-levels-are-generally-available)
- [GitHub Code Quality no longer adds Copilot as a reviewer](https://github.blog/changelog/2026-08-07-github-code-quality-no-longer-adds-copilot-as-a-reviewer)
- [Copilot impact dashboard adds a return on investment section](https://github.blog/changelog/2026-08-07-copilot-impact-dashboard-adds-a-return-on-investment-section)
- [Copilot usage metrics API adds agent app activity](https://github.blog/changelog/2026-08-07-copilot-usage-metrics-api-adds-agent-app-activity)
- [Copilot on web expands conversation controls](https://github.blog/changelog/2026-08-10-copilot-on-web-expands-conversation-controls)
- [GitHub Copilot weekly releases — August 3](https://github.blog/changelog/2026-08-07-github-copilot-weekly-releases-august-3)
