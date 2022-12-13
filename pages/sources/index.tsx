import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import Source, { SourceProps } from "../../components/Source";
import { makeSerializable } from "../../lib/util";
import prisma from "../../lib/prisma";

type Props = {
  feed: SourceProps[];
};

const SourcesPage: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <Layout>
      <div className="w-full mb-9 sm:py-9 text-h4 sm:text-h3 md:text-h1 font-sans">
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

        <div className="rounded-lg gap-5 sm:grid sm:grid-cols-3 sm:gap-px sm:divide-y-0">
          {props.feed.map((data) => (
            <div
              key={data.id}
              className="rounded-bl-lg 
            relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            >
              <Source data={data} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.Source.findMany({});
  return {
    props: { feed: makeSerializable(feed) },
  };
};

export default SourcesPage;
