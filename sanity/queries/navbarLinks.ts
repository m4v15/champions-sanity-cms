import { groq } from "next-sanity";

const navbarLinksQuery = groq`
  *[_type == "navbarLink"][0] {
    title,
    "slug": blogPost->slug.current
  }
`;

export default navbarLinksQuery;
