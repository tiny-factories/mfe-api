import React from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";

import { makeSerializable } from "../../../lib/util";
import prisma from "../../../lib/prisma";
import { CollectionProps } from "../../../components/Collection";

import Layout from "../../../components/Layout";
import Hero from "../../../components/PageHero";
import SearchAndData from "../../../components/PageBody";
import JoinCommunity from "../../../components/JoinCommunity";
import TableView from "../../../components/DataTableView";

const Page: React.FC<CollectionProps> = (props) => {
  console.log(props);
  return (
    <Layout>
      {/* Collection Hero */}
      <div className="uppercase font-bold">Collection:</div>
      <div className="py-9 grid grid-cols-2 gap-8">
        <div className="text-h1 font-bold">{props?.name || "Unknown name"}</div>
        <div className="text-p">
          {props?.description || "Unknown description"}
        </div>
      </div>
      {/* Anchor Links */}
      <div className="py-9 grid grid-cols-4 gap-8">
        <Link href="#">
          <div className="pt-3 border-t-2 border-black hover:">
            Measurement →
          </div>
        </Link>
        <Link href="#">
          <div className="pt-3 border-t-2 border-black hover:">Our API →</div>
        </Link>
        <Link href="#">
          <div className="pt-3 border-t-2 border-black hover:">Changelog →</div>
        </Link>
        <Link href="#">
          <div className="pt-3 border-t-2 border-black hover:">
            Related Collections →
          </div>
        </Link>
      </div>
      {/* Measurements Section */}
      <div className="py-9 grid grid-cols-2 gap-4">
        <div className="">
          <div className="text-h2">Title </div>
          <div className="text-p">
            Minim eu dolore excepteur sit velit culpa labore Lorem laborum
            adipisicing irure minim officia adipisicing. Velit amet Lorem
            commodo duis enim Lorem laborum occaecat. Ipsum occaecat dolor
            deserunt labore et culpa eiusmod est pariatur anim proident
            reprehenderit ullamco laborum id. Laboris laboris cillum enim velit
            consequat est esse excepteur eu enim.
          </div>
        </div>{" "}
        <div className="">Table</div>
      </div>
      <JoinCommunity />
      <div className="">List about org that collected data</div>
      <div className="">Example data</div>
      {/* <SearchAndData dataTable="Collections" /> */}
      <div>
        <TableView data={results} />
        {/* <Pagination /> */}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<CollectionProps> = async (
  context
) => {
  const slug = String(
    Array.isArray(context.params?.id)
      ? context.params?.slug[0]
      : context.params?.slug
  );
  // Fetch the data for the collection
  const collection = await prisma.collections.findUnique({
    where: {
      id: slug,
    },
  });

  if (!collection) {
    return {
      notFound: true,
    };
  }

  // Convert createdAt to string representation
  const createdAt = collection.createdAt.toISOString();
  const updatedAt = collection.createdAt.toISOString();

  return {
    props: {
      ...collection,
      createdAt,
      updatedAt,
    },
  };
};

export default Page;
