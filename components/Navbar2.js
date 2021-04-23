import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Ajsvg from "../components/ajsvg";

export default function Navbar2() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="font-norm bg-gray-800 text-white ">
        <div className=" lg:max-w-5xl  relative flex flex-wrap items-center py-4 px-8 mx-auto justify-between ">
          <div className="w-full lg:w-auto flex items-center justify-between ">
            <Link href="/">
              <a
                onClick={() => setNavbarOpen(false)}
                className=" font-bold leading-relaxed w-20  whitespace-no-wrap uppercase -mb-16 pb-2 "
              >
                <Ajsvg />
              </a>
            </Link>
            <button
              className=" cursor-pointer text-2xl flex justify-end leading-none pl-3 py-1 lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:space-x-8">
              <li className="nav-item">
                <Link href="/tv">
                  <a
                    onClick={() => setNavbarOpen(false)}
                    className="sm:mt-0 mt-2 py-2 flex items-center text-sm  font-bold leading-snug  hover:opacity-75"
                  >
                    <span className="">TV</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/radio">
                  <a
                    onClick={() => setNavbarOpen(false)}
                    className=" py-2 flex items-center text-sm transition-opacity font-bold leading-snug  hover:opacity-75"
                  >
                    <span className="">Radio</span>
                  </a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <a
                  className=" py-2 flex items-center text-sm  font-bold leading-snug  hover:opacity-75"
                  href="https://sticktosports.medium.com"
                  target="_blank"
                >
                  <span className="">Writing</span>
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className=" py-2 flex items-center text-sm  font-bold leading-snug transition-opacity hover:opacity-75"
                  href="https://podcasts.apple.com/us/podcast/coaches-4-change/id1536640509"
                  target="_blank"
                >
                  <span className="">C4C Podcast</span>
                </a>
              </li>
              <li className="nav-item">
                <Link href="/resume">
                  <a
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className=" py-2 flex items-center text-sm  font-bold leading-snug transition-opacity hover:opacity-75"
                  >
                    <span className="">Resume</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className=" py-2 px-3 flex items-center text-sm sm:mt-0 mt-2 font-bold leading-snug transition-opacity	  hover:opacity-75 bg-blue-500"
                  >
                    <span className="">Contact Me</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
