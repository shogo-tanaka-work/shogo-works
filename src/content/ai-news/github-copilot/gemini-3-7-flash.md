---
title: "Gemini 3.7 Flash が GitHub Copilot に追加、Business / Enterprise は既定オフ"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-08-13
sourceUrl: "https://github.blog/changelog/2026-08-13-gemini-3-7-flash-is-now-available-in-github-copilot"
summary: "GitHub Copilot で Gemini 3.7 Flash が使えるようになった。対象は Pro、Pro+、Max、Business、Enterprise。VS Code、Visual Studio、Copilot CLI、cloud agent、Copilot アプリ、JetBrains、Xcode、Eclipse のモデルピッカーから選択できる。課金は従量課金でプロバイダーの表示価格が適用される。"
description: "Business と Enterprise は既定でオフ。管理者が Copilot 設定で「Gemini 3.7 Flash Preview」ポリシーを有効化しない限り、組織内の誰もモデルを選択できない。ロールアウトは段階的に進行中。"
impact: "GitHub Copilot で新モデルが追加される際の定着したパターンで、直近の MAI-Code-1.1-Flash や Kimi K3 でも同じ扱いだった。組織で使うには管理者の作業が毎回発生する。"
tags: ["github-copilot", "gemini", "モデル追加", "管理者設定"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHub が 2026-08-13、Copilot で **Gemini 3.7 Flash** が使えるようになったと告知しました。対象プランは Copilot Pro、Pro+、Max、Business、Enterprise です。

**Business と Enterprise は既定でオフ**です。管理者が Copilot 設定で「Gemini 3.7 Flash Preview」ポリシーを有効化しない限り、組織内の誰もモデルを選択できません。これは GitHub Copilot で新モデルが追加される際の定着したパターンで、直近では MAI-Code-1.1-Flash（2026-08-11）や Kimi K3 でも同じ扱いでした。

課金は従量課金のもとで**プロバイダーの表示価格**が適用されます。具体的な倍率は GitHub のモデル価格ドキュメントを参照する形になっています。

利用できる面は広く、**Visual Studio Code、Visual Studio、Copilot CLI、GitHub Copilot cloud agent、GitHub Copilot アプリ、JetBrains、Xcode、Eclipse** のモデルピッカーから選択できます。

ロールアウトは段階的に進行中で、すぐに見えない場合は後から確認するよう案内されています。

## 何が変わったか

- Copilot Pro / Pro+ / Max / Business / Enterprise で Gemini 3.7 Flash を選択できる
- VS Code、Visual Studio、Copilot CLI、cloud agent、Copilot アプリ、JetBrains、Xcode、Eclipse に対応
- **Business / Enterprise は既定オフ**。管理者が「Gemini 3.7 Flash Preview」ポリシーを有効化する必要がある
- 課金は従量課金でプロバイダーの表示価格が適用される
- ロールアウトは段階的。すぐに表示されない場合がある

## 業務インパクト（一般企業向け）

作業としては**管理者が有効化するかどうかを決める**、それだけです。ただし、この判断が毎回発生することの方が本題かもしれません。

GitHub Copilot では新モデルが追加されるたびに Business / Enterprise が既定オフになります。MAI-Code-1.1-Flash、Kimi K3、そして今回の Gemini 3.7 Flash。**同じ構図が繰り返されている**以上、これは個別モデルの話ではなく運用の型として捉えた方が実務的です。

型として捉えると、決めるべきことが見えます。**新モデルが出たときに誰がいつ判断するのか**、判断の基準は何か、有効化したモデルの棚卸しはいつやるのか。これを決めていない組織では、開発者から「あのモデルが使えない」と言われるたびに個別対応することになります。逆に決めておけば、月次でまとめて処理すれば済みます。

既定オフという設計自体は妥当です。**組織が把握していないモデルに社内コードが渡ることを防ぐ**仕組みですから、勝手に増えない方が統制としては正しい。問題はその運用を設計していないことです。

コスト面では、従量課金でプロバイダー表示価格という条件を確認してください。Flash 系は軽量モデルなので単価は抑えめのはずですが、**倍率が別途ドキュメントに書かれている**形式なので、有効化する前に実際の水準を見ておくべきです。同じ「Flash」という名前でもベンダーが違えば単価は違います。

利用できる面が8つに及ぶ点は、地味ですが評価できます。**JetBrains、Xcode、Eclipse まで含まれている**ので、VS Code 以外を使っている開発者が取り残されません。組織内で IDE が割れている場合、モデルの選択肢が IDE によって違うと説明が面倒になります。

## 副業・個人活用視点

個人利用なら Pro 以上で即座に選べます。管理者の承認は不要で、モデルピッカーから選ぶだけです。ロールアウトが段階的なので、**見えなくても設定の問題ではありません**。少し待てば出てきます。

実務での使いどころは、軽量モデルの定番どおりでしょう。定型的なリファクタリング、テストコードの雛形、コメント整備といった作業を寄せて、プレミアムリクエストの消費を抑える。**Copilot は今 Flash 系の選択肢が複数ある**状態（MAI-Code-1.1-Flash、Gemini 3.7 Flash）なので、自分の作業に合う方を選べます。

比較して選ぶなら、**同じ作業を両方に投げて比べる**のが早いです。軽量モデルは得意不得意がはっきり出るので、実際の作業で試した方がベンチマークを読むより確実でしょう。

案件として拾える切り口は、前回の MAI-Code-1.1-Flash のときと同じく**管理者設定の代行と整備**です。ただし今回は期限のある退役が絡まないぶん、緊急性は低い。むしろ提案として組み立てるなら、**「新モデルが出るたびの判断フローを作る」**方が価値が明確です。個別モデルの有効化作業を都度受けるより、判断基準と棚卸しの仕組みを一度作る方が、クライアントにとっても自分にとっても筋が通ります。

発信のネタとしては、Copilot で選べる軽量モデルの比較が素直でしょう。選択肢が増えたぶん「どれを選べばいいか」の問いが生まれています。**ベンチマークの再掲ではなく、自分の実作業での使い分け**を書くと読まれます。
