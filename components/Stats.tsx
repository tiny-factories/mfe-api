import Link from "next/link";

export default function Stats({ data }) {
  const sortedData = data
    .sort((a, b) => b.measuredAt - a.measuredAt)
    .map((item) => ({
      measurement: [item.measurement],
    }));

  const dataDecades = [];

  dataDecades.push({ mostRecent: data[0] });
  dataDecades.push({ lastYear: data[1] });
  dataDecades.push({ lastDecade: data[9] });

  return (
    <div className="col-span-4 md:col-span-1">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-4 rounded border-2 p-3 items-center">
          <div className=" ">
            {dataDecades[0].mostRecent.measuredAt.split("T")[0]}
          </div>
          <div className="">{dataDecades[0].mostRecent.measurement}</div>
        </div>

        <div className="col-span-1 md:col-span-4 rounded border-2 p-3 items-center">
          {" "}
          <div className="">
            {dataDecades[1].lastYear.measuredAt.split("T")[0]}
          </div>
          <div className="">{dataDecades[1].lastYear.measurement}</div>
        </div>

        <div className="col-span-1 md:col-span-4 rounded border-2 p-3 items-center">
          {" "}
          <div className="">
            {dataDecades[2].lastDecade.measuredAt.split("T")[0]}
          </div>
          <div className="">{dataDecades[2].lastDecade.measurement}</div>
        </div>
        <div className="col-span-1 md:col-span-4 rounded border-2 p-3 items-center">
          {" "}
          <div className="">Treend</div>
          <div className="">???</div>
        </div>
      </div>
    </div>
  );
}
