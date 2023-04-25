import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/PageHero";

type Props = {};

const Page: React.FC<Props> = () => {
  return (
    <Layout>
      <Hero subtitle="sub" title="sensor" description="" color="" />
    </Layout>
  );
};

export default Page;
