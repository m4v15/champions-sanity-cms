"use client";

import Link from "next/link";
import { getLinks } from "@/sanity/sanity.query";

import { Button, Section, ExternalLink } from "@/components";
import { useSanity } from "@/hooks";

export default function Links() {
  const { data: links, loading } = useSanity(getLinks);

  if (loading) {
    return <div>Loading Page</div>;
  }

  const projects = links?.filter((link) => link?.type?.includes("project"));
  const media = links?.filter((link) => link?.type?.includes("media"));

  return (
    <div className="text-gray-600 antialiased">
      <Section>
        <div className="mt-5 flex flex-col items-center text-gray-950">
          <div className="w-full text-left flex flex-col">
            <div className="text-2xl font-bold">
              Other Projects we are part of
            </div>
            {projects &&
              projects.map(({ _id, url, text }) => {
                return url && text &&
                  (
                    <ExternalLink
                      key={_id}
                      url={url}
                      text={text}
                    />
                  );
              })}
            <br />
            <div className="text-2xl font-bold">
              Gaza Fundraising Coverage in the Media
            </div>
            {media &&
              media.map(({ _id, url, text }) => {
                return url && text &&
                  (
                    <ExternalLink
                      key={_id}
                      url={url}
                      text={text}
                    />
                  );
              })}
          </div>
          <br />
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
    </div>
  );
}
