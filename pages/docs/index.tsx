import React from "react";

import Layout from "../../components/Layout";
import Hero from "../../components/PageHero";

type Props = {};

const Page: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Hero subtitle=" " title="docs" description="..." color="" />
    </Layout>
  );
};

export default Page;
