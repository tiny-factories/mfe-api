import BookmarkToggle from "../../Bookmark";
import prisma from "../../../../lib/prisma";

async function getData({ params }) {
  const datapointData = await prisma.data.findMany({
    where: {
      published: true,
      id: String(params?.dataId),
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

  return datapointData;
}

export default async function Page({
  params,
}: {
  params: { categoryId: string; dataId: string };
}) {
  const data = await getData({ params });
  console.log(data);
  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 h-96 my-9 p-9 rounded border-2">
          <div className="flex flex-wrap justify-between">
            {/* REFACTOR: split at T to remove time or just make formatting of data better */}
            <div className="font-bold uppercase ">
              {data[0]?.measuredAt || "Unknown measuredAt"}
            </div>
            <div className="my-2">
              <BookmarkToggle />
            </div>
          </div>
          <div className="text-sectionTitle font-bold uppercase ">
            {data[0]?.measurement || "Unknown measurement"}
          </div>
          <div className="font-bold uppercase ">
            {data[0]?.description || "Unknown Matter"}
          </div>
        </div>
      </div>
    </main>
  );
}
