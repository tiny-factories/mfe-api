import React from "react";

import Layout from "../../components/Layout";
import Hero from "../../components/PageHero";
import SearchAndData from "../../components/PageBody";

type Props = {};

const Page: React.FC<Props> = () => {
  return (
    <Layout>
      <Hero
        subtitle="sub"
        title="measurement"
        description="Est labore ex esse irure fugiat in anim esse officia sunt irure ipsum ea excepteur tempor. Amet velit veniam ullamco esse ullamco aliquip elit id elit anim exercitation magna culpa. Nostrud et eu duis officia duis ex. Est eu eiusmod est cillum id qui tempor labore excepteur ut. Aliquip ut ea velit in qui velit reprehenderit incididunt non dolor. Laboris do qui veniam do commodo et occaecat irure reprehenderit tempor fugiat."
        color=""
      />
      <SearchAndData dataTable="collections" />
    </Layout>
  );
};

export default Page;