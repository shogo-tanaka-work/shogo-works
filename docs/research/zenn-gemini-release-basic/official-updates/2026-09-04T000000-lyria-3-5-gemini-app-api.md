---
date: 2026-09-04
title: "音楽生成モデル Lyria 3.5 が Gemini アプリと Gemini API で提供開始"
service: "Gemini"
source: https://blog.google/innovation-and-ai/products/gemini-app/better-tracks-lyria-gemini/
fetched_at: 2026-09-06T09:20:00+09:00
published_date: 2026-09-04
date_precision: date-only
category: release
---

# 2026-09-04 音楽生成モデル Lyria 3.5 が Gemini アプリと Gemini API で提供開始

> 本エントリは **2026-09-06 実行時の追補**である。公開日 2026-09-04 は**前日実行（未マージ PR #394）の窓内だったが拾われていなかった**。前日は `blog.google` の Gemini ハブについて「窓内の新規個別ポストなし」と記録されているが、実際には本ポストが出ていた。

## 公式内容の日本語要約

Google は音楽生成モデル **Lyria 3.5** を公開し、**Gemini アプリと Gemini API** で利用できるようにした。公式は「最も良い音の音楽生成モデル」と位置づけ、**より表現力のあるボーカルと、厚みのある編曲**により高い忠実度のトラックを作れるとしている。

Gemini アプリ側では3点が挙げられている。**ジャンルの選択または自然文での指定**と、ボーカルあり／インストゥルメンタルの切り替え。**テンプレート**の追加で、バックグラウンド音楽から誕生日向けのカスタム曲まで着手しやすくなった。そして**短尺・長尺の尺の選択**ができるようになった。

提供範囲は広い。**Web とモバイルアプリで全ユーザーに全世界提供**され、アーティスト・AI クリエイター向けには **Google Flow Music**、開発者・技術者向けには **Google AI Studio**（Gemini API）、さらに Workspace の **Google Vids** でも利用できる。公式が挙げる用途は、動画のバッキングトラック、ブランド用のジングル、着信音のパーソナライズなどである。

Workspace 側の Google Vids から使える点は、社内向け動画や研修コンテンツを作る運用に直接効く。前月までの Vids 関連更新（ドキュメントからの動画生成、AI アバター）と組み合わさると、**素材調達を外部に出さずに完結させる導線**が一段そろうことになる。

教材化メモ: src/content/ai-news-notes/gemini/lyria-3-5-gemini-app-api.mdx

## できるようになったこと

- Gemini アプリでジャンル指定・ボーカル／インスト切替・尺の選択をして音楽を生成する
- テンプレートから BGM や記念日向けトラックを短時間で作る
- Gemini API / Google AI Studio 経由で Lyria 3.5 をアプリケーションへ組み込む
- Google Vids 内で動画用の音楽を生成する

## 影響範囲

- 対象ユーザー: Gemini アプリ利用者全般（全世界）、開発者、Workspace の Vids 利用者
- 対象プラン: Web / モバイルは全ユーザー。AI Studio 経由は開発者、Vids は Workspace 契約者
- API / UI / 管理者機能: Gemini アプリ UI、Gemini API、Google Flow Music、Google AI Studio、Google Vids

## 原文確認

- 公式見出し: Create your best tracks yet with Lyria 3.5 in Gemini
- 公式URL: https://blog.google/innovation-and-ai/products/gemini-app/better-tracks-lyria-gemini/
- 原文全文は公式ページで確認してください。
