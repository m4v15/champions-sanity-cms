import { defineField } from "sanity";

const blogPost = {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the blog post",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly version of the title (e.g., 'my-blog-post')",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Short summary for listing pages (max 200 characters)",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      description: "Main image for the post (optional)",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Describe the image for accessibility",
        },
      ],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      description: "The main content of the blog post",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (rule) =>
                      rule.uri({
                        scheme: ["http", "https", "mailto"],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      description: "Assign one or more categories to this post",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "publishDate",
      title: "Publish Date",
      type: "datetime",
      description: "When this post should be published",
      validation: (rule) => rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      description: "Show this post in the featured section on the homepage",
      initialValue: false,
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      description: "Set to true to make this post visible on the website",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Publish Date, Newest First",
      name: "publishDateDesc",
      by: [{ field: "publishDate", direction: "desc" }],
    },
    {
      title: "Title A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "excerpt",
      media: "featuredImage",
      published: "published",
      featured: "featured",
    },
    prepare({ title, subtitle, media, published, featured }: any) {
      return {
        title: `${!published ? "[DRAFT] " : ""}${featured ? "⭐ " : ""}${title}`,
        subtitle,
        media,
      };
    },
  },
};

export default blogPost;
