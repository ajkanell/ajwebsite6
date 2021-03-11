export default TV = () => {
  return (
    <>
      <h3>video title</h3>
      <div className="overflow-hidden pb-32 relative h-0">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Vn9DgBBIqgg"
          frameborder="0"
          className="left-0 top-0 h-full w-full absolute"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};
