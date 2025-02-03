import { Section, Button } from "@/components";
import { getContent } from "@/sanity/sanity.query";

import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";

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
    <Section>
      <div className="flex flex-col items-center">
        <div className="w-full text-left font-light flex flex-col gap-2">
          {content && (
            <PortableText
              value={content.aboutText || []}
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
