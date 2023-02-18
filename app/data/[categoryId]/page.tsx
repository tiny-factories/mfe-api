import Link from "next/link";
import { makeSerializable } from "../../../lib/util";
import DataLayout from "../../layout";
import Section from "./section";
import Tables from "../Tables";
import BookmarkToggle from "../Bookmark";
import prisma from "../../../lib/prisma";

async function getData() {
  const pageData = await fetch("http://localhost:3000/api/matter/n2o");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!pageData.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return pageData.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 h-96 my-9 p-9 rounded border-2">
          <div className="flex flex-wrap justify-between">
            {/* REFACTOR: split at T to remove time or just make formatting of data better */}
            {/* <div className="font-bold uppercase ">
              {data[0]?.name || "Unknown Name"}
            </div> */}
            <div className="my-2">
              <BookmarkToggle />
            </div>
          </div>
          {/* <div className="text-sectionTitle font-bold uppercase ">
            {data[0]?.abbreviation || "Unknown Abbreviation"}
          </div>*/}
          {/* <div className="font-bold uppercase ">
            {data[0]?.description || "Unknown Matter"}
          </div> */}
        </div>
        <Section subtitle="related" title="datasets">
          {/* <Tables data={dataPointDec} /> */}
        </Section>
        {/* <Section
          subtitle="Timetraveling through the"
          title={`Decades of ${data[0]?.abbreviation}`}
        >
          Related Data gallery here / stats
        </Section> */}

        <Section subtitle="related" title="datasets">
          sdef
        </Section>
        <Section subtitle="addational" title="sources for ...">
          Gallery of other sources
        </Section>
      </div>
    </div>
  );
}
