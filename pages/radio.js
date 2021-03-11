import PageLayout from "../components/PageLayout";
import Radio from "../components/Radio";

export default function TV() {
  return (
    <PageLayout title="RADIO | A.J. Kanell">
      <h1 className="font-bold text-4xl mb-12">RADIO</h1>
      <div className=" lg:w-1/2 w-4/5 space-y-20">
        <Radio title="rasio tiutle" />
        <Radio title="rasio tiutle" />
      </div>
    </PageLayout>
  );
}
