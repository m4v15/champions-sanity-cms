import Link from 'next/link';

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
      className="italic underline decoration-pink-600 hover:decoration-pink-200 my-4"
    >
      {props.text}
    </Link>
  )
};
