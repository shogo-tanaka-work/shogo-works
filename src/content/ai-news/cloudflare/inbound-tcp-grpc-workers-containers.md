---
title: "Workers が外部からの TCP 接続を受けられるように：Containers の双方向 gRPC とあわせて公開ベータ"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-11-19
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-11-19-inbound-tcp/"
summary: "Cloudflare が、Workers へのインバウンド TCP 接続と、Containers 内での双方向 gRPC を公開ベータにした。Spectrum が受けた公開 TCP 接続を Worker の connect() ハンドラへ渡し、Durable Object を経由して Container 内の gRPC サーバーへつなぐ構成で、リアルタイム音声のような常時接続型サービスを載せられる。Pro・Business ゾーンでは Worker 起点の Spectrum アプリは1ゾーン1TCPポートに限られる。"
description: "インバウンド TCP と gRPC の公開ベータの仕組み、Worker・Durable Object・Container の接続構成、提供プランと制限、導入前の確認事項を整理する。"
impact: "HTTP 以外のプロトコル（gRPC や独自 TCP）を使うサービスを Cloudflare 上で完結できる可能性が出た。ただしベータであり、Pro・Business では1ゾーン1ポートの制限がある。本番移行の前に、料金と SLA の扱いを確認する必要がある。"
tags: ["cloudflare", "workers", "containers", "durable-objects", "spectrum", "grpc", "tcp"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は 2026-11-19、**Workers へのインバウンド TCP 接続**と、**Containers 内での双方向 gRPC** を公開ベータとして発表しました。これまで Workers は主に HTTP リクエストを受ける実行環境でしたが、Spectrum 経由で受けた**生の TCP 接続**を Worker のコードで扱えるようになります。

公式が示す構成は3段です。Spectrum が公開 TCP 接続を Worker の `connect()` ハンドラへ渡します。Worker はその接続を Durable Object へ中継し、Durable Object は自分の Container 内の gRPC サーバーへ中継します。公式は、Container 側で任意の言語の既存 gRPC サーバーを動かせるとし、用途の例として**リアルタイム音声アプリ向けのサービス**を挙げています。

## 何が変わったか

- **Workers が TCP を受けられる**: Spectrum の「Worker 起点（Worker-origin）」アプリケーションとして、公開 TCP 接続が Worker の `connect(socket, env)` に届く
- **Durable Object から Container へつなげる**: Durable Object の `connect()` が受けた接続を、`getTcpPort(...).connect(...)` で Container 内のポートへ中継できる
- **TLS と HTTP/2 は Container が担当**: Worker と Durable Object は暗号化されたバイト列をそのまま転送し、Container 側が TLS を終端して HTTP/2・gRPC を処理する（公式の説明）
- **半クローズの維持**: 公式の例は `allowHalfOpen: true` を指定し、TCP の半クローズを保つ
- **提供プラン**: Worker 起点の Spectrum アプリは、Pro・Business ゾーン、および Spectrum Enterprise を有効にした Enterprise ゾーンで使える。**Spectrum Enterprise がない場合、Pro・Business ゾーンは1ゾーンにつき Worker 起点アプリ1つ、TCP ポート1つ**まで
- **ステータス**: 公開ベータ

TLS 認証情報の保管（Secrets Store）、プロトコル定義、Container の起動確認などは、公式が別途用意した gRPC の完全な例に載っています。

## 業務インパクト（一般企業向け）

社内向けの音声・ストリーミング系サービスや、gRPC で書かれた既存のバックエンドを、**エッジ側の入口からコンテナ実行まで Cloudflare に寄せられる**選択肢が増えました。構成は Worker → Durable Object → Container と段数が多いため、障害時の切り分けと、各層のログ・監視の置き場所を先に決めておく必要があります。

導入判断では次の点を確認してください。

- **ベータであること**: 公式の告知からは SLA や料金の詳細は読み取れません。本番利用の前に、料金ページと契約条件で確認してください
- **ポート制限**: Pro・Business で複数のサービスを公開したい場合、1ゾーン1ポートでは足りません。Enterprise の Spectrum が前提になるケースがあります
- **セキュリティ**: 公開 TCP ポートを開けることになります。接続元の制限や認証を、Container 側のアプリでどう担保するかを設計に含めてください

## 副業・個人活用視点

音声エージェントやリアルタイム連携のプロトタイプを、**サーバーを自前で立てずに**試せる可能性があります。gRPC の既存サンプルをそのまま Container に載せて動かせるため、検証用デモを短期間で作る用途に向きます。

ただし、Pro・Business のゾーンでは1ポートまでという制限があり、ベータ版のため仕様変更もありえます。顧客向けの本番運用に使う場合は、公式ドキュメントの最新の制限を確認し、**変更に備えた切り戻し手段**を用意してください。
