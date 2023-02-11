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
      <div className="my-9 p-9 col-span-2 rounded border bg-[#C4E3FF]">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="">
            <div className="text-subTitle uppercase">our api for</div>
            <div className="text-sectionTitle font-bold ">Our Data</div>
            <div className="text-paragraph">
              Our api offers spercial api routes for the most common emissions
              querries.{" "}
            </div>
            <div className=" ">
              /today for example gives you the latest global greenhouse gass and
              climate averages for our planet.
            </div>
            <div className=" ">Read the ...</div>
          </div>
        </div>
      </div>
      {/* <div className="my-9 col-span-2 border-t bg-black-200">Search</div> */}
      <div className="my-9 col-span-2 border-t bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-sectionTitle font-bold uppercase">
            Recently Updated
          </div>
        </div>
        <div className="grid sm:grid-cols-4 gap-4">
          {props.feedMatter.map((data, i) => (
            <div key={data.id} className="p-3 rounded border bg-black-200">
              <Matter data={data} />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="my-9 col-span-2 border-t bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-sectionTitle font-bold uppercase">
            Explore by Location
          </div>

          <Link href="/data">
            <div className="text-sectionTitle font-bold uppercase font-mono transform-gpu hover:translate-x-2">
              →
            </div>
          </Link>
        </div>

        <div className=" h-96 rounded border bg-black-200">
          {" "}
          <Map />
        </div>
      </div> */}

      {/*<div className="my-9 col-span-2 border-t bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-sectionTitle font-bold uppercase">
            Explore by Date
          </div>

          <Link href="/data">
            <div className="text-sectionTitle font-bold uppercase font-mono transform-gpu hover:translate-x-2">
              →
            </div>
          </Link>
        </div>
        <div className="grid sm:grid-cols-4 gap-4">loading</div>
      </div>*/}
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
