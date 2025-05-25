"use client";
import { useState, useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

const Insta = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-2">
          <h1 className="font-header pb-10 text-center lg:text-left text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Latest Posts
          </h1>

          <div className="max-w-7xl mx-auto flex flex-col items-center lg:items-start lg:flex-row justify-between pb-24">
            <InstagramEmbed
              url="https://www.instagram.com/p/DH-9ZXYAvL1"
              width={328}
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/DInNPwmNDzx/"
              width={328}
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/DIfQaBMtta0/"
              width={328}
            />
          </div>
        </div>
        <div className="bg-theme-white-100 flex justify-center">
          <div className="w-[75dvw] lg:w-auto p-3 lg:p-0 lg:max-w-7xl flex flex-col lg:flex-row gap-2 items-center text-center lg:text-left justify-center">
            <p className="lg:mb-10 text-pretty text-md font-medium text-gray-500 sm:text-lg/8">
              Join our newsletter to hear about the families, events we run to
              support them, and news from our champions
            </p>
            <iframe
              src="https://gazachampions.substack.com/embed"
              width="480"
              height="150"
            ></iframe>
          </div>
        </div>
      </>
    )
  );
};

export default Insta;
