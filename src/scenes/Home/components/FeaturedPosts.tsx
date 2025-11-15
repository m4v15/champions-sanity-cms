import Link from "next/link";
import Image from "next/image";
import { BlogPostSummary } from "@/types/blog";

interface FeaturedPostsProps {
  posts: BlogPostSummary[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="mt-2 text-lg text-gray-600">
            Check out the latest stories and insights from our champions
          </p>
        </div>
        <Link
          href="/blog"
          className="text-theme-green-900 hover:text-theme-green-700 font-semibold transition-colors"
        >
          View all posts →
        </Link>
      </div>

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

            <div className="flex flex-grow flex-col p-5">
              <div key={post._id} className="mb-3 flex flex-wrap gap-2">
                {post.categories?.map((category) => (
                  <span
                    key={category._id}
                    className="rounded-full px-3 py-1 text-xs font-medium"
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

              <h3 className="mb-2 text-xl font-bold tracking-tight group-hover:text-theme-green-900">
                {post.title}
              </h3>

              <p className="mb-4 flex-grow text-gray-600 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="text-sm text-gray-500">
                {post.publishDate && formatDate(post.publishDate)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
