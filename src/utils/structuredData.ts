import { personProfile, schemaIds } from "@/data/person";
import { siteConfig } from "@/data/site";

interface SchemaReference {
  "@id": string;
}

interface PersonSchema {
  "@context": string;
  "@type": "Person";
  "@id": string;
  name: string;
  alternateName: string[];
  jobTitle: string;
  description: string;
  url: string;
  image: string;
  knowsAbout: string[];
  sameAs: string[];
  worksFor: SchemaReference;
}

interface OrganizationSchema {
  "@context": string;
  "@type": "Organization";
  "@id": string;
  name: string;
  url: string;
  description: string;
  founder: SchemaReference;
}

interface ArticleSchema {
  "@context": string;
  "@type": "Article";
  headline: string;
  description: string;
  url: string;
  mainEntityOfPage: string;
  datePublished: string;
  dateModified?: string;
  author: ArticleAuthor;
  publisher: SchemaReference;
}

interface ArticleAuthor extends SchemaReference {
  "@type": "Person";
  name: string;
  url: string;
}

interface ArticleSchemaInput {
  title: string;
  description: string;
  /** サイト内の記事パス（例: /knowledge/ai-tools/claude-code） */
  path: string;
  createdAt: Date;
  updatedAt?: Date;
}

const SCHEMA_CONTEXT = "https://schema.org";

/** サイト内の相対パスを、構造化データで必要な絶対URLへ解決する */
function toAbsoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).href;
}

/** 各媒体のアカウントを同一人物として示す Person 構造化データを組み立てる */
export function buildPersonSchema(): PersonSchema {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Person",
    "@id": schemaIds.person,
    name: personProfile.name,
    alternateName: [...personProfile.alternateName],
    jobTitle: personProfile.jobTitle,
    description: personProfile.description,
    url: toAbsoluteUrl("/about"),
    image: toAbsoluteUrl(personProfile.image),
    knowsAbout: [...personProfile.knowsAbout],
    sameAs: [...personProfile.sameAs],
    worksFor: { "@id": schemaIds.organization },
  };
}

/** 屋号（shogoworks）の Organization 構造化データを組み立て、founder で Person へ結ぶ */
export function buildOrganizationSchema(): OrganizationSchema {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Organization",
    "@id": schemaIds.organization,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    founder: { "@id": schemaIds.person },
  };
}

/**
 * knowledge 記事の Article 構造化データを組み立てる。
 * author は Head.astro が全ページで出す Person を @id で参照し、同一人物の記事として結ぶ。
 * @id を解決しない読み手でも著者を判別できるよう、name と url も添える。
 */
export function buildArticleSchema(input: ArticleSchemaInput): ArticleSchema {
  const url = toAbsoluteUrl(input.path);
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url,
    mainEntityOfPage: url,
    datePublished: input.createdAt.toISOString(),
    ...(input.updatedAt && { dateModified: input.updatedAt.toISOString() }),
    author: {
      "@type": "Person",
      "@id": schemaIds.person,
      name: personProfile.name,
      url: toAbsoluteUrl("/about"),
    },
    publisher: { "@id": schemaIds.organization },
  };
}
