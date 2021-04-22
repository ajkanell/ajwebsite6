import Image from "next/image";
import Layout from "../components/Layout";
import TV from "../components/TV";
import Fade from "react-reveal/Fade";

const navigation = {
  social: [
    {
      name: "Youtube",
      href: "https://www.youtube.com/user/KanellNewhouse",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ajkanell",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          {...props}
          fill="currentColor"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ajkanell",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};
export default function Home({ posts = [] }) {
  return (
    <div className="relative bg-gray-50 overflow-hidden min-h-screen">
      <>
        <main className="mt-20 mx-auto sm:max-w-2xl px-4 sm:mt-16">
          <div className="sm:text-left text-center">
            <div className="flex sm:flex-row flex-col justify-between">
              <div className="sm:hidden block ">
                <Image
                  src="/images/home.png"
                  alt="A.J Kanell"
                  width={146}
                  height={146}
                />
              </div>
              <div className="mt-2">
                <Fade cascade>
                  <h1 className="text-8xl text-gray-900 sm:text-9xl">
                    A.J. KANELL
                  </h1>
                  <p className="   text-gray-900 text-xl">
                    PLAY-BY-PLAY BROADCASTER
                  </p>
                </Fade>
                <div className="mt-4 flex justify-center space-x-6 sm:hidden">
                  {navigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-900 hover:text-gray-500"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
              <Fade>
                <div className="sm:block hidden pt-2">
                  <Image
                    src="/images/home.png"
                    alt="A.J Kanell"
                    width={146}
                    height={146}
                  />
                </div>
              </Fade>
            </div>
          </div>
          <div className=" flex justify-center mt-8">
            <TV key={posts[0].sys.id} src={posts[0].fields.youtubeLink} />
          </div>
        </main>
      </>
    </div>
  );
}

// get static props
export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetch all entries of content_type `RESUME`
  const posts = await client
    .getEntries({ content_type: "homePageVideo" })
    .then((response) => response.items);

  return {
    props: {
      posts,
    },
  };
}
