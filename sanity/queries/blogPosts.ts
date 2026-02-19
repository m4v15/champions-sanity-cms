import { defineQuery } from "next-sanity";

const blogPosts = defineQuery(
  `*[_type == "blogPost" && published == true] | order(publishDate desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage {
      asset->{
        _id,
        url
      },
      alt
    },
    categories[]->{
      _id,
      name,
      slug,
      color
    },
    publishDate,
    featured
  }`,
);

export default blogPosts;