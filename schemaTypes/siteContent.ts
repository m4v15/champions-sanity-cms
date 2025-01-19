import { defineField } from "sanity";

const content = {
  name: "siteContent",
  title: "Site Content",
  type: "document",
  fields: [
    defineField({
      name: "contentName",
      title: "Content Name",
      type: "string",
      description: "The name of this content - DO NOT CHANGE",
    }),
    defineField({
      name: "landingTitle",
      title: "Landing Title",
      type: "string",
      description: "The main text you see on the landing page",
    }),
    defineField({
      name: "landingSubtitle",
      title: "Landing Subtitle",
      type: "string",
      description: "The subtitle you see on the landing page",
    }),
    defineField({
      name: "aboutText",
      title: "About Text",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
};

export default content;
