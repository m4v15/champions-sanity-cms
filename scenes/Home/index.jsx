import { Faqs, Hero, Insta, Substack } from "./components";

const Home = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white grid grid-rows-[100vh_auto_auto] gap-10  pb-14 lg:pb-[14rem] px-2 lg:px-14">
        <Hero />
        <Insta />
        <Faqs />
      </div>
      <Substack />
    </>
  );
};

export default Home;
