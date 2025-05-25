import { Hero, Insta, Substack } from "./components";
import Faqs from "@/components/Faqs";

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <Hero />
      <Substack />
      <Insta />
      <Faqs />
    </div>
  );
};

export default Home;
