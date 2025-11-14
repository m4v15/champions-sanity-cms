import { notFound } from "next/navigation";
import { getBlogPostBySlug, getRelatedPosts } from "@sanity/sanity.query";
import { PortableTextContent, RelatedPosts, PostHeader } from "./components";
import { BlogPost as BlogPostType } from "@/types/blog";

interface BlogPostProps {
  slug: string;
}

export default async function BlogPost({ slug }: BlogPostProps) {
  const post = (await getBlogPostBySlug(slug)) as BlogPostType | null;

  if (!post) {
    notFound();
  }

  // Fetch related posts based on categories
  const categoryIds =
    post.categories?.map((cat) => cat._id).filter(Boolean) || [];
  const relatedPosts =
    categoryIds.length > 0
      ? await getRelatedPosts(post._id, categoryIds)
      : [];

  return (
    <article className="mx-auto max-w-4xl px-3 py-8 lg:px-14">
      <PostHeader post={post} />

      <div className="prose prose-lg max-w-none">
        <PortableTextContent content={post.content} />
      </div>

      {relatedPosts && relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} />
      )}
    </article>
  );
}
