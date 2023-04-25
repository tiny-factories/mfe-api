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
      <div className="bg-green text-tan rounded-lg w-full   font-sans">
        <div className="mb-9 sm:p-9">
          <div className="uppercase font-bold">ources foer </div>
          <div className="uppercase font-bold text-h4 sm:text-h3 md:text-h1">
            Data Types{" "}
          </div>
        </div>
      </div>

      <div>
        <div>Search and Filtering</div>
        <div>Data with Pagination</div>
        <div></div>
        <div className="grid grid-cols-12 gap-4">
          {props.feed.map((data) => (
            <div
              key={data.id}
              className="col-span-12 sm:col-span-6 md:col-span-4 p-3 rounded border bg-black-200"
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
