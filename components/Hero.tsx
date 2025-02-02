import { Button } from "@/components";
import Link from "next/link";
import { getContent } from "@/sanity/sanity.query";

const Hero = async () => {
  const [content] = await getContent();

  return (
    <div className="bg-hero bg-center bg-no-repeat bg-cover h-hero max-w-hero mx-auto w-full grid grid-rows-[1fr,auto]">
      <header className="p-10 row-start-2 text-left bg-green mx-auto flex flex-col gap-3 bg-theme-green-transparent  text-light justify-end">
        <h1 className="whitespace-pre-line leading-hero">
          <span className="text-3xl font-header">
            {content && content.landingTitle}
          </span>
        </h1>
        <div className="text-xl">
          {content && content.landingSubtitle}
        </div>
        <Link href="/volunteer" className="self-end">
          <Button text="Volunteer With Us" />
        </Link>
        <Link href="/funds" className="self-end">
          <Button text="See the funds we're supporting" />
        </Link>
      </header>
    </div >
  );
};

export default Hero;
