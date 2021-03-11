export default function Radio({ title }) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="">
        <iframe
          title="Basketball Play-by-Play by A.J. Kanell"
          width="100%"
          height="200"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F978723850&amp;show_artwork=true&amp;maxwidth=940&amp;maxheight=1000&amp;dnt=1"
        ></iframe>
      </div>
    </div>
  );
}
