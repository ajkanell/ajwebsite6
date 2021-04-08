import PageLayout from "../components/PageLayout";
import Radio from "../components/Radio";

export default function RadioPage({ posts = [] }) {
  return (
    <PageLayout title="RADIO | A.J. Kanell">
      <h1 className="text-6xl font-sans mb-12">RADIO</h1>
      <div className=" lg:w-1/2 w-full lg:px-0 px-6 space-y-20">
        {posts.map((post) => (
          <Radio
            key={post.sys.id}
            src={post.fields.soundcloudLink}
            title={post.fields.title}
          />
        ))}
      </div>
    </PageLayout>
  );
}

// get static props
export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetch all entries of content_type `radio`
  const posts = await client
    .getEntries({ content_type: "radio", order: "-fields.priority" })
    .then((response) => response.items);

  return {
    props: {
      posts,
    },
  };
}
