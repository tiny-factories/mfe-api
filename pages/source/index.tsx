import React from "react";
import { GetServerSideProps } from "next";

import Layout from "../../components/Layout";
import Hero from "../../components/PageHero";
import SearchDataGrid from "../../components/PageBody";

import { makeSerializable } from "../../lib/util";
import prisma from "../../lib/prisma";

type Props = {};
const Page: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Hero subtitle="sub" title="source" description="" color="" />
      <SearchDataGrid data={props} />
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.Source.findMany({
    where: {
      published: true,
    },
  });
  return {
    props: { feed: makeSerializable(feed) },
  };
};

export default Page;
