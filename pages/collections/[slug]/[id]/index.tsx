import React from "react";
import { GetServerSideProps } from "next";

import Layout from "../../../../components/Layout";

import { makeSerializable } from "../../../../lib/util";
import prisma from "../../../../lib/prisma";

type Props = {};

const Page: React.FC<Props> = (props) => {
  return (
    <Layout>
     {/* Collection Hero */}
     <div className="uppercase font-bold">Measurements For: [San Francisco Municipal Greenhouse Gas Inventory]</div>
     <div className="py-9 grid grid-cols-2 gap-8">
       <div className="text-h1 font-bold">
        
       </div>
       
     </div>
      <div className="">
        <div className="">Meta</div>
        <div className="">Infor for Datasets maybe a chart</div>
      </div>
      <div className="">List about org that collected data</div>
      <div className="">Example data</div>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.Collections.findMany({
    where: {
      published: true,
    },
  });
  return {
    props: { feed: makeSerializable(feed) },
  };
};

export default Page;
