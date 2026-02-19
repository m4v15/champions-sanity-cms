import Link from "next/link";
import Image from "next/image";
import { BlogPostSummary } from "@/types/blog";

interface BlogPostCardProps {
  post: BlogPostSummary;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Link
      href={`/blog/${post.slug?.current}`}
      className="rounded-sm group flex flex-col overflow-hidden border border-gray-200 bg-white shadow transition-transform hover:scale-105"
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
        <div className="mb-3 flex flex-wrap gap-2">
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

        <h2 className="mb-2 text-2xl font-bold tracking-tight group-hover:text-theme-green-900">
          {post.title}
        </h2>

        <p className="mb-4 flex-grow text-gray-600">{post.excerpt}</p>

        <div className="text-sm text-gray-500">
          {post.publishDate && formatDate(post.publishDate)}
        </div>
      </div>
    </Link>
  );
}
