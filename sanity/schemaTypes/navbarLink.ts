import { defineField } from "sanity";

const navbarLink = {
  name: "navbarLink",
  title: "Navbar Link",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The text to display in the navbar",
      validation: (rule) => rule.required().max(30),
    }),
    defineField({
      name: "blogPost",
      title: "Blog Post",
      type: "reference",
      to: [{ type: "blogPost" }],
      description: "The blog post to link to",
      validation: (rule) => rule.required(),
    }),
  ],
};

export default navbarLink;
