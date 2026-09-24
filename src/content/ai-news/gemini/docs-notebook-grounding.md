---
title: "Google Docs から Gemini Notebook を参照できるようになった。出典つきの下書きが @ ひとつで出る"
tool: "gemini"
toolLabel: "Gemini / Google Workspace"
date: 2026-09-23
sourceUrl: "https://workspaceupdates.googleblog.com/2026/09/ground-ai-prompts-in-google-docs-on-existing-sources-from-Gemini-Notebook.html"
summary: "Google は 2026-09-23、Google Docs で Gemini Notebook をコンテキストソースとして参照できる機能を導入した。Docs のサイドパネルまたは下部バーで @ を入力して既存の Notebook を指定すると、Gemini はその Notebook に集めたソースに基づいて出力し、インライン引用を付ける。Notebook と Docs の間のコピー＆ペーストが不要になる。ロールアウトは Rapid / Scheduled とも「Available now」で段階展開ではない。Drive の Gemini for Workspace が有効なら管理者側は既定で利用可能。Business Starter と Enterprise Starter は対象外。"
description: "Google Docs のサイドパネルから @ で Gemini Notebook を参照し、出典つきの下書きを生成できるようになりました。Starter エディションは対象外です。"
impact: "AI の下書きで最も面倒なのは、出典の確認と差し戻しだった。参照範囲を自分で用意した Notebook に限定でき、インライン引用が付くことで、検証のコストが大きく下がる。リサーチと執筆の間にあった転記作業が丸ごと消える。"
tags: ["gemini", "google-docs", "gemini-notebook", "グラウンディング", "ドキュメント作成"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/gemini/workspace-features"
draft: false
---

## 要約

Google は 2026-09-23、**Google Docs で Gemini Notebook をコンテキストソースとして参照できる**機能を導入しました。Workspace Intelligence の基盤の上に作られたもので、Google の説明では「深いリサーチとコンテンツ作成の間の断絶を埋める」ものと位置づけられています。

使い方は単純です。Docs のサイドパネルまたは下部バーで **`@` を入力し、既存の Notebook を参照**します。Gemini はその Notebook に集めたソースに基づいて出力を生成し、**インライン引用を付けます**。タブを切り替えたり、Notebook と Docs の間でコピー＆ペーストしたりする必要がなくなります。プロジェクト提案書や技術ホワイトペーパーの下書きが想定用途として挙げられています。

**この機能の本質は「参照範囲を自分で決められる」ことです。** これまで Docs の Gemini に文章を書かせると、参照元はモデルの知識と、せいぜい Drive 上のファイルでした。出てきた文章が何に基づいているかを確かめるには、自分で裏取りするしかありませんでした。**Notebook を指定するということは、「この資料群の中だけで書け」と範囲を切る**ということです。しかもインライン引用が付くので、どの記述がどのソースから来たかを辿れます。

**ロールアウトは Rapid Release / Scheduled Release とも「Available now」**で、段階展開ではありません。管理者側は **Drive の Gemini for Workspace が有効なら既定で利用可能**になります。エンドユーザー側は Workspace のスマート機能が有効になっている必要があります。

**対象エディションには注意が必要です。** Business Standard / Plus、Enterprise Standard / Plus、Education Plus、消費者向けは Google AI Pro / Ultra、教育向けアドオン（Google AI Pro for Education、Teaching and Learning）、AI Expanded Access。**Business Starter と Enterprise Starter は対象外**です。

## 何が変わったか

- Google Docs のサイドパネル / 下部バーで **`@` から Gemini Notebook を参照**できる
- 参照した Notebook のソースに基づいて Gemini が出力し、**インライン引用が付く**
- Notebook と Docs の間のコピー＆ペーストが不要になる
- ロールアウトは Rapid Release / Scheduled Release とも **「Available now」**（段階展開ではない）
- 管理者側は **Drive の Gemini for Workspace が有効なら既定で利用可能**。個別の新規管理項目は追加されていない
- エンドユーザー側は Workspace のスマート機能が有効である必要がある
- 対象: Business Standard / Plus、Enterprise Standard / Plus、Education Plus、Google AI Pro / Ultra、Google AI Pro for Education、Teaching and Learning、AI Expanded Access
- **Business Starter / Enterprise Starter は対象外**

## 業務インパクト（一般企業向け）

**AI の下書きで一番コストがかかっていたのは、生成ではなく検証です。** 出てきた文章がもっともらしく見えても、数字や固有名詞が正しいか確認しなければ社外に出せません。この確認作業に、生成で浮いた時間の大半が消えていた、という組織は多いはずです。

**参照範囲を Notebook に限定できると、この構造が変わります。** 自分たちで集めた資料 — 社内規程、過去の提案書、技術仕様、調査レポート — を Notebook に入れておけば、Gemini はその中から書きます。**インライン引用が付くので、確認すべきは「引用元の記述が正しく反映されているか」だけ**になります。ゼロから裏取りするのと、引用先を確認するのでは、作業量が桁で違います。

**実務で効くのは、定型的な文書の生成です。** 提案書、仕様書、報告書のように「社内に参照すべき資料があり、それを組み替えて書く」タイプの文書は、ほぼこの形に当てはまります。テンプレートを使い回すより、**Notebook に最新の資料を入れておいて、そのつど生成する方が内容が古くなりません。**

**運用設計として、Notebook の管理が新しい仕事になります。** 出力の質は Notebook に入っている資料の質で決まります。古い規程や廃止された仕様が混ざっていると、それを引用した文書が出てきます。**「この Notebook は誰が更新責任を持つか」を決めておかないと、気づかないうちに古い情報を引用し続ける**状態になります。ここは新しく発生する運用コストとして見積もっておくべきです。

**管理者側は「既定で利用可能」である点を認識しておいてください。** Drive の Gemini for Workspace が有効なら、個別の有効化操作なしに使えるようになります。しかも段階展開ではなく「Available now」なので、すでに使える状態です。**社内で AI 利用ルールを敷いている場合、このルートが想定に入っているかを確認してください。**

**エディションによる差も確認が必要です。** Business Starter と Enterprise Starter は対象外です。同じ組織内でエディションが混在していると、**使える人と使えない人が出ます。** 業務フローの前提にする前に、対象者の範囲を把握しておいてください。

## 副業・個人活用視点

**リサーチと執筆の間にあった転記作業が丸ごと消えます。** 案件のリサーチを Notebook にまとめ、そのまま Docs で書き始める。これまでは、調べた内容を要約してメモに移し、それを見ながら書く、という工程が挟まっていました。**この転記こそが、リサーチの熱量が冷める一番の原因**でもありました。

**出典が付く点は、クライアントワークで直接効きます。** 提出物に「この記述の根拠は何か」と聞かれたとき、即答できるかどうかで信頼が変わります。インライン引用が付いていれば、Notebook に入れた資料をそのまま示せます。**調べた事実と、それを示せる形は別物です。** 後者が自動で付いてくる価値は小さくありません。

**個人で使う場合は Google AI Pro / Ultra が必要**です。無料の Google アカウントでは使えません。ただし、この機能のためだけに課金するかは、**Notebook にまとめるほどの資料を扱う案件が定期的にあるか**で判断すべきです。単発の記事執筆程度なら、費用に見合いません。**継続案件でクライアント固有の資料が蓄積していくタイプの仕事**なら、案件ごとに Notebook を作る運用が効きます。

**注意点として、Notebook に入れる資料の権利を確認してください。** クライアントから受け取った資料を自分の Notebook に入れる場合、それが秘密保持契約の範囲でどう扱われるかは案件ごとに違います。**「AI に読ませてよいか」を明示的に確認していない資料は、入れる前に聞く**のが安全です。便利さで先に進めて、後から契約違反が判明するのが最悪のパターンです。
