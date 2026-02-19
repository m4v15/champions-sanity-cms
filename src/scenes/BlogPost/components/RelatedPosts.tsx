import Link from "next/link";
import Image from "next/image";
import { BlogPostSummary } from "@/types/blog";

interface RelatedPostsProps {
  posts: BlogPostSummary[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="mt-16 border-t pt-12">
      <h2 className="mb-8 text-3xl font-bold">Related Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug?.current}`}
            className="group flex flex-col overflow-hidden border border-gray-200 bg-white shadow transition-transform hover:scale-105"
          >
            {post.featuredImage?.asset?.url && (
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image
                  src={post.featuredImage.asset.url}
                  alt={post.featuredImage.alt || post.title || ""}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
            )}

            <div className="flex flex-grow flex-col p-4">
              <div className="mb-2 flex flex-wrap gap-2">
                {post.categories?.slice(0, 2).map((category) => (
                  <span
                    key={category._id}
                    className="rounded-full px-2 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: category.color?.hex
                        ? `${category.color.hex}20`
                        : "#e5e7eb",
                      color: category.color?.hex || "#374151",
                    }}
                  >
                    {category.name}
                  </span>
                ))}
              </div>

              <h3 className="mb-2 text-lg font-bold group-hover:text-theme-green-900">
                {post.featured && <span className="mr-1">⭐</span>}
                {post.title}
              </h3>

              <p className="mb-3 flex-grow text-sm text-gray-600 line-clamp-2">
                {post.excerpt}
              </p>

              {post.publishDate && (
                <div className="text-xs text-gray-500">
                  {formatDate(post.publishDate)}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
