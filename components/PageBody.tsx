import React, { ReactNode, useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import { makeSerializable } from "../lib/util";
import prisma from "../lib/prisma";

import GalleryView from "./DataGalleryView";
import TableView from "./DataTableView";

import useDebounce from "../hooks/useDebounce";

export default function SearchAndData({ dataTable }) {
  //For Search
  const [loading, setLoading] = React.useState(true);
  const [results, setResults] = useState<Results[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  //For DataViews
  const [view, setView] = useState("gallery");
  //For Pagination
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableCount, setTableCount] = useState();

  const debouncedSearch = useDebounce(search, 500);

  const toggleView = () => {
    setView((prevView) => (prevView === "gallery" ? "list" : "gallery"));
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // useEffect(() => {
  //   fetchPosts();
  // }, [currentPage, pageSize]);

  useEffect(() => {
    fetchData();
  }, [debouncedSearch, currentPage, pageSize]);

  async function fetchData() {
    setLoading(true);
    setResults([]);

    const data = await fetch(
      `/api/test?&currentPage=${currentPage}&pageSize=${pageSize}`
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
      <div>
        {pageNumbers.map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
            {pageNumber}
          </button>
        ))}
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
