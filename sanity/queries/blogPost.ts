import { defineQuery } from "next-sanity";

const blogPostBySlug = defineQuery(
  `*[_type == "blogPost" && slug.current == $slug && published == true][0] {
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
    content,
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

export default blogPostBySlug;
