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
      <main className="flex flex-col items-center justify-center min-h-screen lg:-mt-28 -mt-32">
        {children}
      </main>
    </div>
  );
}
