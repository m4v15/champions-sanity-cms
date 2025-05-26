import { defineField } from "sanity";

const faqs = {
  name: "faqs",
  title: "Frequently Asked Questions",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      description: "Question",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
      description: "Answer",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hide",
      title: "Hide from FAQ",
      type: "boolean",
      description: "To hide the question from the site",
    }),
    defineField({
      name: "order",
      title: "Order Priority",
      type: "number",
      description: "Lower numbers will appear higher up on the website",
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};

export default faqs;
