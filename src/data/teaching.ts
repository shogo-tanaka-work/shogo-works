import type { Seminar, TeachingExperience } from "@/types";

export const teachingExperience: TeachingExperience[] = [
  {
    title: "AI講師（業務活用）",
    organization: "byTech",
    period: "2025年5月 - 現在",
    students: "30+",
    description: "AI活用の基礎から実践まで幅広く指導",
    type: "toC",
  },
  {
    title: "ChatGPT活用セミナー",
    organization: "オンライン",
    period: "2025年5月 - 現在",
    students: "50+",
    description: "ChatGPT導入・活用方法の研修",
    type: "toC",
    url: "https://example.com/seminar/chatgpt",
  },
  {
    title: "MCP入門セミナー",
    organization: "オンライン",
    period: "2025年6月",
    students: "20+",
    description: "MCPの解説、活用方法紹介",
    type: "toC",
  },
];

export const upcomingSeminars: Seminar[] = [];

export const pastSeminars: Seminar[] = [
  {
    title: "ChatGPT5解説、活用方法紹介",
    date: "2025年10月末日",
    time: "20:00 - 21:00",
    venue: "オンライン",
    capacity: "100名",
    price: "無料",
    status: "終了",
  },
];
