import { defineField } from "sanity";

const category = {
  name: "category",
  title: "Blog Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Category name (e.g., 'Updates', 'Education', 'Events')",
      validation: (rule) => rule.required().max(50),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly version of the name",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Optional description of this category",
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "color",
      description: "Optional color for category badges/tags",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
    },
  },
};

export default category;
