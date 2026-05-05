import type { AiNewsStatusMeta, AiNewsToolMeta } from "@/types";

export const aiNewsTools: AiNewsToolMeta[] = [
  {
    slug: "chatgpt-openai",
    label: "ChatGPT / OpenAI",
    description: "ChatGPT、OpenAI API、Soraなどの公式アップデート",
  },
  {
    slug: "claude",
    label: "Claude",
    description: "claude.ai、Claude API、Anthropic製品の公式アップデート",
  },
  {
    slug: "claude-code",
    label: "Claude Code",
    description: "Claude CodeのCLI、エージェント開発、開発ワークフロー更新",
  },
  {
    slug: "gemini",
    label: "Gemini",
    description: "Geminiアプリ、Google AI、Workspace連携の公式アップデート",
  },
  {
    slug: "github-copilot",
    label: "GitHub Copilot",
    description: "Copilot、Coding Agent、VS Code連携の公式アップデート",
  },
  {
    slug: "n8n",
    label: "n8n",
    description: "n8nのリリース、AIワークフロー、連携機能の更新",
  },
  {
    slug: "runway",
    label: "Runway",
    description: "動画生成、モデル追加、制作ワークフローの公式アップデート",
  },
];

export const aiNewsStatuses: AiNewsStatusMeta[] = [
  {
    status: "captured",
    label: "収集済み",
    description: "公式更新を確認し、公開ログとして保存した状態",
  },
  {
    status: "candidate",
    label: "教材化候補",
    description: "Knowledge記事へ展開する価値がありそうな状態",
  },
  {
    status: "promoted",
    label: "Knowledge反映済み",
    description: "体系化されたKnowledge記事へ反映済みの状態",
  },
];
