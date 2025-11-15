import { defineQuery } from "next-sanity";

const faqs = defineQuery(
  `*[_type == "faqs" && hide != true] | order(order, asc) {
    _id,
    question,
    answer,
    hide
    }`,
);

export default faqs;