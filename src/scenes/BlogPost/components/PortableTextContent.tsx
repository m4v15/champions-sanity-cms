import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { PortableTextBlock } from "@portabletext/types";

interface PortableTextContentProps {
  content: PortableTextBlock[];
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: { _ref: string }; alt?: string; caption?: string } }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      // Extract image ID from reference
      const imageId = value.asset._ref
        .replace("image-", "")
        .replace(/-(\w+)$/, ".$1");

      // Construct Sanity CDN URL
      const imageUrl = `https://cdn.sanity.io/images/whsvh8u8/production/${imageId}`;

      return (
        <figure className="my-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={value.alt || value.caption || ""}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-600">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mb-4 mt-8 text-3xl font-bold">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mb-3 mt-6 text-2xl font-bold">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => <p className="mb-4">{children}</p>,
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-theme-green-900 pl-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string } }) => {
      const rel = value?.href && !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value?.href}
          rel={rel}
          className="text-theme-green-900 underline hover:no-underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
  },
};

export default function PortableTextContent({
  content,
}: PortableTextContentProps) {
  if (!content) {
    return null;
  }

  return <PortableText value={content} components={portableTextComponents} />;
}
