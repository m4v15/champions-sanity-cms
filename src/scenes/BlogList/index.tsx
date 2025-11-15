import { getBlogPosts, getCategories } from "@sanity/sanity.query";
import { BlogPostCard, CategoryFilter, Pagination } from "./components";
import { BlogPostSummary, Category } from "@/types/blog";

interface BlogListProps {
  searchParams: {
    category?: string;
    page?: string;
  };
}

const POSTS_PER_PAGE = 9;

export default async function BlogList({ searchParams }: BlogListProps) {
  const [allPosts, categories] = await Promise.all([
    getBlogPosts(),
    getCategories(),
  ]) as [BlogPostSummary[], Category[]];

  // Filter by category if specified
  const categorySlug = searchParams.category;
  const filteredPosts = categorySlug
    ? allPosts.filter((post) =>
        post.categories?.some((cat) => cat.slug?.current === categorySlug)
      )
    : allPosts;

  // Pagination
  const currentPage = parseInt(searchParams.page || "1", 10);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <div className="mx-auto max-w-screen-xl px-3 py-8 lg:px-14">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="text-lg text-gray-600">
          Stories, updates, and insights from Gaza Champions
        </p>
      </div>

      <CategoryFilter categories={categories} />

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-600">
            No blog posts found. {categorySlug && "Try a different category."}
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          categorySlug={categorySlug}
        />
      )}
    </div>
  );
}
