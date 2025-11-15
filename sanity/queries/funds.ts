import { defineQuery } from "next-sanity";

const funds = defineQuery(
  `*[_type == "funds"]{
    _id,
    title,
    url,
    imageUrl,
    raised,
    target,
    currency
    }`,
);

export default funds;