---
title: "Cloudflare API MCP server が Skills over MCP でスキルを配信 — ローカルへのインストールなしで skills/list から取得できる"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-10-10
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-10-10-cloudflare-mcp-skills/"
summary: "Cloudflare API MCP server（https://mcp.cloudflare.com/mcp）が、Cloudflare skills を Skills over MCP 拡張で配信するようになった。従来の Cloudflare skills はエージェントごとのプラグイン導入か、スキルフォルダを ~/.claude/skills/ や ~/.cursor/skills/ へコピーするローカル配置が前提だったが、拡張に対応した MCP クライアントは MCP 接続そのものからスキルを取得できる。公式の記述では、クライアントは skills/list でスキルを発見し、skill://<name>/<path> でファイルを読む。接続先は既存の MCP エンドポイントのままで、新しい URL は追加されていない。対象プラン、対応クライアントの具体名、配信されるスキルの範囲は changelog に記載が無い。"
description: "スキルの配布経路が、ファイルのコピーから MCP 接続へ移る。"
impact: "Cloudflare skills を各メンバーのマシンへ入れて回る作業が、MCP サーバーの URL を1つ追加する作業に置き換わる。同時に、スキルの中身がサーバー側で差し替わる経路ができるため、何を読まされているかの把握はローカル配置より難しくなる。"
tags: ["cloudflare", "MCP", "Agent Skills", "Skills over MCP", "エージェント", "配布と更新"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/claude-code/mcp"
  - "/knowledge/ai-tools/claude-code/skills"
  - "/knowledge/ai-tools/codex/agent-skills"
  - "/knowledge/ai-tools/codex/mcp-integration"
draft: false
---

## 要約

Cloudflare API MCP server が、**Cloudflare skills を Skills over MCP 拡張経由で配信するようになりました。**

**まず前提を2つ整理します。**

**1つ目は Cloudflare skills です。** `github.com/cloudflare/skills` で公開されている、**エージェントに Cloudflare での開発方法を教えるスキル集**です。`wrangler`、`agents-sdk`、`durable-objects`、`workers-best-practices`、`nextjs-on-cloudflare` など17個が入っています。中身は Agent Skills 仕様に沿った `SKILL.md` とその付属ファイルです。

**2つ目は Cloudflare API MCP server です。** `https://mcp.cloudflare.com/mcp` にある MCP サーバーで、**2,500 以上の Cloudflare API エンドポイントを `search()` と `execute()` の2ツールだけで扱います。** Code Mode パターンと呼ばれる方式で、モデルが OpenAPI 仕様の型表現に対して JavaScript を書き、それが隔離された Dynamic Worker サンドボックスで動きます。エンドポイント数にかかわらず**約 1,000 トークン**で済むと説明されています。

**今回変わったのは、この2つ目が1つ目を配るようになった、という点です。**

**従来、スキルはローカルに置くものでした。** Claude Code なら `~/.claude/skills/`、Cursor なら `~/.cursor/skills/`。導入手段はエージェントごとのプラグインマーケットプレイス、`npx skills add`、あるいはリポジトリをクローンしてフォルダをコピーする手作業です。**どれも「ファイルを自分のマシンに置く」ことが前提**でした。

**今回、Skills over MCP 拡張に対応した MCP クライアントは、MCP 接続そのものからスキルを取得できます。** 公式の記述では、クライアントは **`skills/list` でスキルを発見し、`skill://<name>/<path>` でファイルを読みます。** 利用に必要なのは、互換クライアントへ `https://mcp.cloudflare.com/mcp` を追加することだけです。

**接続先は変わっていません。** 新しいエンドポイントは追加されておらず、**既に Cloudflare API MCP server を繋いでいる環境なら、クライアント側が拡張に対応した時点でスキルが見えるようになる**構造です。

**公式 changelog に書かれていないことを明示します。** **対象プラン、対応クライアントの具体名、配信されるスキルが17個すべてなのか一部なのか**——いずれも記載がありません。対応状況は MCP 側の client matrix を見るよう案内されています。なお本記事の執筆時点で、**`modelcontextprotocol.io` のドキュメントは参照できませんでした**（情報源の制約を末尾に記載します）。

## 何が変わったか

- **Cloudflare API MCP server が Cloudflare skills を配信するようになった**（2026-10-10）
  - 配信方式: **Skills over MCP 拡張**
  - 発見: **`skills/list`**
  - ファイル読み取り: **`skill://<name>/<path>`**
- **接続先は既存のまま**: `https://mcp.cloudflare.com/mcp`。新しいエンドポイントは追加されていない
- **従来の導入経路は残る**: プラグインマーケットプレイス（Claude Code / Codex / Cursor / VS Code）、`npx skills add`、スキルフォルダの手動コピー
- **Cloudflare skills の中身は従来どおり17個**（`cloudflare`、`wrangler`、`agents-sdk`、`durable-objects`、`workers-best-practices`、`workers-profiling`、`nextjs-on-cloudflare`、`sandbox-next`、`sandbox-stable`、`sandbox-migrate-to-next`、`basin`、`k2`、`cloudflare-email-service`、`turnstile-spin`、`web-perf`、`cloudflare-one`、`cloudflare-one-migrations`）
- **changelog に記載が無いもの**: 対象プラン、対応クライアントの具体名、MCP 経由で配信されるスキルの範囲

## 業務インパクト（一般企業向け）

**これは機能追加ではなく、配布方式の変更です。** 評価の軸は「何ができるようになったか」ではなく「**何を誰が管理することになるか**」です。

**得られるものは明確です。配布と更新の手間が消えます。**

**従来、チームでスキルを揃えるのは面倒な作業でした。** 10人のチームなら、10台のマシンに同じスキルを入れます。プラグインマーケットプレイス経由なら多少楽ですが、**エージェントが混在していると経路が分かれます**——Claude Code の人、Codex の人、Cursor の人、VS Code の人。それぞれ別の手順です。さらに**更新**があります。Cloudflare 側がスキルを直したとき、各自が引き直すまで古いまま動きます。

**MCP 経由なら、接続先の URL を1つ共有するだけです。** 更新はサーバー側で反映されます。**「全員が同じスキルを見ている」状態を、配布作業なしで保てます。** 社内の標準 MCP 設定を配っている組織なら、そこへ1行足すだけで済みます。

**ここからが、見落としやすい側の話です。**

**スキルの中身が、サーバー側で差し替わる経路ができました。** ローカルにファイルがあれば、`git diff` で何が変わったか見られます。**MCP 経由だと、クライアントが取得するたびに最新が来ます。** 何を読まされているかの把握は、ローカル配置より確実に難しくなります。

**これはサプライチェーンの話として扱うべきです。** スキルはエージェントへの指示文です。**「Cloudflare で何かするときは、まずこの手順を踏め」という内容がモデルの文脈に入ります。** 配布元を信頼する判断は、ローカル配置でもMCP 経由でも必要ですが、**「いつ変わったか分からない」という点でMCP 経由のほうがリスクの形が違います。**

**社内で判断すべきことは3つです。**

**1つ目。この経路を使うかどうかを、組織として決めてください。** 各メンバーが勝手に MCP サーバーを足す状態だと、**誰がどのスキルを読んでいるかが把握できません。** 標準の MCP 設定を配っているなら、そこへ入れるか入れないかの判断です。配っていないなら、まずそこから作る話になります。

**2つ目。既に Cloudflare API MCP server を繋いでいる環境を洗い出してください。** 今回の変更は**接続先が変わらない**ため、クライアント側が拡張に対応した時点で、**設定を変えていないのに挙動が変わります。** 「何も変えていないのにエージェントの振る舞いが変わった」という問い合わせの原因になりえます。

**3つ目。認証の経路を確認してください。** Cloudflare API MCP server は OAuth または API トークンの bearer 認証で動きます。**スキル配信が乗ったことで、認証の仕組み自体は変わっていません。** ただし CI/CD で API トークンを使っている構成なら、**そのトークンが何に使われるかの範囲が広がった**ことになります。トークンのスコープを見直す機会です。

**既存のスキル資料が古くなる可能性があります。** 社内手順書に「Cloudflare skills は `npx skills add` で入れる」と書いてあるなら、**それは今も正しいが、唯一の方法ではなくなりました。** どちらを標準にするかを決めて、手順書に書いてください。両方を併記して「好きな方で」とすると、1つ目の問題に戻ります。

## 副業・個人活用視点

**この変更は、MCP の役割が「ツールを配る」から「文脈を配る」へ広がった実例です。** ここを掴んでおくと、しばらく使えます。

**MCP はこれまで、ツール呼び出しの規格として理解されてきました。** サーバーがツールを並べ、モデルが呼ぶ。Resources もありますが、**主役はツールでした。** 今回の Skills over MCP は、**「エージェントへの指示文そのもの」を MCP で運ぶ**話です。ツールの数は増えていません。Cloudflare API MCP server は `search()` と `execute()` の2つのままです。**増えたのは、その使い方を教える文書のほうです。**

**記事にするなら、この対比が軸になります。** 「MCP でツールを増やす」のと「MCP でスキルを配る」のは、**解いている問題が違います。** 前者はエージェントの能力の問題、後者は**配布と更新の問題**です。後者は地味ですが、チームで使う段階では確実にぶつかります。

**個人開発での実利は、環境構築の短縮です。** 新しいマシン、新しいコンテナ、クラウドのセッション——**そのたびにスキルを入れ直す作業が消えます。** MCP の設定だけ持ち回れば済みます。使い捨ての開発環境を頻繁に立てる人には、これが一番効きます。

**ここは正直に書いておく価値があります。対応クライアントが分かりません。** 公式 changelog は「拡張に対応したクライアント」と書き、具体名は client matrix 側に委ねています。**つまり今日の時点で、自分の環境で使えるかどうかは自分で確かめる必要があります。** `skills/list` が通るか試すのが最短です。**この「試して確かめた」記録は、そのまま記事になります。** 公式が書いていない情報だからです。

**保守・導入支援の仕事として形にできます。** 「Cloudflare skills の配布を、各マシンへのコピーから MCP 経由へ移します。標準の MCP 設定を作り、既存のローカル配置を棚卸しして重複を消します」——**半日程度の作業で、効果が説明できる仕事**です。チームが5人を超えていれば、配布と更新の手間は確実に発生しているので、困りごととして実在します。

**ただし、提案するなら「見えにくくなる」側も一緒に説明してください。** 「サーバー側で差し替わるので、ローカル配置のときより中身の把握が難しくなります。信頼できる配布元に限って使いましょう」——**これを言える人と言えない人で、信用の差が出ます。** 便利さだけ説明して導入させ、後でサプライチェーンの話が出てくるのが最悪の形です。

**題材としての旨味は、「規格が広がるときに何が起きるか」を書けることです。** MCP は認証（OAuth Provider）、ステートレス化、ポータル、そしてスキル配信と、**役割を広げ続けています。** 個々の変更を追うより、**「この規格はどこまで引き受けようとしているのか」**という視点で並べると、読者にとって価値が出ます。Cloudflare はその変化を製品に反映するのが早いので、観測点として使いやすいです。

## 情報源の制約

**本記事の `skills/list` と `skill://<name>/<path>` という記述は、Cloudflare 公式 changelog の記載を一次情報としています。** changelog が参照している Skills over MCP 拡張の仕様ページと MCP client matrix（`modelcontextprotocol.io`）は、**執筆時の環境から DNS 解決できず参照できませんでした。** そのため**拡張仕様の詳細（他のメソッド、capability の宣言方法、仕様の確定日）、および対応クライアントの具体名は本記事では扱いません。** 正確な仕様は公式ページで確認してください。

## 関連リンク

- [Cloudflare API MCP server serves Cloudflare skills（Cloudflare Changelog）](https://developers.cloudflare.com/changelog/post/2026-10-10-cloudflare-mcp-skills/)
- [cloudflare/skills（GitHub）](https://github.com/cloudflare/skills)
- [Cloudflare's own MCP servers（Cloudflare Docs）](https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/)
