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
  logo: {
    "@type": "ImageObject",
    url: "https://oss.vstorm.co/favicon.svg",
  },
};

const FREE_OFFER = {
  "@type": "Offer",
  price: "0",
  priceCurrency: "USD",
};

const ORG_DESCRIPTION =
  "Open-source tools for building production AI agents with Python. 13 repos, 1,730+ stars, 830K+ PyPI downloads. By Vstorm.";

const SAME_AS = [
  "https://github.com/vstorm-co",
  "https://vstorm.co",
  "https://www.linkedin.com/company/vstormco/",
  "https://pypi.org/user/kacperwlodarczyk-vstorm/",
  "https://twitter.com/VstormCommunity",
  "https://www.crunchbase.com/organization/vstorm",
  "https://www.youtube.com/@vstorm-ai-consultancy",
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
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.svg`,
    },
    sameAs: params?.extraSameAs ? [...SAME_AS, ...params.extraSameAs] : SAME_AS,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "technical support",
      url: "https://github.com/vstorm-co",
    },
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

// ── Person schema for authors ──

export interface PersonParams {
  name: string;
  jobTitle?: string;
  url?: string;
  sameAs?: string[];
}

export function personSchema(params: PersonParams): JsonLdSchema {
  return {
    "@context": CONTEXT,
    "@type": "Person",
    name: params.name,
    ...(params.jobTitle && { jobTitle: params.jobTitle }),
    ...(params.url && { url: params.url }),
    worksFor: PUBLISHER,
    ...(params.sameAs && params.sameAs.length > 0 && { sameAs: params.sameAs }),
  };
}

// ── BlogPosting ──

export interface BlogPostingParams {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  author?: string;
  authorPerson?: PersonParams;
  url: string;
  lang: Lang;
  image?: string;
  wordCount?: number;
  keywords?: string[];
  articleSection?: string;
}

export function blogPostingSchema(params: BlogPostingParams): JsonLdSchema {
  const authorSchema = params.authorPerson
    ? {
        "@type": "Person" as const,
        name: params.authorPerson.name,
        ...(params.authorPerson.jobTitle && { jobTitle: params.authorPerson.jobTitle }),
        ...(params.authorPerson.url && { url: params.authorPerson.url }),
        ...(params.authorPerson.sameAs &&
          params.authorPerson.sameAs.length > 0 && { sameAs: params.authorPerson.sameAs }),
      }
    : { "@type": "Organization" as const, name: params.author ?? "Vstorm" };

  return {
    "@context": CONTEXT,
    "@type": "BlogPosting",
    headline: params.title,
    description: params.description,
    datePublished: params.pubDate.toISOString(),
    ...(params.updatedDate && { dateModified: params.updatedDate.toISOString() }),
    author: authorSchema,
    publisher: PUBLISHER,
    mainEntityOfPage: { "@type": "WebPage", "@id": params.url },
    inLanguage: params.lang,
    ...(params.image && { image: params.image }),
    ...(params.wordCount && { wordCount: params.wordCount }),
    ...(params.keywords && params.keywords.length > 0 && { keywords: params.keywords.join(", ") }),
    ...(params.articleSection && { articleSection: params.articleSection }),
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

// ── DefinedTerm (Glossary) ──

export interface DefinedTermSetParams {
  name: string;
  description: string;
  url: string;
  terms: { name: string; url: string }[];
}

export function definedTermSetSchema(params: DefinedTermSetParams): JsonLdSchema {
  return {
    "@context": CONTEXT,
    "@type": "DefinedTermSet",
    name: params.name,
    description: params.description,
    url: params.url,
    hasDefinedTerm: params.terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.name,
      url: t.url,
    })),
  };
}

export interface DefinedTermParams {
  name: string;
  description: string;
  url: string;
  inDefinedTermSet?: string;
}

export function definedTermSchema(params: DefinedTermParams): JsonLdSchema {
  return {
    "@context": CONTEXT,
    "@type": "DefinedTerm",
    name: params.name,
    description: params.description,
    url: params.url,
    ...(params.inDefinedTermSet && {
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: params.inDefinedTermSet,
        url: `${SITE_URL}/glossary/`,
      },
    }),
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

export function websiteSchema(lang: Lang = "en"): JsonLdSchema {
  const langPath = lang === "en" ? "" : `/${lang}`;
  return {
    "@context": CONTEXT,
    "@type": "WebSite",
    name: "Vstorm OSS",
    url: `${SITE_URL}${langPath}`,
    publisher: PUBLISHER,
    inLanguage: lang,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}${langPath}/blog/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; item: string }[]): JsonLdSchema | null {
  if (items.length <= 1) return null;
  return {
    "@context": CONTEXT,
    "@type": ["BreadcrumbList"],
    itemListElement: items.map((bc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: bc.name,
      item: bc.item,
    })),
  };
}
