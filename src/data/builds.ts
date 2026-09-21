import type { Build } from "@/types";

/**
 * About の「作ったもの」。指名検索で来た人が10秒で成果物を把握できるようにする。
 * 顧客名・金額・本業の社名は書かない（実績のぼかし方針）。
 * 詳細な課題→施策→成果は note を正本とし、/cases は要約カードを持つ。
 */
export const builds: Build[] = [
  {
    title: "店舗向けアンケート管理アプリの本番化",
    summary:
      "ノーコードAI環境で作られた22画面・13テーブルのアプリを、既存の動作を仕様として書き起こしたうえで、月額固定費ほぼ0円の構成へ載せ替えました。",
    technologies: ["Next.js", "Cloudflare Workers", "D1", "R2", "OpenAI"],
    href: "https://note.com/shogo_works/n/nb08a3b2a21d5",
    hrefLabel: "設計と実装を note で解説",
  },
  {
    title: "PDFから記事を生成してWordPressへ下書きする仕組み",
    summary:
      "研究紹介PDFを読み取って記事原稿を生成し、レビュー承認後にWordPressへ下書き投稿します。公開と送信は人が判断する形にしました。",
    technologies: ["Claude", "OneDrive", "WordPress API"],
  },
  {
    title: "LINEで社内FAQに答えるボット",
    summary:
      "スプレッドシートのFAQを検索して回答する簡易RAGです。月数百円規模で運用できる構成にしました。",
    technologies: ["Google Apps Script", "LINE Messaging API", "OpenAI API"],
  },
  {
    title: "筋トレ習慣化アプリ（個人開発）",
    summary:
      "記録・分析・クラウドバックアップまでを備えたモノレポ構成のアプリです。ソースを公開しているので、設計と書き方をそのまま見てもらえます。",
    technologies: ["React Native", "Cloudflare Workers", "TypeScript"],
    href: "https://github.com/shogo-tanaka-work/workout-habit-app",
    hrefLabel: "GitHub でソースを見る",
  },
];
