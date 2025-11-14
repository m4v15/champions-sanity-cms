import { defineQuery } from "next-sanity";
import client from "./sanity.client";

export const contentQuery = defineQuery(
  `*[_type == "siteContent" && contentName == "Main Page"]{
    _id,
    aboutText,
    landingTitle,
    landingSubtitle
    }`,
);

export const linksQuery = defineQuery(
  `*[_type == "links"]{
    _id,
    text,
    url,
    type
    }`,
);

export const fundsQuery = defineQuery(
  `*[_type == "funds"]{
    _id,
    title,
    url,
    imageUrl,
    raised,
    target,
    currency
    }`,
);

export const faqsQuery = defineQuery(
  `*[_type == "faqs" && hide != true] | order(order, asc) {
    _id,
    question,
    answer,
    hide
    }`,
);

export const blogPostsQuery = defineQuery(
  `*[_type == "blogPost" && published == true] | order(publishDate desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage {
      asset->{
        _id,
        url
      },
      alt
    },
    categories[]->{
      _id,
      name,
      slug,
      color
    },
    publishDate,
    featured
  }`,
);

export const categoriesQuery = defineQuery(
  `*[_type == "category"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    color
  }`,
);

export const blogPostBySlugQuery = defineQuery(
  `*[_type == "blogPost" && slug.current == $slug && published == true][0] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage {
      asset->{
        _id,
        url
      },
      alt
    },
    content,
    categories[]->{
      _id,
      name,
      slug,
      color
    },
    publishDate,
    featured
  }`,
);

export const relatedPostsQuery = defineQuery(
  `*[_type == "blogPost" && published == true && _id != $postId && count((categories[]._ref)[@ in $categoryIds]) > 0] | order(publishDate desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage {
      asset->{
        _id,
        url
      },
      alt
    },
    categories[]->{
      _id,
      name,
      slug,
      color
    },
    publishDate,
    featured
  }`,
);

export const getContent = async () =>
  await client.fetch(contentQuery, undefined, { cache: "no-store" });

export const getLinks = async () =>
  await client.fetch(linksQuery, undefined, { cache: "no-store" });

export const getFunds = async () =>
  await client.fetch(fundsQuery, undefined, { cache: "no-store" });

export const getFaqs = async () =>
  await client.fetch(faqsQuery, undefined, { cache: "no-store" });

export const getBlogPosts = async () =>
  await client.fetch(blogPostsQuery, undefined, { cache: "no-store" });

export const getCategories = async () =>
  await client.fetch(categoriesQuery, undefined, { cache: "no-store" });

export const getBlogPostBySlug = async (slug: string) =>
  await client.fetch(blogPostBySlugQuery, { slug }, { cache: "no-store" });

export const getRelatedPosts = async (postId: string, categoryIds: string[]) =>
  await client.fetch(
    relatedPostsQuery,
    { postId, categoryIds },
    { cache: "no-store" }
  );
