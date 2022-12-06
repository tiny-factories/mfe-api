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
        <div>
          {props.feed.map((data) => (
            <div key={data.id} className="grid grid-cols-3 gap-4">
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
