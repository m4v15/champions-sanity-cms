import { Faqs, FeaturedPosts, Hero, Insta, Substack } from "./components";
import { getFeaturedBlogPosts, getLinks } from "@sanity/sanity.query";


const Home = async () => {
  const links = await getLinks();
  const insta = links?.filter((link) => link?.type?.includes("insta"));
  const urls = insta.map((link) => link.url).filter((url): url is string => url !== null).slice(0, 3);
  const featuredPosts = await getFeaturedBlogPosts();

  return (
    <>
      <div className="relative isolate overflow-hidden bg-white flex flex-col gap-10  pt-8 lg:pt-0 pb-14 lg:pb-[14rem] px-2 lg:px-14">
        <Hero />
        <FeaturedPosts posts={featuredPosts} />
        <Insta urls={urls} />
        <Faqs />
      </div>
      <Substack />
    </>
  );
};

export default Home;
