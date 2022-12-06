import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import Source, { SourceProps } from "../../components/Source";
import { makeSerializable } from "../../lib/util";
import prisma from "../../lib/prisma";

type Props = {
  feed: SourceProps[];
};

const DataPage: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div>
        <div className="">
          A shared source of truth to build a better future.
        </div>
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

export default DataPage;
