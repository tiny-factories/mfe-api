import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import Data, { DataProps } from "../../components/Data";
import { makeSerializable } from "../../lib/util";
import prisma from "../../lib/prisma";

type Props = {
  feed: DataProps[];
};

const DataPage: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div>
        <div>
          {" "}
          <h1>All Data</h1>
        </div>
        <div>Search and Filtering</div>
        <div>Data with Pagination</div>
        <div></div>

        {props.feed.map((data) => (
          <div key={data.id} className="post">
            <Data data={data} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.data.findMany({
    where: { published: true },
  });
  return {
    props: { feed: makeSerializable(feed) },
  };
};

export default DataPage;
