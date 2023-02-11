import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { CSVLink, CSVDownload } from "react-csv";
import { DataProps, matterPageDataProps } from "../../components/Data";
// import MyResponsiveLine from "../../../components/MyResponsiveLine";

import { makeSerializable } from "../../lib/util";

import prisma from "../../lib/prisma";

type Props = {
  feed: DataProps[];
  pageData: matterPageDataProps[];
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
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            {" "}
            <button>Details </button>
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
              {item.measuredAt.split("T")[0]}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <Link href="`${item.id}`">
                <div>Details →</div>
              </Link>
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

  //This filter is redundant based on the getServerProps
  var result = props.feed.filter((d) => d.matterSlug === `${matterSlug}`);

  const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" },
  ];

  const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  ];
  console.log(JSON.stringify(props.feed));

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 h-96 my-9 p-9 rounded border-2">
          <div className="font-bold uppercase text-sectionTitle">
            {props?.pageData[0]?.name || "Unknown Matter"}
          </div>

          <div className="">BookMark Icon</div>
        </div>

        <div className="col-span-4 border-t-4 bg-black-200">
          <div className="uppercase font-bold">
            <div className="text-sectionTitle">Data</div>
          </div>
          <div>
            {" "}
            <ProductTable products={props.feed} />
            {!result.length && (
              <>
                <div className="font-bold">
                  OPPS! Looks like we had an issue loading the data. Please try
                  to refresh the page and{" "}
                  <Link href="#">
                    <div className="underline underline-offset-2">
                      contact us
                    </div>
                  </Link>{" "}
                  if the issue persists.
                </div>
              </>
            )}
          </div>
        </div>

        {/* <CSVLink data={data} headers={headers}>
            Download me
          </CSVLink>{" "} */}
      </div>
    </>
  );
};

// lookup data on  matter here

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Should move matterSlug filter to here to reduce the client load
  const feed = await prisma.data.findMany({
    where: {
      published: true,
      matterSlug: {
        endsWith: String(params?.id),
      },
    },
  });
  const pageData = await prisma.matter.findMany({
    where: {
      published: true,
      slug: {
        endsWith: String(params?.id),
      },
    },
  });
  // FIX: Need to pass in page slug or matterId to endsWith prisma perimeter
  return {
    props: {
      feed: makeSerializable(feed),
      pageData: makeSerializable(pageData),
    },
  };
};

export default DataPoint;

// Examples for Table Sort https://codesandbox.io/s/table-sorting-example-ur2z9?from-embed=&file=/src/App.js:1701-1705
