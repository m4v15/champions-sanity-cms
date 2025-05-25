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
        <div className="mx-auto w-[75vw] px-6 pb-24 pt-1 sm:pb-32 lg:px-8 lg:py-2">
          <h1 className="font-header pb-10 text-center lg:text-left text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Latest Posts
          </h1>

          <div className="max-w-7xl flex flex-col items-center lg:items-start lg:flex-row justify-around pb-24">
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

      </>
    )
  );
};

export default Insta;
