/**
 * Centralized JSON-LD schema builders for oss.vstorm.co
 *
 * Single source of truth — all pages import from here.
 * Layout.astro auto-adds WebSite + BreadcrumbList.
 */

import type { Lang } from "../i18n/translations";

export type JsonLdSchema = Record<string, unknown>;

// ── Shared constants ──

export const SITE_URL = "https://oss.vstorm.co";

const CONTEXT = "https://schema.org";

const PUBLISHER = {
  "@type": "Organization",
  name: "Vstorm",
  url: "https://vstorm.co",
};

const FREE_OFFER = {
  "@type": "Offer",
  price: "0",
  priceCurrency: "USD",
};

const ORG_DESCRIPTION =
  "Open-source tools for building production AI agents with Python. 20 repos, 1,270+ stars, 285K+ PyPI downloads. By Vstorm.";

const SAME_AS = [
  "https://github.com/vstorm-co",
  "https://vstorm.co",
  "https://www.linkedin.com/company/vstormco/",
  "https://pypi.org/user/kacperwlodarczyk-vstorm/",
];

// ── Builder functions ──

export interface OrganizationParams {
  description?: string;
  foundingDate?: string;
  numberOfEmployees?: number;
  extraSameAs?: string[];
}

export function organizationSchema(params?: OrganizationParams): JsonLdSchema {
  return {
    "@context": CONTEXT,
    "@type": "Organization",
    name: "Vstorm OSS",
    description: params?.description ?? ORG_DESCRIPTION,
    url: SITE_URL,
    sameAs: params?.extraSameAs ? [...SAME_AS, ...params.extraSameAs] : SAME_AS,
    author: PUBLISHER,
    ...(params?.foundingDate && { foundingDate: params.foundingDate }),
    ...(params?.numberOfEmployees && {
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: params.numberOfEmployees,
      },
    }),
  };
}

export interface SoftwareApplicationParams {
  name: string;
  description: string;
  url: string;
  programmingLanguage?: string[];
  github?: string;
  pypi?: string;
  featureList?: string;
  operatingSystem?: string;
}

export function softwareApplicationSchema(params: SoftwareApplicationParams): JsonLdSchema {
  return {
    "@context": CONTEXT,
    "@type": "SoftwareApplication",
    name: params.name,
    description: params.description,
    url: params.url,
    applicationCategory: "DeveloperApplication",
    operatingSystem: params.operatingSystem ?? "Cross-platform",
    offers: FREE_OFFER,
    programmingLanguage: params.programmingLanguage ?? ["Python"],
    author: PUBLISHER,
    ...(params.github && { codeRepository: `https://github.com/${params.github}` }),
    ...(params.pypi && { downloadUrl: `https://pypi.org/project/${params.pypi}/` }),
    ...(params.featureList && { featureList: params.featureList }),
  };
}

export interface BlogPostingParams {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  author?: string;
  url: string;
  lang: Lang;
  image?: string;
}

export function blogPostingSchema(params: BlogPostingParams): JsonLdSchema {
  return {
    "@context": CONTEXT,
    "@type": "BlogPosting",
    headline: params.title,
    description: params.description,
    datePublished: params.pubDate.toISOString(),
    ...(params.updatedDate && { dateModified: params.updatedDate.toISOString() }),
    author: { "@type": "Organization", name: params.author ?? "Vstorm" },
    publisher: PUBLISHER,
    mainEntityOfPage: { "@type": "WebPage", "@id": params.url },
    inLanguage: params.lang,
    ...(params.image && { image: params.image }),
  };
}

export interface HowToParams {
  name: string;
  description: string;
  steps: { name: string; text?: string; url?: string }[];
}

export function howToSchema(params: HowToParams): JsonLdSchema {
  return {
    "@context": CONTEXT,
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    step: params.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      ...(s.text && { text: s.text }),
      ...(s.url && { url: s.url }),
    })),
  };
}

export interface FaqPageParams {
  questions: { question: string; answer: string }[];
}

export function faqPageSchema(params: FaqPageParams): JsonLdSchema {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: params.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

export interface CollectionPageParams {
  name: string;
  description: string;
  url: string;
}

export function collectionPageSchema(params: CollectionPageParams): JsonLdSchema {
  return {
    "@context": CONTEXT,
    "@type": "CollectionPage",
    name: params.name,
    description: params.description,
    url: params.url,
    publisher: PUBLISHER,
  };
}

export interface WebPageParams {
  name: string;
  description: string;
  url: string;
}

export function webPageSchema(params: WebPageParams): JsonLdSchema {
  return {
    "@context": CONTEXT,
    "@type": "WebPage",
    name: params.name,
    description: params.description,
    url: params.url,
    publisher: PUBLISHER,
  };
}

// ── Auto-generated by Layout ──

export function websiteSchema(): JsonLdSchema {
  return {
    "@context": CONTEXT,
    "@type": "WebSite",
    name: "Vstorm OSS",
    url: SITE_URL,
    publisher: PUBLISHER,
  };
}

export function breadcrumbSchema(
  items: { name: string; item: string }[],
): JsonLdSchema | null {
  if (items.length <= 1) return null;
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((bc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: bc.name,
      item: bc.item,
    })),
  };
}
