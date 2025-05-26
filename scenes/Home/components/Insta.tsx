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
        <div className=" ">
          <h1 className="font-header pb-10 text-center lg:text-left text-pretty text-4xl font-semibold tracking-tight text-gray-900">
            Latest Posts
          </h1>

          <div className="flex flex-col items-center lg:items-start lg:flex-row justify-around">
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
