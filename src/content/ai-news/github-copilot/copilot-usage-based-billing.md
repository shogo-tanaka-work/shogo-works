---
title: "GitHub Copilot：PRU廃止・AI Credits従量課金・ユーザー予算GA"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-06-01
sourceUrl: "https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/"
summary: "GitHub は 2026-06-01 付の Changelog で、GitHub Copilot の **全プランを GitHub AI Credits ベースの従量課金（usage-based billing）へ移行**したことを告知した。各プランには月次の included usage（含まれる利用枠）が付き、超過分は AI Credits の追加購入になる。従来の **premium request units（PRU）は GitHub AI Credits に置き換え** られ、モデルごとの公開 API レート（入力・出力・キャッシュトークン）に基づいて消費される。あわせて **Copilot code review が AI Credits に加えて GitHub Actions の実行分（minutes）も消費** するようになり、組織管理者は標準ランナー（default runners）を指定して全リポジトリで統一できる。**ユーザー単位予算が GA** となり、組織・Enterprise の管理者は全ユーザー共通の予算設定や特定ユーザー群への上書きが可能。**auto モデル選択を使うと割引**（例: 1x 乗数のモデルが 0.9x 相当）が付き、auto のモデル評価が individual プランでも有効化された。重要なのは、**プラン価格自体は据え置き**（Pro $10 / 月、Pro+ $39 / 月、Business $19 / user・月、Enterprise $39 / user・月）で、**Code completions と Next Edit suggestions は全プランに含まれ AI Credits を消費しない**点。変わったのは「枠の数え方」と「超過課金の仕組み」であり、利用量連動のコスト構造になった。"
description: "GitHub CopilotがAI Credits従量課金へ移行。PRU廃止・code reviewのActions分消費・ユーザー単位予算GAの3点を理解し、組織のコスト設計を見直す方法を解説します。"
impact: "これは Copilot を導入している全組織が今すぐ確認すべき **コスト構造の変更** である。席数 × 固定額で予算化していた前提が崩れ、**利用量（トークン）連動** になるため、ヘビーユーザーが多いチームや code review / cloud agent / CLI を多用する組織はコストが読みにくくなる。特に **Copilot code review が Actions 分を消費** する変更は、CI 予算と Copilot 予算が連動することを意味し、Actions のランナー設計・コスト配賦の見直しが要る。管理者は GA となった **ユーザー単位予算** を使い、上限・アラート・特定ユーザーへの上書きを設計するのが先決。auto モデル選択の割引は、コスト最適化の観点で「auto を既定にする」運用ガイドの根拠になる。価格据え置き・コード補完は非消費という点は安心材料だが、「フラット課金前提の運用ルール」はそのままでは通用しないため、調達・情シスは included usage の枠と超過時の挙動を早めに棚卸しすべき。なお個人ユーザーへの影響にはコミュニティで懸念の声もあり、社内展開時は中立的な説明が望ましい。"
tags: ["github-copilot", "billing", "usage-based", "github-ai-credits", "code-review", "actions", "budget", "policy"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHub は 2026 年 6 月 1 日付の Changelog で、GitHub Copilot の **全プランを GitHub AI Credits ベースの従量課金（usage-based billing）へ移行**したことを告知しました。各プランには月次の included usage（含まれる利用枠）が付き、超過分は AI Credits の追加購入になります。従来の **premium request units（PRU）は GitHub AI Credits に置き換え** られ、モデルごとの公開 API レート（入力・出力・キャッシュトークン）に基づいて消費されます。

重要なのは、**プラン価格自体は据え置き**で、**コード補完（Code completions / Next Edit suggestions）は全プランに含まれ AI Credits を消費しない**点です。変わったのは「枠の数え方」と「超過課金の仕組み」で、コスト構造が席数固定から **利用量連動** に切り替わりました。

## 何が変わったか

- **課金モデル**: 全 Copilot プランが「included usage + 超過は AI Credits 従量」に統一。PRU を廃止し GitHub AI Credits に一本化。
- **コード補完は据え置き**: Code completions と Next Edit suggestions は全プランに含まれ、AI Credits を消費しない。
- **Copilot code review**: AI Credits に加えて **Actions の実行分（minutes）も消費**。組織管理者は標準ランナー（default runners）を指定して全リポジトリで統一可能。
- **ユーザー単位予算が GA**: 組織・Enterprise の管理者が全ユーザー共通の予算設定、または特定ユーザー群への上書きが可能。
- **auto モデル選択の優遇**: Copilot Chat / CLI / cloud agent で auto を使うと割引（例: 1x 乗数のモデルが 0.9x 相当）。auto のモデル評価が individual プランでも有効化（同日別エントリ）。
- **Copilot Max**: 既存の Student / Pro / Pro+ 加入者向けアップグレード選択肢として提供（より大きな included usage と spending limit）。
- **プラン価格**: Pro $10 / 月、Pro+ $39 / 月、Business $19 / user・月、Enterprise $39 / user・月（据え置き）。

## 業務インパクト（一般企業向け）

これは Copilot 導入組織が今すぐ確認すべき **コスト構造の変更** です。「席数 × 固定額」で予算化していた前提が崩れ、**利用量（トークン）連動** になるため、ヘビーユーザーが多いチームや、code review / cloud agent / CLI を多用する組織はコストが読みにくくなります。

特に **Copilot code review が Actions 分を消費** する変更は、CI 予算と Copilot 予算が連動することを意味します。Actions のランナー設計（default runners の指定）とコスト配賦を見直す必要があります。

管理者の最初の一手は、GA になった **ユーザー単位予算** の設計です。全社共通の上限を引き、必要なユーザー群だけ上書きし、アラートを設定しておくことで、想定外の超過課金を防げます。**auto モデル選択の割引** は、「auto を既定にする」運用ガイドの根拠になります。

価格据え置き・コード補完は非消費という点は安心材料ですが、「フラット課金前提の運用ルール」はそのままでは通用しません。調達・情シスは included usage の枠と超過時の挙動を早めに棚卸しすべきです。なお個人ユーザーへの影響にはコミュニティで懸念の声もあるため、社内展開時は中立的な説明が望ましいです。

## 副業・個人活用視点

個人開発者・副業層にとっては、**コスト管理の意識が一段必要** になります。Pro / Pro+ の月額は据え置きですが、included usage を超えると AI Credits の従量課金になるため、cloud agent や code review を多用すると「気づけば超過」が起こりえます。

実務的な対策は二つです。一つは **コード補完中心の使い方なら影響は小さい**（補完・Next Edit は非消費）と理解しておくこと。もう一つは **auto モデル選択を既定にして割引を取りに行く**ことです。重い処理を premium モデルで連発するより、auto に任せてコストを平準化するほうが、個人の財布には優しくなります。

複数案件を Copilot で回す人は、自分の利用がどのプラン枠に収まるかを一度見積もり、Pro / Pro+ / Max のどれが妥当かを再評価しておくとよいでしょう。
