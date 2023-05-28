import React, { useEffect, useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ListBulletIcon,
} from "@heroicons/react/20/solid";

import GalleryView from "./DataGalleryView";
import TableView from "./DataTableView";

import useDebounce from "../hooks/useDebounce";

export default function SearchAndData({ dataTable }) {
  const tableToSearch = dataTable;
  //For Search
  const [loading, setLoading] = React.useState(true);
  const [results, setResults] = useState<Results[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  //For DataViews
  const [view, setView] = useState("gallery");
  //For Pagination
  const [pageSize, setPageSize] = useState(48);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableCount, setTableCount] = useState(0);

  const debouncedSearch = useDebounce(search, 500);

  const toggleView = () => {
    setView((prevView) => (prevView === "gallery" ? "list" : "gallery"));
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchData(dataTable);
  }, [dataTable, debouncedSearch, currentPage, pageSize, tableToSearch]);

  async function fetchData(table: any) {
    setLoading(true);
    setResults([]);
    const data = await fetch(
      `/api/${table}?&currentPage=${currentPage}&pageSize=${pageSize}`
    ).then((res) => res.json());
    setResults(data.tableData);
    setTableCount(data.tableCount);
    console.log(results);

    setLoading(false);
  }

  const Pagination = () => {
    const pageCount = Math.ceil(tableCount / pageSize);
    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

    return (
      <div className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div className="-mt-px flex w-0 flex-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <ArrowLongLeftIcon
              className="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </button>
        </div>

        {/* <div className="hidden md:-mt-px md:flex">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              {pageNumber}
            </button>
          ))}
        </div> */}
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Next
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <div className="min-h-screen border-4 border rounded"></div>
      </div>
      {/* Search, Display, Sorting, Results */}
      <div className="col-span-2">
        <div className="">
          {/* Search Bar */}
          <div className="">
            <div className="relative mt-2 flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>
          <div className="flex">
            {/* Results Display Options */}
            <div className="flex-none">
              <div className="grid-cols-2">
                <button
                  onClick={toggleView}
                  className="border-2 rounded-tl rounded-bl"
                >
                  <ListBulletIcon className="h-6 w-6 text-blue-500" />
                </button>
                <button
                  onClick={toggleView}
                  className="border-2 rounded-tr rounded-br"
                >
                  <ListBulletIcon className="h-6 w-6 text-blue-500" />
                </button>
              </div>
            </div>
            {/* Results Sort Options */}
            <div className="grow">
              <div className="flex">
                {" "}
                <div className="grow"></div>
                <div className="grid-cols-2">
                  <button
                    onClick={toggleView}
                    className="border-2 rounded-tl rounded-bl"
                  >
                    <ListBulletIcon className="h-6 w-6 text-blue-500" />
                  </button>
                  <button
                    onClick={toggleView}
                    className="border-2 rounded-tr rounded-br"
                  >
                    <ListBulletIcon className="h-6 w-6 text-blue-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Results */}
        <div className="">
          {view === "gallery" ? (
            <>
              {!search && (
                <div>
                  <GalleryView data={results} />
                  <Pagination />
                </div>
              )}
            </>
          ) : (
            <>
              {!search && (
                <div>
                  <TableView data={results} />
                  <Pagination />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div>
        <div>
          {/* <div>
            <button onClick={toggleView}>Toggle View</button>
            {view === "gallery" ? (
              <div className="flex flex-wrap">
                <button onClick={toggleView}>
                  <ListBulletIcon className="h-6 w-6 text-blue-500" />
                </button>
                <button onClick={toggleView}>Gallery</button>
              </div>
            ) : (
              <div className="flex flex-wrap">
                <button onClick={toggleView}>
                  {" "}
                  <ListBulletIcon className="h-6 w-6 text-blue-500" />
                </button>
                <button onClick={toggleView}>Gallery</button>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
