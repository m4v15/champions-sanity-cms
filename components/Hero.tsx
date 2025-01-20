import { Button } from "@/components";
import Link from "next/link";
import { getContent } from "@/sanity/sanity.query";

const Hero = async () => {
  const content = await getContent();

  return (
    <div className="bg-hero bg-center bg-no-repeat bg-cover h-hero max-w-hero mx-auto w-full">
      <header className="text-left mx-auto max-w-screen-lg px-3 pt-8">
        <h1 className="whitespace-pre-line text-2xl font-bold leading-hero text-gray-100">
          <span className="text-3xl text-gray-900">
            {content && content[0] && content[0].landingTitle}
          </span>
        </h1>
        <div className="mb-16 mt-4 text-xl text-gray-100">
          {content && content[0] && content[0].landingSubtitle}
        </div>

        <Link href="/volunteer">
          <Button text="Volunteer With Us" />
        </Link>

        <br />
        <br />
        <Link href="/funds">
          <Button text="See the funds we're supporting" />
        </Link>
      </header>
    </div>
  );
};

export default Hero;
