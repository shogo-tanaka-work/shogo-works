# ユーザー認識ギャップ蓄積

リサーチ依頼や PR レビューで「○○ができるようになったらしい」とユーザーが言及したが、公式上は事実が違う / 逆方向 / サードパーティ製のみ、というケースをここに蓄積する。同じ誤認が繰り返されないように、リサーチ実走時に該当があれば日次サマリー末尾「補足メモ」に転記する。

各エントリは「ユーザー認識」「公式実態」「裏取り URL」「メモ作成日」を残す。

---

## 2026-05-09: 「Claude Code から Codex への簡単移行」

- **ユーザー認識**: 「Claude Code から OpenAI Codex に簡単に環境移行できるトピックがあった」
- **公式実態**: OpenAI 公式は **逆方向** のみ提供。`openai/codex-plugin-cc`（Claude Code 内から Codex を呼び出すプラグイン、2026-03-30 発表）が公式リソース。Claude Code → Codex への移行はサードパーティ製ツール（`claude2codex` / `ccode-to-codex` / `cc2codex` など）が担当している状態で、公式の「import from Claude Code」コマンドは存在しない。
- **裏取り URL**:
  - 公式逆方向プラグイン発表: https://community.openai.com/t/introducing-codex-plugin-for-claude-code/1378186
  - サードパーティ移行ツール例: https://github.com/zuharz/ccode-to-codex、https://github.com/ussumant/cc2codex
- **窓内の関連発表**: 2026-05-08〜09 に新規発表なし。
- **メモ作成日**: 2026-05-09

---

## エントリ追加ルール

新しいギャップが見つかったら、上記フォーマットで上から積む。

- ユーザー認識は原文ニュアンスを保つ
- 公式実態は一次情報 URL ベースで書く
- 「単なる時系列ギャップ（最新版を知らないだけ）」はここに入れない。`research-learnings.md` 側に「新ソース発見」として残す。
