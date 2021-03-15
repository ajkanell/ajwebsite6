import PageLayout from "../components/PageLayout";
import TV from "../components/TV";

export default function tv({ posts = [] }) {
  console.log({ posts });
  return (
    <PageLayout title="TV | A.J. Kanell">
      <h1 className="mb-4 text-6xl font-sans">Television</h1>

      <div className="lg:text-center text-left">
        {posts.map((post) => (
          <TV
            key={post.sys.id}
            src={post.fields.youtubeLink}
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

  // Fetch all entries of content_type `tv`
  const posts = await client
    .getEntries({ content_type: "tv" })
    .then((response) => response.items);

  return {
    props: {
      posts,
    },
  };
}
