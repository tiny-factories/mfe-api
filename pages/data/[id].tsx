import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { CSVLink, CSVDownload } from "react-csv";
import { paginate } from "../../utils/paginate";

import { DataProps, matterPageDataProps } from "../../components/Data";
import Pagination from "../../components/Pagination";
import DataGallery from "../../components/DataGallery";
import DataList from "../../components/DataList";
import BookmarkToggle from "../../components/ToggleBookmark";

import { makeSerializable } from "../../lib/util";

import prisma from "../../lib/prisma";

type Props = {
  datapointData: DataProps[];
  pageData: matterPageDataProps[];
};

const DataPoint: React.FC<Props> = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(props.datapointData, currentPage, pageSize);
  //This filter is redundant based on the getServerProps

  //   const headers = [
  //     { label: "First Name", key: "firstname" },
  //     { label: "Last Name", key: "lastname" },
  //     { label: "Email", key: "email" },
  //   ];
  //
  //   const data = [
  //     { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  //     { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  //     { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  //   ];
  // console.log(JSON.stringify(props.datapointData));

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 h-96 my-9 p-9 rounded border-2">
          <div className="flex flex-wrap justify-between">
            <div className="font-bold uppercase ">
              {props?.pageData[0]?.name || "Unknown Matter"}
            </div>
            <div className="my-2">
              <BookmarkToggle />
            </div>
          </div>
          <div className="text-sectionTitle font-bold uppercase ">
            {props?.pageData[0]?.abbreviation || "Unknown Matter"}
          </div>
          <div className="font-bold uppercase ">
            {props?.pageData[0]?.description || "Unknown Matter"}
          </div>
        </div>
        <DataGallery subtitle="" title="" data={props.datapointData} />
        <DataGallery
          subtitle="related"
          title="datasets"
          data={props.datapointData}
        />
        <DataList subtitle="" title="Carbon data" data={paginatedPosts} />

        {/* Load Current pages */}

        {/* Page Picker */}
        <Pagination
          items={props.datapointData.length} // 100
          currentPage={currentPage} // 1
          pageSize={pageSize} // 10
          onPageChange={onPageChange}
        />

        <DataGallery
          subtitle="related data"
          title="sources"
          data={props.datapointData}
        />

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
  const datapointData = await prisma.data.findMany({
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
  const unitData = await prisma.unit.findMany({
    where: {},
  });
  // FIX: Need to pass in page slug or matterId to endsWith prisma perimeter
  return {
    props: {
      datapointData: makeSerializable(datapointData),
      pageData: makeSerializable(pageData),
      unitData: makeSerializable(unitData),
    },
  };
};

export default DataPoint;

// Examples for Table Sort https://codesandbox.io/s/table-sorting-example-ur2z9?from-embed=&file=/src/App.js:1701-1705
