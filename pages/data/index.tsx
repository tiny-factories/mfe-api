import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import Matter, { MatterProps } from "../../components/Matter";
import { makeSerializable } from "../../lib/util";
import prisma from "../../lib/prisma";
import Map from "../../components/Map";

type Props = {
  feedMatter: MatterProps[];
};

const DataPage: React.FC<Props> = (props) => {
  return (
    <>
      <div className="my-9 p-9 col-span-2 rounded  bg-[#0f0f0f0f]">
        {" "}
        <div className="">
          <div className="">
            <div className="text-subTitle uppercase">our api for</div>
            <div className="text-sectionTitle font-bold ">Our Data</div>
            <div className="text-paragraph">
              Our api offers spercial api routes for the most common emissions
              querries.{" "}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-9 col-span-2 border-t bg-black-200">Search</div> */}
      <div className="my-9 col-span-2">
        <div className="flex flex-flex-wrap justify-between">
          {/* <div className="text-sectionTitle font-bold uppercase">
            Recently Updated
          </div> */}
        </div>
        <div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center px-6 py-4 ">
              <div className="w-full">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  Icon
                </div> */}
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-md border-none focus:border-gray-300 bg-[#E9E9E9] text-sm placeholder-gray-500 "
                    placeholder="Search for terms, agencies, treaties, emissions … "
                    type="search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {props.feedMatter.map((data, i) => (
            <div key={data.id} className="p-3 rounded border bg-black-200">
              <Matter data={data} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const allMatter = await prisma.matter.findMany({
    where: { published: true },
  });
  const allSources = await prisma.source.findMany({
    where: { published: true },
  });
  return {
    props: {
      feedMatter: makeSerializable(allMatter),
      feedSources: makeSerializable(allSources),
    },
  };
};

export default DataPage;
