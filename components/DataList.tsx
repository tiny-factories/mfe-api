import Link from "next/link";
import React, { useState, useEffect } from "react";

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

export default function DataList({ subtitle, title, data }) {
  return (
    <div className="my-9 col-span-4 border-t-4 bg-black-200">
      <div className="flex flex-wrap justify-between">
        <div className="w-full font-bold uppercase">
          {" "}
          {subtitle || "No Subtitle Provided"}
        </div>
        <div className="w-full text-sectionTitle font-bold uppercase">
          {title || "No Title Provided"}
        </div>
      </div>
      <div className="grid sm:grid-cols-4 gap-4">
        {!data.length ? (
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
        ) : (
          <>
            <ProductTable products={data} />
          </>
        )}
      </div>
    </div>
  );
}
