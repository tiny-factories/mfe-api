import React, { ReactNode, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import SectionHero from "../../components/SectionHero";
import Layout from "../../components/Layout";
import Source, { SourceProps } from "../../components/Source";
import { makeSerializable } from "../../lib/util";
import prisma from "../../lib/prisma";
import useDebounce from "../../hooks/useDebounce";

type Props = {
  feedSources: SourceProps[];
};

const SourcesPage: React.FC<Props> = (props) => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    // search the api

    async function fetchData() {
      setLoading(true);

      setNotices([]);

      const data = await fetch(
        `/api/nextSearch?searchString=${debouncedSearch}`
      ).then((res) => res.json());
      setNotices(data);
      setLoading(false);
    }

    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

  return (
    <>
      {/* Hero Section */}
      <SectionHero
        subtitle="Proident duis"
        title="licences"
        description="Proident duis nulla id aute amet duis ullamco do qui qui labore. Cupidatat culpa consectetur cillum qui exercitation cupidatat laboris commodo pariatur est ea veniam."
      />
      {/* Search Section */}
      {/* <div className="p-9 col-span-2 ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <input
            id="search"
            name="search"
            className="block w-full rounded-md border-none focus:border-gray-300 bg-[#E9E9E9] text-sm placeholder-gray-500 "
            placeholder="Search for terms, agencies, treaties, emissions … "
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div> */}

      <div className="my-9 col-span-2 border-t bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-sectionTitle font-bold uppercase">
            Source List
          </div>
        </div>
        <table className=" divide-gray-300">
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
                Website
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Data Site
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Local
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
            <div className="font-bold hover:underline">We</div>
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
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const allSources = await prisma.source.findMany({
    where: { published: true },
  });
  return {
    props: { feedSources: makeSerializable(allSources) },
  };
};

export default SourcesPage;
