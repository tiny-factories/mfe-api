import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import Matter, { MatterProps } from "../../components/Matter";
import { makeSerializable } from "../../lib/util";
import prisma from "../../lib/prisma";

type Props = {
  feed: MatterProps[];
};

const DataPage: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="w-full mb-9 sm:py-9 text-h4 sm:text-h3 md:text-h1 font-sans">
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
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.matter.findMany({});
  return {
    props: { feed: makeSerializable(feed) },
  };
};

export default DataPage;
