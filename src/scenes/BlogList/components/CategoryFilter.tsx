"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Category {
  _id: string;
  name: string | null;
  slug: { current: string | null } | null;
  color: { hex: string | null } | null;
}

interface CategoryFilterProps {
  categories: Category[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const handleCategoryClick = (categorySlug: string | null) => {
    if (categorySlug) {
      router.push(`/blog?category=${categorySlug}`);
    } else {
      router.push("/blog");
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
          !selectedCategory
            ? "border-theme-green-900 bg-theme-green-900 text-white"
            : "border-gray-300 bg-white text-gray-700 hover:border-theme-green-900"
        }`}
      >
        All Posts
      </button>

      {categories.map((category) => {
        const isSelected = selectedCategory === category.slug?.current;
        return (
          <button
            key={category._id}
            onClick={() => handleCategoryClick(category.slug?.current || null)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isSelected
                ? "text-white"
                : "bg-white text-gray-700 hover:opacity-80"
            }`}
            style={{
              backgroundColor: isSelected
                ? category.color?.hex || "#166534"
                : "white",
              borderColor: category.color?.hex || "#d1d5db",
            }}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
