import Link from "next/link";

type ExternalLinkProps = {
  url: string;
  text: string;
};

export default function ExternalLink(props: ExternalLinkProps) {
  return (
    <Link
      href={props.url}
      rel="noopener noreferrer"
      target="_blank"
      className="italic underline decoration-theme-red-800 hover:decoration-theme-red-200 my-4"
    >
      {props.text}
    </Link>
  );
}
