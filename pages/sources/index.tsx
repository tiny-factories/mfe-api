import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import Source, { SourceProps } from "../../components/Source";
import { makeSerializable } from "../../lib/util";
import prisma from "../../lib/prisma";

type Props = {
  feedSources: SourceProps[];
};

const SourcesPage: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <Layout>
      {/* Hero Section */}
      <div className="my-9 p-9 col-span-2 rounded border bg-[#C4E3FF]">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="">
            <div className="text-subTitle uppercase">
              where our data comes from
            </div>
            <div className="text-sectionTitle font-bold ">Sources List</div>
            <div className="text-paragraph">
              Search throught more then *** sources for the climate data you
              need. We included
            </div>

            <div className=" ">
              Don't see the data your looking for? Reachout to us.
            </div>
          </div>
          <div className="">iamge</div>
        </div>
      </div>
      {/* Search Section */}
      <div className="my-9 p-9 col-span-2 ">Search</div>

      <div className="my-9 col-span-2 border-t bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-sectionTitle font-bold uppercase">
            Today’s atmopheric readings
          </div>

          <Link href="/data">
            <div className="text-sectionTitle font-bold uppercase font-mono transform-gpu hover:translate-x-2">
              →
            </div>
          </Link>
        </div>
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Website
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Profile
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {props.feedSources.map((data, i) => (
              <tr key={data.id}>
                <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {data.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Sources Section */}
      {/* <div className="w-full mb-9 sm:py-9 text-h4 sm:text-h3 md:text-h1 font-sans">
        <div className="text-center font-bold">Our dat</div>
        <div className="text-h4">
          <Link href="https://madefor.earth">
            <a className="font-bold hover:underline">We</a>
          </Link>{" "}
          Our data comes from a verisy of public instaduation and private
          partinerships. So that we can ...
        </div>
      </div>

      <div>
        <div className="">Source</div>
        <div className="">
          We started a glossary of terms, technologies, policies, and
          regulations around climate change to ...
        </div>

        <div className="grid grid-cols-12 gap-4">
          {props.feed.map((data) => (
            <div
              key={data.id}
              className="col-span-3 p-3 rounded border bg-black-200"
            >
              <Source data={data} />
            </div>
          ))}
        </div>
      </div> */}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const allSources = await prisma.source.findMany({});
  return {
    props: { feedSources: makeSerializable(allSources) },
  };
};

export default SourcesPage;
