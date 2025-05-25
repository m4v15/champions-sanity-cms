import { Hero, Insta } from "./components";
import Faqs from "@/components/Faqs";

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <Hero />
      <Faqs />
      <Insta />
    </div>
  );
};

export default Home;
