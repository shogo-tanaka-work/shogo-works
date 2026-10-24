---
title: "Google Meet の音声翻訳が63言語に拡大 — 話された言語を自動検出、参加者ごとにオン・オフ、会議時間は90分または8時間まで"
tool: "gemini"
toolLabel: "Gemini"
date: 2026-10-22
sourceUrl: "http://workspaceupdates.googleblog.com/2026/10/real-time-speech-translation-in-google-Meet-expands-to-63-languages-with-automatic-language-detection.html"
summary: "Google Workspace Updates が 2026-10-22、Gemini による Google Meet の音声翻訳を63言語に拡大し、話された言語の自動検出に対応したと告知した。Web、Android、iOS で使え、Meet のハードウェアでは聞く側として対応する。従来は会議全体で設定した限られた言語の組み合わせだけだったが、今回は参加者ごとに、任意の言語の組み合わせで翻訳できる。複数の言語が混ざる会議や、話者が途中で言語を切り替える場合も検出する。字幕は翻訳音声に合わせる。会議の長さは基本プランと AI Pro で90分、AI Expanded Access などで8時間まで。Rapid Release は 2026-10-22、Scheduled Release は 2026-11-02 から段階提供される。"
description: "Meet の音声翻訳が63言語と自動検出に対応。参加者ごとに設定でき、プランで会議時間の上限が異なる。"
impact: "多言語の会議で通訳や事前の言語設定が不要になる可能性がある。管理者設定は既定でオンのため、導入前に組織単位での扱いを決めておく必要がある。録画や暗号化会議では使えない。"
tags: ["gemini", "google-meet", "翻訳", "workspace", "管理者"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Google Workspace Updates は 2026-10-22、Meet の**音声翻訳が63言語に拡大**し、**自動言語検出**に対応したと告知しました。Web、Android、iOS で使え、Meet のハードウェアでは翻訳音声を聞けます。

## 何が変わったか

- **言語の組み合わせ**: 63言語の任意の組み合わせを、同じ会議で同時に使える。従来は会議全体で設定した限られた組み合わせだけだった
- **自動検出**: 話された言語を自動で判断する。複数言語が混ざる場合や、話者が途中で言語を切り替える場合も対応
- **参加者ごとの設定**: 会議のツールバーで本人が翻訳をオン・オフし、理解できる言語を指定すると、その言語は翻訳されない。字幕は翻訳音声に合わせる
- **対象プラン**: Business Standard / Plus、Enterprise Standard / Plus、Google AI Pro / Ultra、Frontline Plus、AI Pro for Education、AI Expanded Access と AI Ultra Access のアドオン
- **会議時間の上限**: 基本の Workspace と AI Pro は90分。AI Expanded Access、AI Ultra Access、Google AI Ultra は8時間
- **使えない場面**: ライブ配信、録画、クライアント側暗号化の会議、ダイヤルインや他社相互接続の通話、アダプティブオーディオ使用時。地域と年齢の制限もある
- **会議室**: 遠隔の発言を翻訳して聞けるが、会議室内の発言は他の参加者向けに翻訳されない
- **提供時期**: Rapid Release は 2026-10-22 から（表示まで1〜3日）、Scheduled Release は 2026-11-02 から（最大15日）
- **管理者**: 対象プランで、Gemini for Meet の設定が有効なら既定でオン。Admin コンソールの Google Meet の Gemini 設定で、組織部門またはグループ単位に切り替えられる。利用者側は各会議の開始時にオフで、会議中に本人がオンにする。Google は音声データを保存せず、声でモデルを学習しないと説明している

## 業務インパクト（一般企業向け）

**国際会議や外国籍の同僚との会議で、事前に言語を決めておく手間が減ります。** 参加者ごとに設定できるため、全員が同じ言語で話す必要がなくなります。

導入前に決めることは3つです。(1) 組織部門ごとにオンにするか。対象プランでは既定でオンになる点に注意してください。(2) 会議時間の上限。基本プランは90分なので、長時間の会議では途切れる場合があります。(3) 録画や暗号化が必要な会議。これらでは翻訳が使えないため、代替手段を用意します。

## 副業・個人活用視点

**海外クライアントとの打ち合わせを、通訳なしで試せる可能性があります。** ただし対象は Business Standard 以上や Google AI Pro/Ultra などで、無料の個人アカウントは対象に書かれていません。

重要な商談では、翻訳の精度に頼り切らず、議事録を文章で確認し合う運用を併用してください。

## 情報源の制約

本記事は Workspace Updates Blog の個別ポストを根拠にしています。63言語の一覧、日本語での精度や遅延、地域・年齢の制限の詳細は確認できていません。
