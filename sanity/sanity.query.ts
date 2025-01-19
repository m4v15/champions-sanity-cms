import { groq } from 'next-sanity';
import client from './sanity.client';

export async function getContent() {
  return client.fetch(
    groq`*[_type == "siteContent" && contentName == "Main Page"]{
      _id,
      aboutText,
      landingTitle,
      landingSubtitle
    }`
  );
}


export async function getLinks() {
    return client.fetch(
        groq`*[_type == "links"]{
        _id,
        text,
        url,
        type
        }`
    )
}