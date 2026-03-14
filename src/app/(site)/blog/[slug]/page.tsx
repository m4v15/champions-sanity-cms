import type { Metadata } from "next";
import { BlogPost } from "@/scenes";
import { getBlogPostBySlug } from "@sanity/sanity.query";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return {};

  const title = post.title ?? "Gaza Champions";
  const description = post.excerpt ?? "Initiative to find individuals to champion fundraising efforts from Gaza";
  const imageUrl = post.featuredImage?.asset?.url;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}
