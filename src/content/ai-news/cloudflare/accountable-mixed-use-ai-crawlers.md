---
title: "Cloudflare が「検索に残したまま AI 学習だけ拒否する」設定を公開 — 既存の Block AI Bots 設定は自動移行される"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-09-15
sourceUrl: "https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/"
summary: "Cloudflare が 2026-09-15、検索での発見可能性を維持したまま AI 学習だけを拒否できる Disallow AI Training 設定と、Accountable というクローラー designation を公開した。検索と学習を1つのクローラーで兼ねる mixed-use crawler では従来トレードオフが避けられなかった。Apple / Google / Microsoft が mixed-use の Accountable として認定され、Microsoft は robots.txt での no-training 対応を2027年初頭目標としているため、それまで設定が Bing へ自動伝達されない。全プラン・全顧客対象で、既存の Block AI Bots 設定は自動移行される。"
description: "サイト運営者が長く抱えていた「検索か、学習拒否か」の二択が解消された。"
impact: "既存設定が自動的に読み替えられるため、Cloudflare を使う全サイトが影響を受ける。移行後の状態を確認する必要がある。"
tags: ["cloudflare", "ai-crawler", "robots-txt", "seo", "コンテンツ保護", "bot管理"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は 2026-09-15、**検索での発見可能性を維持したまま AI 学習だけを拒否する**仕組みを公開しました。中核は2つです。**Accountable という designation** と、**Disallow AI Training という新しい設定**です。

**背景にあるのが mixed-use crawler の問題です。**

mixed-use crawler とは、**検索と学習を1つのクローラーで兼ねているもの**を指します。Googlebot や Bingbot がこれに当たります。**従来、学習を拒否しようとすると検索インデックスからも外れました。** サイト運営者は、**検索流入を捨てるか、学習利用を受け入れるかの二択**を迫られていました。これが解消されます。

**Accountable の要件は4つです。** (1) robots.txt などの標準経由で AI 学習のオプトアウト手段を提供する、(2) AI 要約のオプトアウトを運営者側で直接、かつ Cloudflare 経由でも提供する、(3) どのページが学習に使われたかを **URL 単位で可視化**し、検索での露出指標を出す、(4) **学習のオプトアウトが検索順位に影響しないことを保証する。** 現時点の実装と、期限付きのコミットメントの両方が評価対象です。

**mixed-use で Accountable と認定されたのは Apple / Google / Microsoft の3社です。**

**Apple**（Applebot）は `Disallow: Applebot-Extended` でオプトアウト可能、URL 単位の確認ツールは「来年」提供予定。**Google**（Googlebot）は `Disallow: Google-Extended`、追加の URL 単位の透明性ツールは「数週間のうちに」提供予定。**Microsoft**（Bingbot）は **robots.txt での no-training 指定への対応が「2027年初頭」目標**で、**それまでは Disallow AI Training 設定が Bing へ自動的に意思を伝えません。** Amazon / Anthropic / Meta / OpenAI は、検索用と学習用を分離した形で Accountable に分類されています。

**Disallow AI Training を選ぶと、Bot Preference Sync が robots.txt へ no-training の意思を publish します。** Accountable な mixed-use クローラーは検索用途で通過し続け、**それ以外の学習クローラーは Amazon / Anthropic / Meta / OpenAI のものを含めてブロックされます。** 学習専用クローラーをブロックしても検索の発見可能性には影響しません。

設定は4種類です。**Allow / Disallow AI Training / Block on pages with ads / Block。** Block は mixed-use も含めた全ブロックのため検索にも影響します。**Disallow AI Training が効くのは Training の挙動のみで、Search と Agent の挙動には適用されません。** Cloudflare はボットの挙動を **Search / Training / Agent の3分類**で扱います。

**提供は全プラン・全顧客**で、ドメインの Security Settings から設定します。**既存顧客の設定は自動的に引き継がれます。** 旧「Block AI Bots」は、**Search: Allow / Training: Disallow AI Training / Agent: Block on pages with ads** へ移行されます。

## 何が変わったか

- **Disallow AI Training 設定**が追加。検索に残したまま学習利用だけを拒否できる
- **Accountable designation** を新設。要件は4つ（学習オプトアウト手段、AI 要約オプトアウト、URL 単位の可視化、検索順位に影響しない保証）
- **mixed-use の Accountable**: Apple / Google / Microsoft。**分離型の Accountable**: Amazon / Anthropic / Meta / OpenAI
- **Microsoft は robots.txt の no-training 対応が2027年初頭目標**。それまで設定は Bing へ自動伝達されない
- Bot Preference Sync が robots.txt へ no-training の意思を publish する
- 設定は4種類: **Allow / Disallow AI Training / Block on pages with ads / Block**
- ボットの挙動を **Search / Training / Agent** の3分類で扱う。Disallow AI Training は Training のみに適用
- **全プラン・全顧客対象**。ドメインの Security Settings から設定
- **既存の Block AI Bots 設定は自動移行**（Search: Allow / Training: Disallow AI Training / Agent: Block on pages with ads）
- 推奨設定: 広告収益のあるサイトは Training を Disallow AI Training、Agent を Block on pages with ads。広告なしのサイトは Training / Agent とも Allow
- 次段階として、AI 要約の粒度制御を「来年初頭」に提供予定。ai-prefs などの標準に対応

## 業務インパクト（一般企業向け）

**自社サイトを Cloudflare で運用している組織は、全プラン対象かつ既存設定が自動移行されるため、全社が影響範囲に入ります。**

**最初にやるべきは、移行後の状態の確認です。**

以前「Block AI Bots」を有効にしていた場合、**Search: Allow / Training: Disallow AI Training / Agent: Block on pages with ads** へ読み替えられます。**これは以前より緩い設定です。** 旧設定は全ブロックに近い挙動でしたが、新設定では検索クローラーが通ります。**意図として「検索も含めて一切通したくない」だったなら、移行後の状態は意図と食い違います。** 確認せずに放置しないことです。

**次に、方針の決定です。判断は3つの挙動ごとに分けて考えます。**

**Search（検索インデックス構築）は、ほぼ全ての事業サイトで Allow のままにすべきです。** ここを止めると検索流入が消えます。今回の変更の主眼は、まさに**この Search を止めずに済むようにすること**です。

**Training（モデルの学習・ファインチューニング）が、今回の判断対象です。** 自社が時間とコストをかけて作ったコンテンツを、AI ベンダーの学習に使わせるか。**オウンドメディアやナレッジベースを収益の中心に据えている事業では、Disallow AI Training を選ぶ合理性があります。** 一方、**自社サイトが問い合わせ獲得のための会社案内である場合、学習を拒否する実益は薄いです。** むしろ AI に自社の説明を正確に覚えてもらったほうが有利な場面もあります。**コンテンツが商品かどうかで分かれます。**

**Agent（利用者の指示による訪問）は別の論点です。** ユーザーが AI に指示して自社サイトを見に行かせるケースです。**これを止めると、AI 経由で自社を調べようとした見込み客の導線が切れます。** 広告収益型でなければ Allow が素直です。

**Microsoft の制約は、実務上の重要な注意点です。**

**Bingbot は robots.txt での no-training 対応が2027年初頭目標であり、それまで Disallow AI Training の意思が Bing へ自動的に伝わりません。** つまり、**設定しても Microsoft の学習利用は当面止まらない**ということです。**「設定したから全て止まっている」と社内で説明すると、事実と食い違います。** 現時点で有効に伝わるのは Apple と Google、そして分離型クローラーのブロックです。**この差は、法務や広報に説明する際に正確に伝えてください。**

**なお、Cloudflare は AI 要約の粒度制御を「来年初頭」に提供予定としています。** 現時点の Disallow AI Training は学習のみを扱い、AI 要約への露出制御は別の話です。**「AI に要約されたくない」という要望は、この設定では満たされません。** ここも混同しやすい点です。

## 副業・個人活用視点

**個人でブログやメディアを運営している人にとって、これは直接的に効く変更です。全プラン対象なので、無料プランでも使えます。**

**判断の軸は明快です。「自分のコンテンツは商品か、集客手段か」。**

**コンテンツそのものが収益源**——有料記事、会員制コンテンツ、広告収益に依存するメディア——**であれば、Disallow AI Training を選ぶ合理性があります。** 書いた記事が学習に使われ、AI が同じ内容を要約して返すなら、読者がサイトを訪れる理由が減ります。**これまでは学習を拒否すると検索流入も失っていたので選べませんでした。今回それが分離されます。**

**一方、コンテンツが集客手段**——ポートフォリオ、技術ブログ、サービス紹介——**であれば、Allow のままで問題ありません。** むしろ**自分の名前と専門分野が AI に正確に覚えられているほうが、指名検索や相談の入口になります。** 「AI に聞いたらこの人が出てきた」は、これから効いてくる導線です。

**注意点として、Disallow AI Training を選んでも Search は止まらないことを正しく理解してください。** 検索流入は維持されます。**逆に Block を選ぶと検索にも影響します。** この2つを混同して Block を選ぶと、検索流入を自分で切ることになります。**設定名が似ているので、必ず4種類の違いを確認してから選んでください。**

**受託・支援の立場では、これは「顧客サイトの棚卸し」の材料になります。**

**Cloudflare を使っている顧客サイトは、全て自動移行の対象です。** 顧客は気づいていません。**「AI クローラーの設定が自動で読み替えられているので、意図と合っているか確認しましょう」**という連絡は、それ自体が価値のある接点になります。

**さらに踏み込むなら、判断基準を整理して渡す仕事が作れます。** コンテンツが商品か集客手段か。Search / Training / Agent のどれを止めるか。**この整理は、技術作業ではなく事業理解の作業です。** 設定変更自体は数分で終わります。**価値があるのは、どう設定すべきかを顧客の事業構造から導く部分です。**

**ここでも線引きは必要です。著作権や利用規約に関する法的判断は引き受けないでください。** 「AI 学習に使われることが法的にどうか」は弁護士の領域です。**支援の範囲は「技術的にどう設定できるか」と「事業構造から見てどちらが合理的か」まで。** 法的評価は専門家に渡す、と最初に伝えることです。
