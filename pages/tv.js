import PageLayout from "../components/PageLayout";

export default function TV() {
  return (
    <PageLayout title="TV | A.J. Kanell">
      <h1>TV</h1>
      <h3>Tv title for video</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Vn9DgBBIqgg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </PageLayout>
  );
}
