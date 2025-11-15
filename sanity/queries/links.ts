import { defineQuery } from "next-sanity";

const links = defineQuery(
  `*[_type == "links"]{
    _id,
    text,
    url,
    type
    }`,
);

export default links;
