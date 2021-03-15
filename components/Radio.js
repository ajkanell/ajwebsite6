export default function Radio({ title, src }) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="pt-2">
        <iframe
          title="Basketball Play-by-Play by A.J. Kanell"
          width="100%"
          height="200"
          scrolling="no"
          frameborder="no"
          src={src}
        ></iframe>
      </div>
    </div>
  );
}
