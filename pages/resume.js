import Image from "next/image";
import PageLayout from "../components/PageLayout";
import { HiDownload } from "react-icons/hi";

export default function Resume({ posts }) {
  console.log(`https:${posts[0].fields.resumePic.fields.file.url}`);
  return (
    <>
      <PageLayout title="RESUME | A.J KANELL">
        <h1 className="text-6xl font-sans mb-8">RESUME</h1>
        {/* <div className="flex items-center space-x-1 font-semibold mb-2">
          <h3>Download</h3>
          <div className="w-6 h-6 pt-1">
            <HiDownload />
          </div>
        </div> */}
        <div className="shadow-2xl px-4 lg:px-0">
          <Image
            src={`https:${posts[0].fields.resumePic.fields.file.url}`}
            alt="Picture of the author"
            width={900}
            height={1200}
            className=""
          />
        </div>
      </PageLayout>
    </>
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
    .getEntries({ content_type: "resume" })
    .then((response) => response.items);

  return {
    props: {
      posts,
    },
  };
}
