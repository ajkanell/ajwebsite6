import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout title="A.J. KANELL | PLAY-BY-PLAY BROADCASTER">
        <Image
          src="/images/home.png"
          alt="A.J Kanell"
          width={166}
          height={166}
        />

        <h1 className=" mt-8 text-center text-8xl lg:text-9xl ">A.J. KANELL</h1>

        <h3 className="text-xl lg:text-2xl">
          PLAY-BY-PLAY BROADCASTER - ALBANY, NY
        </h3>

        <div className="mt-8 font-norm">
          <Link href="/contact">
            <a className="font-semibold px-4 py-3 flex  text-black border-4  border-black shadow-offset-black">
              CONTACT ME
            </a>
          </Link>
        </div>
      </Layout>
    </>
  );
}
