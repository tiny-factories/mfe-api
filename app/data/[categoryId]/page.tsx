import DataLayout from "../../layout";
import BookmarkToggle from "../Bookmark";
import prisma from "../../../lib/prisma";

async function getData({ params }) {
  const matterData = await prisma.matter.findMany({
    where: {
      published: true,
      slug: String(params?.categoryId),
    },
  });
  const datapointData = await prisma.data.findMany({
    orderBy: {
      measuredAt: "asc",
    },
    where: {
      published: true,
      matterSlug: {
        endsWith: String(params?.categoryId),
      },
    },
  });

  // Recommendation: handle errors
  if (!datapointData) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return matterData;
}

export default async function Page({
  params,
}: {
  params: { categoryId: string };
}) {
  const data = await getData({ params });
  console.log(data);
  return (
    <>
      {" "}
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 h-96 my-9 p-9 rounded border-2">
          <div className="flex flex-wrap justify-between">
            {/* REFACTOR: split at T to remove time or just make formatting of data better */}
            <div className="font-bold uppercase ">
              {data[0]?.name || "Unknown Name"}
            </div>
            <div className="my-2">
              <BookmarkToggle />
            </div>
          </div>
          <div className="text-sectionTitle font-bold uppercase ">
            {data[0]?.abbreviation || "Unknown Abbreviation"}
          </div>
          <div className="font-bold uppercase ">
            {data[0]?.description || "Unknown Matter"}
          </div>
        </div>
      </div>
    </>
  );
}
