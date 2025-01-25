import { defineField } from "sanity";

const funds = {
  name: "funds",
  title: "Funds",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title to display on the card",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
      description: "The URL of the fund",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "imageUrl",
      title: "Image URL",
      type: "string",
      description:
        "The URL of the image to display on the card - right click the image on the fund website and copy image address",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "raised",
      title: "Money Raised",
      type: "number",
      description: "Money raised so far",
    }),
    defineField({
      name: "target",
      title: "Target",
      type: "number",
      description: "Fund target",
    }),
    defineField({
      name: "currency",
      title: "Currency Symbol",
      type: "string",
    }),
  ],
  orderings: [
    {
      title: "Raised Lowest to Highest",
      name: "raisedAsc",
      by: [{ field: "raised", direction: "asc" }],
    },
  ],
};

export default funds;
