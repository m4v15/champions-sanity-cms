
import Link from "next/link";
import { getLinks } from "@/sanity/sanity.query";
import { AppConfig } from "@/utils/AppConfig";
import { Button, Section, ExternalLink } from "@/components";

export default async function Links() {
  const links = await getLinks()


  const projects = links?.filter((link) => link?.type?.includes("project"));
  const media = links?.filter((link) => link?.type?.includes("media"));

  return (
    <div className="antialiased">
      <Section>
        <div className="mt-5 flex flex-col items-center">
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
            href={AppConfig.sign_up_link}
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
