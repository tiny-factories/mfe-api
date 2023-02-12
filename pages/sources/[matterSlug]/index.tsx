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
  const { matterSlug } = router.query;
  var result = props.feed.filter((d) => d.matterSlug === `${matterSlug}`);

  // could filter here but thats till pulling all the ddata?
  return (
    <>
      <div>
        <div className="text-lg font-bold">{matterSlug}</div>
        <div>Some Kinda Filter</div>

        <div>
          {!result.length && <>No Data</>}
          {result.length && (
            <>
              {result.map((data) => (
                <div key={data.id} className="post">
                  <Data data={data} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

// lookup data on  matter here

export const getServerSideProps: GetServerSideProps = async () => {
  // Should move matterSlug filter to here to reduce the client load
  const feed = await prisma.data.findMany({
    where: { published: true },
  });
  return {
    props: { feed: makeSerializable(feed) },
  };
};

export default DataPoint;
