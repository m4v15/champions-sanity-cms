import { PortableTextBlock } from "@portabletext/types";

export interface Category {
  _id: string;
  name: string | null;
  slug: { current: string | null } | null;
  description?: string | null;
  color: { hex: string | null } | null;
}

export interface BlogPostSummary {
  _id: string;
  title: string | null;
  slug: { current: string | null } | null;
  excerpt: string | null;
  featuredImage?: {
    asset?: {
      _id: string;
      url: string;
    } | null;
    alt: string | null;
  } | null;
  categories?: Category[] | null;
  publishDate: string | null;
  featured: boolean | null;
}

export interface BlogPost extends BlogPostSummary {
  content: PortableTextBlock[];
}
