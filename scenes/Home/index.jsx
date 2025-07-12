import { Faqs, Hero, Insta, Substack } from "./components";
import { getLinks } from "@/sanity/sanity.query";


const Home = async () => {
  const links = await getLinks();
  const insta = links?.filter((link) => link?.type?.includes("insta"));
  const urls = insta.map((link) => link.url).slice(0, 3);
  
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white grid grid-rows-[90vh_auto_auto] gap-10  pt-8 lg:pt-0 pb-14 lg:pb-[14rem] px-2 lg:px-14">
        <Hero />
        <Insta urls={urls} />
        <Faqs />
      </div>
      <Substack />
    </>
  );
};

export default Home;
