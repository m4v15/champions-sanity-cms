import { defineQuery } from "next-sanity";

const relatedPosts = defineQuery(
  `*[_type == "blogPost" && published == true && _id != $postId && count((categories[]._ref)[@ in $categoryIds]) > 0] | order(publishDate desc) [0...3] {
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

export default relatedPosts;
