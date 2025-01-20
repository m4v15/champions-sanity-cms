import { defineQuery } from "next-sanity";
import client from "./sanity.client";

export const contentQuery = defineQuery(
  `*[_type == "siteContent" && contentName == "Main Page"]{
    _id,
    aboutText,
    landingTitle,
    landingSubtitle
    }`,
);

export const linksQuery = defineQuery(
  `*[_type == "links"]{
    _id,
    text,
    url,
    type
    }`,
);

export const getContent = async () =>
  await client.fetch(contentQuery, undefined, { cache: "no-store" });

export const getLinks = async () =>
  await client.fetch(linksQuery, undefined, { cache: "no-store" });
