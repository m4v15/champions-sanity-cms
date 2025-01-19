import { PortableTextBlock } from "sanity";

export type SiteContentType = {
  _id: string;
  aboutText: PortableTextBlock[];
  landingTitle: string;
  landingSubtitle: string;
};

type LinkType = "project" | "media";

export type SanityLinksType = {
  _id: string;
  text: string;
  url: string;
  type: [LinkType];
};
