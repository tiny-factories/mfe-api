import React, { useState } from "react";
import { GetServerSideProps } from "next";

import Layout from "../../components/Layout";
import Hero from "../../components/PageHero";
import SearchAndData from "../../components/PageBody";

import { makeSerializable } from "../../lib/util";
import prisma from "../../lib/prisma";

type Props = {};

const Page: React.FC<Props> = (props) => {
  const [view, setView] = useState("gallery");

  // toggle between list and card view
  const toggleView = () => {
    setView((prevView) => (prevView === "gallery" ? "list" : "gallery"));
  };

  console.log(props);
  return (
    <Layout>
      <Hero
        subtitle="sub"
        title="measurement"
        description="Est labore ex esse irure fugiat in anim esse officia sunt irure ipsum ea excepteur tempor. Amet velit veniam ullamco esse ullamco aliquip elit id elit anim exercitation magna culpa. Nostrud et eu duis officia duis ex. Est eu eiusmod est cillum id qui tempor labore excepteur ut. Aliquip ut ea velit in qui velit reprehenderit incididunt non dolor. Laboris do qui veniam do commodo et occaecat irure reprehenderit tempor fugiat."
        color=""
      />
      <SearchAndData data={props} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.collections.findMany({
    where: {
      published: true,
    },
  });
  return {
    props: { feed: makeSerializable(feed) },
  };
};

export default Page;