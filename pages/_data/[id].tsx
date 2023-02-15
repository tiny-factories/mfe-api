import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { CSVLink, CSVDownload } from "react-csv";
import { paginate } from "../../utils/paginate";

import { DataProps, matterPageDataProps } from "../../components/Data";
import Pagination from "../../components/Pagination";
import DataGallery from "../../components/DataGallery";
import DataList from "../../components/DataList";
import Section from "../../components/Section";
import BookmarkToggle from "../../components/ToggleBookmark";
import BarChart from "../../components/NivoBar";
import Stats from "../../components/Stats";

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

  // QUESTION: Feels like there is a better way to handle reversing the data array for the Stats component
  const dataPointDec = props.datapointData;
  const dataPointAsc = props.datapointData.reverse();

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
        <Section
          subtitle="Timetraveling through the"
          title={`Decades of ${props?.pageData[0]?.abbreviation}`}
        >
          <Stats data={dataPointAsc} />
          <div className="col-span-4 md:col-span-3 h-96">
            {!props.datapointData.length ? (
              <>Looks like we dont have any data for this chart!</>
            ) : (
              <>
                {" "}
                <BarChart
                  lableXAxis="X"
                  lableYAxis="Y"
                  key=""
                  data={dataPointDec}
                />
              </>
            )}
          </div>
        </Section>
        <DataGallery
          subtitle="related"
          title="datasets"
          data={props.datapointData}
        />
        <DataList subtitle="" title="Carbon data" data={paginatedPosts} />

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
    orderBy: {
      measuredAt: "asc",
    },
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
