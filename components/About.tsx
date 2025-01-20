"use client";

import { Section, Button } from "@/components";
import { getContent } from "@/sanity/sanity.query";

import { useSanity } from "@/hooks";

import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const portableTextComponents: PortableTextComponents = {
  marks: {
    strong: ({ children }) => <span className="font-semibold">{children}</span>,
  },
};

const About = () => {
  const { data, loading } = useSanity(getContent);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <Section>
      <div className="mt-5 flex flex-col items-center text-gray-950">
        <div className="w-full text-left font-light">
          {data && data[0] && (
            <PortableText
              value={data[0].aboutText || []}
              components={portableTextComponents}
            />
          )}
        </div>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdQBwxbU97VXa9Phi4ACSrQMfIJNp6ZFPfQvhAjJ2J1ekoMJg/viewform"
          rel="noopener noreferrer"
          target="_blank"
          className="pt-10"
        >
          <Button text="Become A Champion" />
        </Link>
      </div>
    </Section>
  );
};

export default About;
