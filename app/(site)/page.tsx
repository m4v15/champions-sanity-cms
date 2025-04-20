import Link from "next/link";

const Landing = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="flex flex-col-reverse lg:flex-row mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 lg:mx-0 lg:shrink-0">
          <h1 className="font-header text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            A global community of allies directly supporting families in Gaza
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            We are a mutual aid network rooted in friendship and collective action directly connected with families in Gaza and with each other. As champions for their fundraising efforts, we support their daily survival while building meaningful relationships across borders.

          </p>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Through virtual gatherings, strategy sessions, and community events, we come together to share ideas, uplift one another, and deepen our commitment to solidarity. This is more than a fundraising effort—it’s a movement of care, connection, and shared resilience.

          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/volunteer"
              className="rounded-md bg-theme-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-theme-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-red-600"
            >
              Join us
            </Link>
            <Link href="/funds" className="text-sm/6 font-semibold text-gray-900 border-theme-green-500">
              See the funds we&apos;re supporting  <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="relative rounded grow overflow-hidden h-[25vh] lg:h-auto">
          <div className="bg-hero w-[400%] bg-contain h-full bg-repeat-x lg:animate-scroll absolute">
          </div>
        </div>
      </div>
    </div >
  )
}

export default Landing
