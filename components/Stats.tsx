import Link from "next/link";

export default function Stats({ data }) {
  const sortedData = data;
  const dataDecades = [];

  dataDecades.push({ mostRecent: sortedData[0] });
  dataDecades.push({ lastYear: sortedData[1] });
  dataDecades.push({ lastDecade: sortedData[9] });

  return (
    <div className="col-span-4 md:col-span-1">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-4 rounded border-2 p-3 items-center">
          <div className=" ">
            {dataDecades[0].mostRecent.measuredAt.split("T")[0]}
            {/* REFACTOR: Need to clean this up with new logic above so we don't need to reference the array[0] location */}
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
