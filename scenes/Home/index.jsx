import { Hero, Insta, Substack } from "./components";

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white grid grid-rows-[100vh_auto_auto] gap-1">
      <Hero />
      <Substack />
      <Insta />
    </div>
  );
};

export default Home;
