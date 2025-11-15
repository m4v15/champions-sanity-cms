import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";

interface PostHeaderProps {
  post: BlogPost;
}

export default function PostHeader({ post }: PostHeaderProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <header className="mb-8">
      {/* Breadcrumbs */}
      <nav className="mb-4 text-sm">
        <ol className="flex items-center gap-2 text-gray-600">
          <li>
            <Link href="/blog" className="hover:text-theme-green-900">
              Blog
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900">{post.title}</li>
        </ol>
      </nav>

      {/* Categories */}
      {post.categories && post.categories.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <Link
              key={category._id}
              href={`/blog?category=${category.slug?.current}`}
              className="rounded-full px-3 py-1 text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                backgroundColor: category.color?.hex
                  ? `${category.color.hex}20`
                  : "#e5e7eb",
                color: category.color?.hex || "#374151",
              }}
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
        {post.title}
      </h1>

      {/* Excerpt */}
      {post.excerpt && (
        <p className="mb-4 text-xl text-gray-600">{post.excerpt}</p>
      )}

      {/* Publish Date */}
      {post.publishDate && (
        <div className="mb-6 text-sm text-gray-500">
          Published on {formatDate(post.publishDate)}
        </div>
      )}

      {/* Featured Image */}
      {post.featuredImage?.asset?.url && (
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={post.featuredImage.asset.url}
            alt={post.featuredImage.alt || post.title || ""}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </header>
  );
}
