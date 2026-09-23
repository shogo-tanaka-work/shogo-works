import { platformLabels } from "@/data/platforms";
import type {
  KnowledgeServiceLink,
  PlatformLink,
  PricingPlan,
  ServiceItem,
} from "@/types";

export interface Cta {
  href: string;
  label: string;
  external: boolean;
}

const CONTACT_HREF = "/contact";

const platformCta = (link: PlatformLink, verb: string): Cta => ({
  href: link.href,
  label: `${platformLabels[link.platform]}で${verb}`,
  external: true,
});

// サービス全体の主CTA。販売プラットフォームが決まっていなければ直接契約の問い合わせへ。
export const serviceCta = (service: ServiceItem): Cta =>
  service.primaryPlatform
    ? platformCta(service.primaryPlatform, "申し込む")
    : {
        href: CONTACT_HREF,
        label: `${service.title}について問い合わせる`,
        external: false,
      };

// プランごとの申込先。links が無いプランは /contact で受ける。
export const planCtas = (plan: PricingPlan): Cta[] =>
  plan.links && plan.links.length > 0
    ? plan.links.map((link) => platformCta(link, "見る"))
    : [{ href: CONTACT_HREF, label: "お問い合わせ", external: false }];

export interface ResolvedKnowledgeServiceLink {
  href: string;
  title: string;
  reason: string;
}

// knowledge 記事の末尾に出すサービス導線。対象外の記事では空配列を返す。
export const resolveKnowledgeServiceLinks = (
  entryId: string,
  links: Readonly<Record<string, readonly KnowledgeServiceLink[]>>,
  serviceList: readonly ServiceItem[],
): ResolvedKnowledgeServiceLink[] =>
  (links[entryId] ?? []).map(({ serviceId, reason }) => {
    const service = serviceList.find((s) => s.id === serviceId);
    if (!service) {
      throw new Error(
        `knowledge 記事 ${entryId} のサービス導線が未知の serviceId ${serviceId} を参照しています`,
      );
    }
    return { href: service.href, title: service.title, reason };
  });
