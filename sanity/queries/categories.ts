import { defineQuery } from "next-sanity";

const categories = defineQuery(
  `*[_type == "category"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    color
  }`,
);

export default categories;