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
      type: "string",
      description: "Money raised so far - include the currency symbol",
    }),
    defineField({
      name: "target",
      title: "Target",
      type: "string",
      description: "Fund target include the currency symbol",
    }),
  ],
};

export default funds;
