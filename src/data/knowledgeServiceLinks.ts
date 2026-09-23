import type { KnowledgeServiceLink } from "@/types";

/**
 * knowledge 記事の末尾に出す「この内容を業務に組み込みたい方へ」の導線。
 * キーは Content Collections の記事ID（src/content/knowledge からの相対パス、拡張子なし）。
 *
 * 対象は Search Console の表示回数上位の記事（2026-09-21 のスナップショット、SHO-209）。
 * 記事の内容と関係のないサービスは載せない。
 */
export const knowledgeServiceLinks: Record<string, readonly KnowledgeServiceLink[]> = {
  "prompt-engineering/role-prompting": [
    {
      serviceId: "personal-support",
      reason: "ロールの設定を含むプロンプト設計を、ご自身の業務に当てはめるところまでマンツーマンで伴走します。",
    },
  ],
  "ai-tools/codex/speed": [
    {
      serviceId: "personal-support",
      reason: "Codex・Claude Code のモデルや速度設定の使い分けを、ご自身の開発に合わせて一緒に整えます。",
    },
  ],
  "web-development/supabase-docs/24-edge-functions": [
    {
      serviceId: "app-development",
      reason: "Supabase の Edge Functions を含むバックエンドの設計・実装・運用保守を、業務委託・受託でお引き受けします。",
    },
  ],
  "ai-tools/codex/chrome-extension": [
    {
      serviceId: "personal-support",
      reason: "Codex をブラウザ作業の自動化に使うところまで、ご自身の業務を題材にマンツーマンで伴走します。",
    },
  ],
  "web-development/cloudflare-docs/61-analytics-logs": [
    {
      serviceId: "app-development",
      reason: "Cloudflare 上でのアプリ構築から、ログ・監視を含む運用保守までお引き受けします。",
    },
  ],
  "harness-engineering/harness-engineering-complete-guide": [
    {
      serviceId: "personal-support",
      reason: "AGENTS.md・Skills・Hooks などのハーネスを、ご自身のリポジトリで一緒に組み立てます。",
    },
    {
      serviceId: "lecture",
      reason: "開発チーム向けに、ハーネス設計を実演しながら解説する研修・勉強会の講師を承ります。",
    },
  ],
  "web-development/vercel-docs/24-deployments-and-environments": [
    {
      serviceId: "app-development",
      reason: "Vercel のデプロイ環境の整備を含め、Webアプリの開発から運用保守までお引き受けします。",
    },
  ],
  "web-development/cloudflare-docs/32-dex": [
    {
      serviceId: "app-development",
      reason: "Cloudflare を使ったインフラ構成を含め、アプリの開発から運用保守までお引き受けします。",
    },
  ],
  "web-development/supabase-docs/27-cron-queues": [
    {
      serviceId: "app-development",
      reason: "Supabase の定期実行やキュー処理を含むバックエンドの構築・運用保守を、業務委託・受託でお引き受けします。",
    },
  ],
  "ai-tools/codex/enterprise-admin": [
    {
      serviceId: "lecture",
      reason: "社内への Codex・Claude Code の導入に合わせて、研修・勉強会の講師を承ります。",
    },
  ],
};
