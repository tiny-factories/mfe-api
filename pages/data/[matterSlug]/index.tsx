import React from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Data, { DataProps } from "../../../components/Data";
import { makeSerializable } from "../../../lib/util";
import prisma from "../../../lib/prisma";
import { Line } from "react-chartjs-2";

type Props = {
  feed: DataProps[];
};

const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const DataPoint: React.FC<Props> = (props) => {
  const router = useRouter();
  const { matterSlug } = router.query;
  var result = props.feed.filter((d) => d.matterSlug === `${matterSlug}`);

  // could filter here but thats till pulling all the ddata?
  return (
    <Layout>
      <div>
        <div>
          <div className="text-lg font-bold">{matterSlug}</div>
          <div>Some Kinda Filter</div>
        </div>

        <div>
          {!result.length && (
            <>
              <div className="font-bold">
                OPPS! Looks like we had an issue loading the data. Please try to
                refresh the page and{" "}
                <Link href="/blog/hello-world">
                  <a className="underline underline-offset-2">contact us</a>
                </Link>{" "}
                if the issue persists.
              </div>
            </>
          )}
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
    </Layout>
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
