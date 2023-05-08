import React from "react";
import { GetServerSideProps } from "next";

import Layout from "../../components/Layout";
import Hero from "../../components/PageHero";
import SearchDataGrid from "../../components/PageBody";

//DataResult Views

import { makeSerializable } from "../../lib/util";
import prisma from "../../lib/prisma";

type Props = {};

const Page: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Hero
        subtitle="sub"
        title="measurement"
        description="Est labore ex esse irure fugiat in anim esse officia sunt irure ipsum ea excepteur tempor. Amet velit veniam ullamco esse ullamco aliquip elit id elit anim exercitation magna culpa. Nostrud et eu duis officia duis ex. Est eu eiusmod est cillum id qui tempor labore excepteur ut. Aliquip ut ea velit in qui velit reprehenderit incididunt non dolor. Laboris do qui veniam do commodo et occaecat irure reprehenderit tempor fugiat."
        color=""
      />
      <SearchDataGrid data={props} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.Measurements.findMany({
    skip: 5,
    take: 5,
    where: {
      published: true,
    },
    include: {
      unit: true,
    },
  });
  return {
    props: { feed: makeSerializable(feed) },
  };
};

export default Page;
