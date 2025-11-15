import { defineQuery } from "next-sanity";

const content = defineQuery(
  `*[_type == "siteContent" && contentName == "Main Page"]{
    _id,
    aboutText,
    landingTitle,
    landingSubtitle
    }`,
);

export default content;