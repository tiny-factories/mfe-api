import type { NextPage } from "next";
import React, { ReactNode, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Router from "next/router";

import { makeSerializable } from "../lib/util";
import prisma from "../lib/prisma";

import useDebounce from "../hooks/useDebounce";

import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import HeroAnimation from "../components/animations/TextAnimations";

export type MatterProps = {
  id: number;
  name: string;
  abbrevation: string;
  slug: string;
  dataPoints: string;

  unit: {
    name: string;
    abbrevation: string;
  };
};

const HomePage: React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [notices, setNotices] = useState<Notice[]>([]);

  const [search, setSearch] = useState<string | null>(null);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    // search the api

    async function fetchData() {
      setLoading(true);

      setNotices([]);

      const data = await fetch(
        `/api/search?searchString=${debouncedSearch}`
      ).then((res) => res.json());
      setNotices(data);
      setLoading(false);
    }

    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

  return (
    <Layout>
      <div className="pt-24 text-center uppercase font-bold text-green">
        <div className="text-h3">We are unlocking</div>

        <div className="text-title">
          Decades of Climate Data for ...
          {/* Decades of Climate Data for <HeroAnimation /> */}
        </div>
      </div>
      {/* Explore Section */}
      <div className="py-9 grid grid-cols-2 gap-4">
        <div className="col-span-2 uppercase font-bold text-h2">explore</div>
        <div className="col-span-2 lg:text-h1 text-h2">
          Non eiusmod et minim ullamco laboris veniam. Culpa adipisicing eiusmod
          magna sunt. Ipsum elit ad dolor et id magna pariatur enim proident
          culpa cupidatat ut aliquip ut ea. Laborum eiusmod aute ullamco et non.
          Occaecat incididunt sunt est cillum deserunt et. Adipisicing veniam
          veniam est laborum laborum.
        </div>
      </div>
      {/* Search Section */}

      <div className="py-9 grid grid-cols-2 gap-4">
        <div className="col-span-2 uppercase font-bold sm:text-2 text-h1">
          search
        </div>

        <div className="col-span-2 w-full ">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="flex rounded-md border-2 border-green bg-tan text-sm">
            <input
              id="search"
              name="search"
              className="grow mt-1 mx-1 py-1 px-2 border-0 text-green bg-tan "
              placeholder="Search for terms, agencies, treaties, emissions … "
              type="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="border-2 my-1 mx-1 py-2 px-2 rounded uppercase text-center font-bold align-middle bg-tan border-green  text-green hover:bg-green hover:text-tan">
              →
            </button>
          </div>
        </div>
        <div className="col-span-2">
          {!search && (
            <div className="grid grid-cols-12 gap-4">
              {props.feed.map((data, i) => (
                <div
                  key={i}
                  className="col-span-12 sm:col-span-6 md:col-span-4 rounded border bg-green text-tan"
                >
                  <Card data={data} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="my-9 p-9 bg-green text-tan rounded">
        <div className="uppercase font-bold text-h2">updates</div>
        <div className="text-p">
          Non eiusmod et minim ullamco laboris veniam. Culpa adipisicing eiusmod
          magna sunt. Ipsum elit ad dolor et id magna pariatur enim proident
          culpa cupidatat ut aliquip ut ea.
        </div>
        <Newsletter />
      </div>
    </Layout>
  );
};

const Card: React.FC<{ data: MatterProps }> = ({ data }) => {
  const unitAbbrevation = data.unit ? data.unit.abbrevation : "unit unknown";
  return (
    <div className="p-3 min-h-full bg-tan rounded text-green border-2 border-green hover:cursor-auto duration-150 hover:translate-x-1 hover:-translate-y-1 transform-gpu">
      <div className="font-bold text-p sm:text-h4 md:text-h3 line-clamp-2">
        {data.name} {!data.url ? <div></div> : <Link href={data.url}>↗</Link>}
      </div>
      <div className="line-clamp-3">
        {!data.description ? <div></div> : <div>{data.description}</div>}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.Collections.findMany({
    where: {
      published: true,
    },
  });
  return {
    props: { feed: makeSerializable(feed) },
  };
};

export default HomePage;
