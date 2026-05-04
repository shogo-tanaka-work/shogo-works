# research/ セットアップガイド

## ディレクトリ構成

```
research/
├── README.md               ← このファイル
├── research_runner.sh      ← cronから呼ぶシェル
├── prompts/
│   ├── context-engineering.txt
│   ├── prompt-engineering.txt
│   └── harness-engineering.txt
└── outputs/                ← 朝ここをレビュー
    ├── context-engineering_20260411.md
    ├── prompt-engineering_20260411.md
    ├── harness-engineering_20260411.md
    └── run_20260411.log
```

## 初回セットアップ

```bash
# 1. 実行権限を付与
chmod +x ~/research/research_runner.sh

# 2. crontabを編集
crontab -e

# 3. 以下を追記（毎日午前1時に実行）
0 1 * * * /bin/bash ~/research/research_runner.sh
```

## 動作確認（手動実行）

```bash
# まず手動で試す
cd ~/research && bash research_runner.sh

# ログ確認
tail -f outputs/run_$(date +%Y%m%d).log
```

## cron設定の確認

```bash
# 登録済みcronを確認
crontab -l

# cronのシステムログ確認（Mac）
grep CRON /var/log/system.log | tail -20
```

## 朝のレビュー手順

```bash
# 今日生成されたファイルを確認
ls -la ~/research/outputs/$(date +%Y%m%d)*

# ログでエラーがないか確認
cat ~/research/outputs/run_$(date +%Y%m%d).log
```

## トラブルシューティング

### claudeコマンドが見つからない場合
cronはPATHが限定されるため、フルパスで指定する
```bash
# claudeのパスを確認
which claude
# → /usr/local/bin/claude など

# research_runner.sh の claude コマンドをフルパスに変更
# claude → /usr/local/bin/claude
```

### 出力ファイルが空の場合
- claudeのAPIキーが設定されているか確認
- `claude --version` が動くか確認
- ログファイルでエラー内容を確認

## Discord通知（オプション）
research_runner.sh の末尾コメントアウトを解除し
DISCORD_WEBHOOK に自分のウェブフックURLを設定
