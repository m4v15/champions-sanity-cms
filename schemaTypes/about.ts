import { defineField } from "sanity";

const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
        name: "aboutText",
        title: "About Text",
        type: "array",
        of: [{ type: "block" }],
      })
  ],
};

export default about;