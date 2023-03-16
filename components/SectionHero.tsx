import React from "react";
import Link from "next/link";
import Router from "next/router";

// export type PageHeroProps = {
//   subtitle: string;
//   title: string;
//   description: string;
// };

export default function SectionHero({ subtitle, title, description }) {
  return (
    <div className="my-9 p-9 col-span-2 rounded border bg-[#C4E3FF]">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="">
          <div className="text-subTitle uppercase">
            {subtitle || "No sub title given"}
          </div>
          <div className="text-sectionTitle font-bold ">
            {" "}
            {title || "No Title Given"}
          </div>
          <div className="">
            {description ||
              "Proident duis nulla id aute amet duis ullamco do qui qui labore. Cupidatat culpa consectetur cillum qui exercitation cupidatat laboris commodo pariatur est ea veniam."}
          </div>

          <div className=" ">
            Don&apos;t see the data your looking for? Reachout to us.
          </div>
        </div>
        <div className="">iamge</div>
      </div>
    </div>
  );
}
