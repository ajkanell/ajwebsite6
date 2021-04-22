import Head from "next/head";

export const siteTitle = "A.J KANELL | PLAY-BY-PLAY BROADCASTER";

export default function Layout({ children, title }) {
  return (
    <div className=" ">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta
          name="description"
          content="View a selection of A.J. Kanell’s broadcast work - Learn about A.J.‘s wide-ranging experience - Get in touch with A.J."
        />
        <meta property="og:image" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="flex justify-center items-center min-h-screen sm:mb-12 -mt-20 sm:-mt-12">
        {children}
      </main>
    </div>
  );
}
