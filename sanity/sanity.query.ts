import queries from "./queries";
import client from "./sanity.client";

export const getContent = async () =>
  await client.fetch(queries.content, undefined, { cache: "no-store" });

export const getLinks = async () =>
  await client.fetch(queries.links, undefined, { cache: "no-store" });

export const getFunds = async () =>
  await client.fetch(queries.funds, undefined, { cache: "no-store" });

export const getFaqs = async () =>
  await client.fetch(queries.faqs, undefined, { cache: "no-store" });

export const getBlogPosts = async () =>
  await client.fetch(queries.blogPosts, undefined, { cache: "no-store" });

export const getCategories = async () =>
  await client.fetch(queries.categories, undefined, { cache: "no-store" });

export const getBlogPostBySlug = async (slug: string) =>
  await client.fetch(queries.blogPostBySlug, { slug }, { cache: "no-store" });

export const getRelatedPosts = async (postId: string, categoryIds: string[]) =>
  await client.fetch(
    queries.relatedPosts,
    { postId, categoryIds },
    { cache: "no-store" }
  );

  export const getFeaturedBlogPosts = async () =>
  await client.fetch(queries.featuredBlogPosts, undefined, { cache: "no-store" });