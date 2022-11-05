import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Data, { DataProps } from "../../../components/Data";
import { makeSerializable } from "../../../lib/util";
import prisma from "../../../lib/prisma";

type Props = {
  feed: DataProps[];
};

const DataPoint: React.FC<Props> = (props) => {
  const router = useRouter();
  const { matterId } = router.query;
  var result = props.feed.filter((d) => d.matterId === `${matterId}`);

  // could filter here but thats till pulling all the ddata?
  return (
    <Layout>
      <div>
        <h1>Only data for {matterId}</h1>
        <main>
          {result.map((data) => (
            <div key={data.id} className="post">
              <Data data={data} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Should move matterId filter to here to reduce the client load
  const feed = await prisma.data.findMany({
    where: { published: true },
  });
  return {
    props: { feed: makeSerializable(feed) },
  };
};

export default DataPoint;
