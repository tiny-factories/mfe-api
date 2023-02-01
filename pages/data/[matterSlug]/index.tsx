import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../../components/Layout";
import { DataProps } from "../../../components/Data";
// import MyResponsiveLine from "../../../components/MyResponsiveLine";
import Map from "../../../components/Map";

import { makeSerializable } from "../../../lib/util";
import prisma from "../../../lib/prisma";

type Props = {
  feed: DataProps[];
};

// const lineChartData = [
//   {
//     id: "CO₂",
//     color: "hsl(70, 70%, 50%)",
//     data: [
//       {
//         x: "year",
//         y: 300,
//       },
//     ],
//   },
// ];

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props, lineChartData) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (measurement) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === measurement ? sortConfig.direction : undefined;
  };
  return (
    <table className="min-w-full divide-y divide-gray-300">
      {/* <caption>Products</caption> */}

      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            {" "}
            <button
              type="button"
              onClick={() => requestSort("measurement")}
              className={getClassNamesFor("measurement")}
            >
              Measurement
            </button>
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            {" "}
            <button
              type="button"
              onClick={() => requestSort("price")}
              className={getClassNamesFor("price")}
            >
              Price
            </button>
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            {" "}
            <button
              type="button"
              onClick={() => requestSort("date")}
              className={getClassNamesFor("date")}
            >
              Date Measured
            </button>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {items.map((item, i) => (
          <tr key={i}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              {item.measurement}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {item.unit}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {item.measuredAt}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const DataPoint: React.FC<Props> = (props) => {
  const router = useRouter();
  const { matterSlug } = router.query;
  var result = props.feed.filter((d) => d.matterSlug === `${matterSlug}`);

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 h-96 p-9 rounded border bg-black-200">
          <div className="text-lg font-bold">{matterSlug}</div>
          {/* <div className="">{description}</div> */}
        </div>
        <div className="col-span-2 h-96 p-9 rounded border bg-black-200">
          {/* <MyResponsiveLine data={result} filter="" /> */}
        </div>
        <div className="col-span-2 h-96 p-9 rounded border bg-black-200">
          02
        </div>
        <div className="col-span-2 h-96 rounded border bg-black-200">
          <Map />
        </div>

        <div className="col-span-4 min-h-96 rounded border bg-black-200">
          <div className="flex flex-wrap justify-between border-b">
            <div className="pl-2">Choose timespand</div>

            <div className="">Yearly</div>
            <div className="">Monthly</div>
            <div className="pr-2">Weekly</div>
          </div>
          <ProductTable products={result} />
        </div>
      </div>
      <div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {!result.length && (
            <>
              <div className="font-bold">
                OPPS! Looks like we had an issue loading the data. Please try to
                refresh the page and{" "}
                <Link href="#">
                  <div className="underline underline-offset-2">contact us</div>
                </Link>{" "}
                if the issue persists.
              </div>
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
  // Clean 'result' data for the Line Chart
};

export default DataPoint;

// Examples for Table Sort https://codesandbox.io/s/table-sorting-example-ur2z9?from-embed=&file=/src/App.js:1701-1705
