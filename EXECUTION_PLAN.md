# shogoworks サイト — Astro 6 アップグレード + Cloudflare Pages ハーネス構築 実行計画書

作成日: 2026-03-17

## Context

現在の shogoworks サイトは Astro 5.7 + `@astrojs/node`（SSR standalone）で構築されているが、CI/CD・ホスティング設定・Git管理が未整備。Astro 6 へのメジャーアップグレードを行いつつ、Cloudflare Pages に移行し、GitHub Actions による自動デプロイパイプラインと CLI コマンド集を整備する。Figma MCP は今回スキップ（後日拡張予定）。

---

## 設計判断

| 判断ポイント | 結論 | 理由 |
|-------------|------|------|
| Astro バージョン | 5.7 → 6.0 | Cloudflare 買収元、CSP内蔵、Vite 7 対応、Zero JS default |
| Hono 追加 | 不要 | API は `/api/contact` の1本のみ。Astro API Routes で十分 |
| Bun 切り替え | 見送り | CF Pages ビルド環境は npm/Node.js。CI は npm 統一 |
| `resend` パッケージ | 削除 | コード上は直接 `fetch` で Resend API を叩いており未使用 |
| Contact Form | コード変更不要 | `fetch` 直接呼び出し + `import.meta.env` は CF Workers 互換 |

## 前提条件

- Node.js: **22.12.0+**（Astro 6 の要件。現環境は 22.12.0 でクリア）
- `wrangler login` 済みであること
- `gh auth login` 済みであること
- Cloudflare アカウントを持っていること

---

## 実装ステップ

### Step 1: Astro 6 アップグレード

**コマンド:**
```bash
npx @astrojs/upgrade
```

公式アップグレードツールが `astro`, `@astrojs/react`, `@astrojs/check` 等の依存関係を自動更新する。

**Zod 4 移行が必要（`src/utils/validation.ts`）:**

Astro 6 は Zod 4 を同梱。現在のスキーマで影響があるのは `.email()` バリデータ:

```typescript
// Before (Zod 3)
email: z.string().min(1, "...").email("正しいメールアドレスを入力してください"),

// After (Zod 4) — z.email() がトップレベルに移動
email: z.email({ error: "正しいメールアドレスを入力してください" }),
```

エラーメッセージの渡し方: `{ message: "..." }` → `{ error: "..." }` に変更。

**確認:** `npm run build` でエラーなくビルドできること。

---

### Step 2: アダプター移行（node → cloudflare）

**コマンド:**
```bash
npm uninstall @astrojs/node resend
npm install @astrojs/cloudflare
```

**`astro.config.ts` 変更:**
```typescript
// Before
import node from "@astrojs/node";
adapter: node({ mode: "standalone" }),

// After
import cloudflare from "@astrojs/cloudflare";
adapter: cloudflare(),
```

**`src/pages/api/contact.ts`** — 変更不要（`fetch` + `import.meta.env` は CF Workers 互換）。

---

### Step 3: Wrangler 設定ファイル作成

**新規作成:** `wrangler.jsonc`
```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "shogoworks",
  "compatibility_date": "2026-03-17",
  "pages_build_output_dir": "dist"
}
```

---

### Step 4: ローカル動作確認

```bash
npm run build
npx wrangler pages dev dist
```

- 全ページ遷移確認: `/`, `/about`, `/portfolio`, `/skills`, `/contact`, `/privacy`, `/terms-of-service`
- `.dev.vars` ファイルに以下を設定してコンタクトフォームテスト:
  ```
  RESEND_API_KEY=re_xxxx
  CONTACT_TO_EMAIL=your@email.com
  ```

---

### Step 5: Git 初期化 + GitHub リポジトリ作成

**新規作成:** `.gitignore`
```
node_modules/
dist/
.astro/
.env
.env.local
.dev.vars
.wrangler/
```

**コマンド:**
```bash
git init
git add .
git commit -m "init: Astro 6 + Cloudflare Pages構成でgit管理を開始"
gh repo create shogoworks --private --source=. --push
```

---

### Step 6: GitHub Actions ワークフロー作成

**新規作成:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [develop]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - name: Deploy to Cloudflare Pages
        if: github.event_name == 'push'
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy dist --project-name=shogoworks --branch=${{ github.ref_name }}
```

**手動設定が必要な Secrets / 環境変数:**

| 設定先 | キー | 取得方法 |
|-------|------|---------|
| GitHub Secrets | `CLOUDFLARE_API_TOKEN` | Cloudflare Dashboard > API Tokens で作成 |
| GitHub Secrets | `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Dashboard URL から取得 |
| CF Pages シークレット | `RESEND_API_KEY` | `npx wrangler pages secret put RESEND_API_KEY` |
| CF Pages シークレット | `CONTACT_TO_EMAIL` | `npx wrangler pages secret put CONTACT_TO_EMAIL` |

---

### Step 7: ブランチ運用 + develop 作成

```bash
git checkout -b develop
git push -u origin develop
```

**ブランチフロー:**
```
feature/* → PR → develop（Preview Deploy）→ PR → main（Production Deploy）
```

ブランチ保護は個人開発のため最小限にとどめ、必要に応じて後から強化。

---

### Step 8: CLAUDE.md に CLI コマンドチートシート追記

プロジェクトルートの `CLAUDE.md` に以下を追記:

```markdown
## CLI コマンド集

### 開発
npm run dev                           # ローカル開発サーバー (localhost:4321)
npm run build                         # 型チェック + ビルド
npx wrangler pages dev dist           # CF Workers ランタイムでローカルテスト

### Git / GitHub
git checkout -b feature/xxx develop   # 新機能ブランチ作成
gh pr create --base develop           # develop へ PR 作成
gh pr merge --squash                  # PR マージ
gh pr create --base main --head develop  # リリース PR

### デプロイ（手動）
npx wrangler pages deploy dist --project-name=shogoworks
npx wrangler pages deployment list --project-name=shogoworks

### シークレット管理
npx wrangler pages secret put RESEND_API_KEY
npx wrangler pages secret put CONTACT_TO_EMAIL
```

---

## デプロイ対応表

| ブランチ | デプロイ先 |
|---------|-----------|
| `main` push | Production (`shogoworks.pages.dev` / `shogoworks.com`) |
| `develop` push | Preview (`develop.shogoworks.pages.dev`) |
| PR → develop | ビルド確認のみ（デプロイなし） |

---

## 変更対象ファイル一覧

| ファイル | 操作 | 内容 |
|---------|------|------|
| `package.json` | 編集（npm経由） | Astro 6 アップグレード + adapter 入れ替え + resend 削除 |
| `astro.config.ts` | 編集 | adapter: node → cloudflare |
| `src/utils/validation.ts` | 編集 | Zod 4 移行（`.email()` → `z.email()` 等） |
| `wrangler.jsonc` | 新規 | CF Pages 設定 |
| `.gitignore` | 新規 | Git 除外設定 |
| `.github/workflows/deploy.yml` | 新規 | CI/CD パイプライン |
| `CLAUDE.md` | 新規 or 追記 | CLI コマンドチートシート |

---

## 検証手順

1. `npm run build` がエラーなく完了すること
2. `npx wrangler pages dev dist` で全ページが表示されること
3. コンタクトフォーム送信テスト（`.dev.vars` に環境変数設定）
4. `develop` push → Preview デプロイ成功
5. `main` merge → Production デプロイ成功
6. カスタムドメイン `shogoworks.com` を Cloudflare Pages に設定（Dashboard から手動）

---

## 後日拡張予定

- [ ] Figma MCP 連携（`claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp`）
- [ ] ブランチ保護ルール強化
- [ ] Lighthouse CI 統合（GitHub Actions に追加）
- [ ] Hono API 追加（API エンドポイントが増えた場合）
