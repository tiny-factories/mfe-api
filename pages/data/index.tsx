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
    <Layout>
      <div className="my-9 col-span-2 rounded border bg-black-200">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="">
            <div className="text-subTitle uppercase">our api for</div>
            <div className="text-sectionTitle font-bold ">/today</div>
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
          <div className="">iamge</div>
        </div>
      </div>
      <div className="my-9 col-span-2 border-t bg-black-200">Search</div>
      <div className="my-9 col-span-2 border-t bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-sectionTitle font-bold uppercase">
            Recently Updated
          </div>

          <Link href="/data">
            <div className="text-sectionTitle font-bold uppercase font-mono transform-gpu hover:translate-x-2">
              →
            </div>
          </Link>
        </div>
        <div className="grid sm:grid-cols-4 gap-4">
          {props.feedMatter.map((data, i) => (
            <div key={data.id} className="p-3 rounded border bg-black-200">
              <Matter data={data} />
            </div>
          ))}
        </div>
      </div>

      <div className="my-9 col-span-2 border-t bg-black-200">
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
      </div>

      <div className="my-9 col-span-2 border-t bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-sectionTitle font-bold uppercase">
            Popular Sources
          </div>

          <Link href="/sources">
            <div className="text-sectionTitle font-bold uppercase font-mono transform-gpu hover:translate-x-2">
              →
            </div>
          </Link>
        </div>
        {/* <table className="min-w-full divide-y divide-gray-300">
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
                Email
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Role
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
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {data.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {data.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {data.name}
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {data.name}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
      <div className="my-9 col-span-2 border-t bg-black-200">
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
      </div>

      {/* <div className="w-full mb-9 sm:py-9 text-h4 sm:text-h3 md:text-h1 font-sans">
        <div className="text-center font-bold">Data </div>
        <div>...</div>
      </div>

      <div>
        <div>Search and Filtering</div>
        <div>Data with Pagination</div>
        <div></div>
        <div className="grid grid-cols-12 gap-4">
          {props.feed.map((data) => (
            <div
              key={data.id}
              className="col-span-3 p-3 rounded border bg-black-200"
            >
              {" "}
              <Matter data={data} />
            </div>
          ))}
        </div>
      </div> */}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const allMatter = await prisma.matter.findMany({});
  const allSources = await prisma.source.findMany({});
  return {
    props: {
      feedMatter: makeSerializable(allMatter),
      feedSources: makeSerializable(allSources),
    },
  };
};

export default DataPage;
