import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout title="A.J. KANELL | PLAY-BY-PLAY BROADCASTER">
        <div className="rounded-full"></div>

        <h1 className="mt-5 text-center text-7xl font-bold">A.J. KANELL</h1>

        <h3 className="mt-3 ">PLAY-BY-PLAY BROADCASTER - ALBANY, NY</h3>

        <div className="mt-8">
          <Link href="/contact">
            <a className="px-4 py-3 flex bg-green-300 text-black border-2 border-black shadow-offset-black">
              CONTACT ME
            </a>
          </Link>
        </div>
      </Layout>
    </>
  );
}
