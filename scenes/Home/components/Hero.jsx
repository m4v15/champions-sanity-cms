import Link from "next/link";

const Hero = () => (
  <div className="mx-auto max-w-7xl px-6 py-6 grid gap-6 lg:grid-cols-2 lg:h-[80vh] lg:py-10 lg:gap-3">
    <h1 className="font-header text-pretty text-3xl text-center font-semibold tracking-tight text-gray-900 lg:text-5xl lg:text-left">
      A global community of allies directly supporting families in Gaza
    </h1>
    <div className="relative rounded grow overflow-hidden h-[25vh] lg:h-full lg:row-start-1 lg:row-span-3 lg:col-start-2">
      <div className="bg-hero w-[400%] bg-contain h-full bg-repeat-x animate-scroll absolute"></div>
    </div>
    <div className="m-auto flex items-center justify-evenly gap-x-6 lg:row-start-3 lg:m-0 lg:justify-start">
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdQBwxbU97VXa9Phi4ACSrQMfIJNp6ZFPfQvhAjJ2J1ekoMJg/viewform"
        className="rounded-md bg-theme-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-theme-red-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-theme-red-600"
      >
        Join us
      </Link>
      <Link
        href="/funds"
        className="text-sm/6 font-semibold text-gray-900 border-theme-green-500"
      >
        See the funds we&apos;re supporting <span aria-hidden="true">→</span>
      </Link>
    </div>
    <div className="mx-auto max-w-2xl grid gap-2 lg:mx-0 lg:shrink-0">
      <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
        We are a mutual aid network rooted in friendship and collective action
        directly connected with families in Gaza and with each other. As
        champions for their fundraising efforts, we support their daily survival
        while building meaningful relationships across borders.
      </p>
      <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
        Through virtual gatherings, strategy sessions, and community events, we
        come together to share ideas, uplift one another, and deepen our
        commitment to solidarity. This is more than a fundraising effort—it’s a
        movement of care, connection, and shared resilience.
      </p>
    </div>
  </div>
);

export default Hero;
