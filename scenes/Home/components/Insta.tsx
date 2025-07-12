"use client";
import { useState, useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

type PropsType = {
  urls: Array<string>,
};

const Insta = ({urls}: PropsType) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && urls && urls.length > 0 && (
              <div className=" ">
          <h1 className="font-header pb-10 text-center lg:text-left text-pretty text-4xl font-semibold tracking-tight text-gray-900">
            Latest Posts
          </h1>
          <div className="flex flex-col items-center lg:items-start lg:flex-row justify-around">
            {urls.map((url, index) => (
            <InstagramEmbed
              key={index}
              url={url}
              width={328}
            />))}
          </div>
        </div>


    )
  );
};

export default Insta;
