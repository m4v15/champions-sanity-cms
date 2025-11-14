import { Button } from "@/components";
import { getContent } from "@sanity/sanity.query";

import Image from 'next/image'

import Link from "next/link";
import { AppConfig } from "@/utils/AppConfig";
import { PortableText, PortableTextComponents } from "@portabletext/react";

import Happy from '@root/public/happyhour.jpeg'
import Happy2 from '@root/public/happyhour2.jpeg'
import g4 from '@root/public/g4.jpeg'
import dinner from '@root/public/dinner.jpeg'

const portableTextComponents: PortableTextComponents = {
  marks: {
    strong: ({ children }) => <span className="font-semibold">{children}</span>,
  },
  block: {
    h3: ({ children }) => <span className="mt-5 font-semibold text-xl">{children}</span>,
  }
};

const About = async () => {
  const [content] = await getContent()

  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="mt-16 sm:mt-32 mx-auto max-w-2xl lg:max-w-5xl">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-auto lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={g4}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={dinner}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={Happy}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={Happy2}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-4">
            <div className="mt-6 mb-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              {content && (
                <PortableText
                  value={content.aboutText || []}
                  components={portableTextComponents}
                />
              )}
            </div>
            <Link
              href={AppConfig.sign_up_link}
              rel="noopener noreferrer"
              target="_blank"
              className="pt-10"
            >
              <Button text="Become A Champion" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
