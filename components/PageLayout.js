import Head from "next/head";

export const siteTitle = "A.J KANELL | PLAY-BY-PLAY BROADCASTER";

export default function PageLayout({ children, title }) {
  return (
    <div className=" font-norm">
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
      <main className="flex flex-col items-center min-h-screen pt-12 bg-gray-50 ">
        {children}
      </main>
    </div>
  );
}
