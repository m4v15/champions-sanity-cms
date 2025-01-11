import { PortableTextBlock } from "sanity";

export type SiteContentType = {
  _id: string,
  aboutText: PortableTextBlock[],
  landingTitle: string,
  landingSubtitle: string
};