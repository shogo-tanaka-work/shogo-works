---
title: "Cloudflare Agents SDK の Agent Skills がファイルに — Workspace に置くだけで次のターンから使える"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-10-29
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-10-29-agent-skills-from-files/"
summary: "Cloudflare は Agents SDK の Agent Skills をファイルとして扱えるようにした。エージェントの Computer Workspace の /workspace/.agents/skills/ 配下に SKILL.md を含むフォルダを書くと、ビルドやデプロイなしで、次のターンからエージェントがそのスキルを使える。エージェント自身がスキルを書くこともできる。スキルの読み込み元は Computer Workspace、R2 バケット、コードの3つで、Think が各ターンの前にすべての元を列挙し直す。SKILL.md は Agent Skills の仕様に照らして検証されるが、規則に反するスキルも警告を出したうえで読み込まれる。スキル内のスクリプトも Workspace のファイルで、モデルが exec ツールで実行する。一方で、agents/skills を直接使うコードには破壊的変更があり、Agents SDK v0.32.0 以上と Think v0.23.0 以上が必要。"
description: "スキルをデプロイなしで追加・更新できる。Agents SDK で作ったエージェントを運用している場合は、破壊的変更の確認が先になる。"
impact: "スキルの更新が再デプロイ不要になる反面、agents:skills の Vite import や SkillRegistry などが削除された。agents/skills を直接使っているコードは移行が必要。"
tags: ["cloudflare", "agents-sdk", "agent-skills", "Think", "R2", "破壊的変更"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は2026-10-29、**Agents SDK の Agent Skills をファイルとして扱えるようにしました**。エージェントの Computer の Workspace にある `/workspace/.agents/skills/` に、`SKILL.md` を含むフォルダを書くだけで、**次のターンからエージェントがそのスキルを使えます**。ビルドもデプロイも不要で、**エージェント自身がスキルを書くこともできます**。

公式の例では、`Think` を継承したクラスの `getSkills()` に、Workspace と R2 バケットの両方を指定しています。

```js
getSkills() {
  return [
    skills.workspace(this.workspace), // /workspace/.agents/skills
    skills.r2(this.env.SKILLS_BUCKET, { prefix: "skills/" }),
  ];
}
```

## 何が変わったか

- **読み込み元は3つ**: Computer の Workspace、R2 バケット、コード。Think は**各ターンの前に、すべての元を列挙し直す**
- **オープンな形式**: `SKILL.md` は Agent Skills の仕様に照らして検証される。仕様のガイドに従い、**規則に反するスキルも警告をログに残したうえで読み込まれる**。書く前に確認したい場合は `parseSkill()` を使う
- **スクリプトも Workspace のファイル**: スキル内のスクリプトを、モデルが Workspace の `exec` ツールで実行する
- **どのハーネスでも使えるスキルのツール**: `activate_skill` と `read_skill_resource` を、Think、Pi Durable、AI SDK で共通に使える
- **プロンプトキャッシュを維持**: 会話の途中でスキルが変わっても、キャッシュ済みのシステムプロンプトを作り直さず、新しい一覧をリマインダーとして送る。`getSystemPrompt()` を上書きしている場合は、コンテキストブロックの上、システムプロンプトの先頭に残る

**破壊的変更**があります。`agents/skills` を直接使っているコードでは、次が削除または移動されました。

- 削除: `agents:skills` の Vite import、`agents/skills/compile`、`SkillRegistry`、Think の `skillWorkspace`
- 移動: `runner()` は `agents/skills/runner` へ

**必要なバージョンは Agents SDK v0.32.0 以上、Think v0.23.0 以上**です。

## 業務インパクト（一般企業向け）

**スキルの更新が、開発のサイクルから切り離されます。** これまでスキル（手順書や社内ルール）の追加や修正は、コードに含めて再デプロイする必要がありました。ファイルとして置けるなら、**業務担当者が手順書を書き換えると、次の会話から反映される**運用が可能になります。R2 を使えば、スキルを共有ストレージで一元管理できます。

**ただし、統制の設計が先です。** エージェントがスキルを書き換えられるということは、**誰（何）が Workspace に書けるかが、そのまま実行内容を左右する**ことを意味します。スキルにはスクリプトも含められ、`exec` で実行されます。本番のエージェントでは、書き込み権限、レビュー、変更履歴の取り方を決めてから導入してください。

**既存のエージェントを運用している場合は、移行の確認が必要です。** `agents/skills` を直接使っているコードは、削除された API に依存していないかを、アップデート前に調べます。

**注意点**: 本記事は changelog の記述に基づいており、実際の動作（反映の遅延、同名スキルの衝突時の扱い、権限の境界）は検証していません。

## 副業・個人活用視点

**Cloudflare 上でエージェントを作って納品しているなら、保守の手間が減る可能性があります。** 顧客の手順書を `SKILL.md` として置き、改善のたびにデプロイしなくて済みます。顧客側の担当者が、自分で手順を直せる形にもできます。

**試すなら、検証用のエージェントで、ごく小さなスキルを1つ置いてみる方法が手早いです。** Workspace に置いて次のターンで使われるか、不備のある `SKILL.md` で警告が出るかを見ると、挙動をつかめます。

**更新前に、`package.json` の Agents SDK と Think のバージョンを確認してください。** v0.32.0 / v0.23.0 未満のままだと、この機能は使えません。逆に、上げる際は削除された API の影響を先に確認します。

**情報源の制約**: 本記事は Cloudflare の changelog 本文に基づく。スキルの反映タイミングや権限まわりの挙動は未検証。
