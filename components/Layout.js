import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const siteTitle = "A.J KANELL | PLAY-BY-PLAY BROADCASTER";

export default function Layout({ children, title }) {
  return (
    <div className=" ">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content="A.J Kanell's personal website." />
        <meta property="og:image" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen xl:-mt-28 lg:-mt-10 -mt-28">
        {children}
      </main>
    </div>
  );
}
