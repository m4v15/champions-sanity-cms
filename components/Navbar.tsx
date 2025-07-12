"use client";

import Link from "next/link";
import {useMediaQuery} from '@react-hook/media-query'
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type INavbarProps = {
  links: Array<{
    route: string;
    display: string;
    external?: boolean;
  }>;
};

const Logo = ({height = 50}) => {
  return (
    <span
      className={"inline-flex items-center hover:scale-105 mb-3 md:mb-0"}
    >
      <Image
        src={"logo/SVG/transparent-logo-red.svg"}
        alt="The logo for Gaza Champions: Four hands holding each others wrists in a square"
        width={height}
        height={height}
      />
      <div className="flex flex-col font-header text-theme-red-800 text-xl ml-2 font-bold">
        <span>GAZA</span>
        <span>CHAMPIONS</span>
      </div>
    </span>
  );
};

type linkPropsType = {
  href: string;
  className: string;
  rel?: string;
  target?: string;
}

const MenuIcon = ({ showNav, toggleNav }) => (
  <button
    className="z-99 fixed right-10 top-0 p-2 md:hidden text-gray-900 focus:outline-none"
    onClick={toggleNav}
    aria-label="Toggle navigation" 
  >
    {showNav ? (
        <svg
        className={`h-6 w-6`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
      ): (
        <Image
        src={"logo/SVG/transparent-logo-red.svg"}
        alt="The logo for Gaza Champions: Four hands holding each others wrists in a square"
        width={30}
        height={30}
        />)}
  </button>
);

const NavBar = (props: INavbarProps) => {
  const isMobile = useMediaQuery('(max-width: 480px)')
  const [showNav, setShowNav] = useState(true);
  const toggleNav = () => setShowNav(!showNav);
  const pathName = usePathname();


  return (<>
    {isMobile && <MenuIcon showNav={showNav} toggleNav={toggleNav} />}
    {showNav && (
    <div className="border-theme-red-800 mx-auto w-full border-b bg-background px-3 py-6 sticky top-0 font-header md:px-12 z-50">
      <div className="m-auto flex flex-row flex-wrap items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className="navbar flex items-center flex-wrap text-xl font-bold">
            {props.links.map((link) => {
              const textColour = pathName.includes(link.route) ? "text-theme-red-800" : "text-dark";
              const linkProps: linkPropsType = {
                href: link.route,
                className: `${textColour} hover:text-theme-red-800 m-2 last:mr-4`
              }
              if (link.external) {
                linkProps.rel = "noopener noreferrer"
                linkProps.target = "_blank"
              }
              return (
                <li key={link.route}>
                  <Link
                    {...linkProps}
                  >
                    {link.display}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="https://www.instagram.com/gaza.champions/"
                className="hover:text-theme-red-800"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  className="size-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div >
  )}
  </>)
};

export default NavBar;
