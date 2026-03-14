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
  const sanityImageUrl = post.featuredImage?.asset?.url;
  // Append dimensions so scrapers (WhatsApp, Signal) accept the image.
  // Fall back to the site logo if the post has no featured image.
  const ogImage = sanityImageUrl
    ? `${sanityImageUrl}?w=1200&h=630&fit=crop`
    : "/logo/3x/logo-red@3x.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}
