import Link from "next/link";
import { useState } from "react";
// import X from "./svg/X";
// import Menu from "../components/svg/Menu";

export default function Navbar() {
  const [menuOn, setMenuOn] = useState(false);

  const menuSwitch = () => {
    setMenuOn(!menuOn);
  };

  // function showMenu(menu) {
  //   if (menu) {
  //     return <X />;
  //   }
  //   return <Menu />;
  // }

  return (
    <div className="">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={menuSwitch}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              {/* <showMenu showMenu={menuOn} /> */}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">A.J</div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:block sm:ml-6 tracking-wide">
              <div className="flex space-x-4">
                <Link href="/tv">
                  <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    TV
                  </a>
                </Link>
                <Link href="/radio">
                  <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Radio
                  </a>
                </Link>
                <a
                  href="https://sticktosports.medium.com/"
                  target="_blank"
                  className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Writing
                </a>
                <a
                  href="https://podcasts.apple.com/us/podcast/coaches-4-change/id1536640509"
                  target="_blank"
                  className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  C4C Podcast
                </a>
                <Link href="/resume">
                  <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Resume
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact Me
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
          <Link href="/tv">
            <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              TV
            </a>
          </Link>
          <Link href="/radio">
            <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Radio
            </a>
          </Link>
          <a
            href="https://sticktosports.medium.com/"
            target="_blank"
            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Writing
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/coaches-4-change/id1536640509"
            target="_blank"
            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            C4C Podcast
          </a>
          <Link href="/resume">
            <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Resume
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact Me
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
