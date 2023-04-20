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
