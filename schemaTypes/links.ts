import { defineField } from "sanity";

const links = {
  name: "links",
  title: "Links",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      description: "The text to display on the page",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
      description: "The URL of the page you want to link to",
      validation: (rule) => rule.required(),
    }),
    defineField({
      description:
        "The type of the link you want to link to - this will affect where it is displayed",
      name: "type",
      title: "Type",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Project", value: "project" },
          { title: "Media", value: "media" },
        ],
      },
      validation: (rule) => rule.required().length(1),
    }),
  ],
};

export default links;
