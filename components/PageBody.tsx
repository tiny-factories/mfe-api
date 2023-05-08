import React, { useEffect, useState } from "react";

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
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
  const [pageSize, setPageSize] = useState(10);
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

    console.log(data);
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

        <div className="hidden md:-mt-px md:flex">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              {pageNumber}
            </button>
          ))}
        </div>
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
    <div className="">
      <div className="">explore</div>

      <div className="">
        Non eiusmod et minim ullamco laboris veniam. Culpa adipisicing eiusmod
        magna sunt. Ipsum elit ad dolor et id magna pariatur enim proident culpa
        cupidatat ut aliquip ut ea. Laborum eiusmod aute ullamco et non.
        Occaecat incididunt sunt est cillum deserunt et. Adipisicing veniam
        veniam est laborum laborum.
      </div>
      <div>
        <div>
          <div>
            <button onClick={toggleView}>Toggle View</button>
            {view === "gallery" ? (
              <div>
                <button onClick={toggleView}>List</button>
                <button onClick={toggleView}>Gallery</button>
              </div>
            ) : (
              <div>
                <button onClick={toggleView}>List</button>
                <button onClick={toggleView}>Gallery</button>
              </div>
            )}
          </div>
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
    </div>
  );
}
