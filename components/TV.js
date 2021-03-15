export default function TV({ title, src }) {
  return (
    <>
      <h3 className="mb-4 sm:pt-10 pt-8">{title}</h3>
      <div
        className="sm:hidden"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          height: 0,
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src={src}
          allowFullScreen
          style={{ border: 0 }}
          sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
        />
      </div>
      <div className="hidden sm:block">
        <iframe
          width="640"
          height="360"
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </>
  );
}
