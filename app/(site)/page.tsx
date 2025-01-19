import { About, Hero } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-screen-lg">
        <About />
      </div>
    </>
  );
}
