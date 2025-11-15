import { defineQuery } from "next-sanity";

const featuredBlogPosts = defineQuery(`
  *[_type == "blogPost" && published == true && featured == true] 
  | order(publishDate desc) 
  [0...3] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishDate,
    categories[]->{ name, slug, color }
  }
`)

export default featuredBlogPosts;