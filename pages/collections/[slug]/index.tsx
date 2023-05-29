import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ListBulletIcon,
} from "@heroicons/react/20/solid";

import { makeSerializable } from "../../../lib/util";
import prisma from "../../../lib/prisma";
import { CollectionProps } from "../../../components/Collection";

import Layout from "../../../components/Layout";
import Hero from "../../../components/PageHero";
import SearchAndData from "../../../components/PageBody";
import JoinCommunity from "../../../components/JoinCommunity";
import TableView from "../../../components/DataTableView";
import { MeasurementTable } from "../../../components/Tables";

// Testing Data
const MeasurementData = [
  {
    date: "2023-03-20",
    measurement: "100.00",
    unit: "ppm",
    sensorsName: "SENSOR NAME",
    sensorHref: "/sensors",
    format: [
      {
        ftp: "#",
      },
      {
        csv: "#",
      },
      {
        txt: "#",
      },
      {
        api: "#",
      },
    ],
  },
  {
    date: "2023-03-20",
    measurement: "100.00",
    unit: "ppm",
    sensorsName: "SENSOR NAME",
    sensorHref: "/sensors",
    format: [
      {
        ftp: "#",
      },
      {
        csv: "#",
      },
      {
        txt: "#",
      },
      {
        api: "#",
      },
    ],
  },
  {
    date: "2023-03-20",
    measurement: "100.00",
    unit: "ppm",
    sensorsName: "SENSOR NAME",
    sensorHref: "/sensors",
    format: [
      {
        ftp: "#",
      },
      {
        csv: "#",
      },
      {
        txt: "#",
      },
      {
        api: "#",
      },
    ],
  },
  {
    date: "2023-03-20",
    measurement: "100.00",
    unit: "ppm",
    sensorsName: "SENSOR NAME",
    sensorHref: "/sensors",
    format: [
      {
        ftp: "#",
      },
      {
        csv: "#",
      },
      {
        txt: "#",
      },
      {
        api: "#",
      },
    ],
  },
  {
    date: "2023-03-20",
    measurement: "100.00",
    unit: "ppm",
    sensorsName: "SENSOR NAME",
    sensorHref: "/sensors",
    format: [
      {
        ftp: "#",
      },
      {
        csv: "#",
      },
      {
        txt: "#",
      },
      {
        api: "#",
      },
    ],
  },
  {
    date: "2023-03-20",
    measurement: "100.00",
    unit: "ppm",
    sensorsName: "SENSOR NAME",
    sensorHref: "/sensors",
    format: [
      {
        ftp: "#",
      },
      {
        csv: "#",
      },
      {
        txt: "#",
      },
      {
        api: "#",
      },
    ],
  },
  {
    date: "2023-03-20",
    measurement: "100.00",
    unit: "ppm",
    sensorsName: "SENSOR NAME",
    sensorHref: "/sensors",
    format: [
      {
        ftp: "#",
      },
      {
        csv: "#",
      },
      {
        txt: "#",
      },
      {
        api: "#",
      },
    ],
  },
  {
    date: "2023-03-20",
    measurement: "100.00",
    unit: "ppm",
    sensorsName: "SENSOR NAME",
    sensorHref: "/sensors",
    format: [
      {
        ftp: "#",
      },
      {
        csv: "#",
      },
      {
        txt: "#",
      },
      {
        api: "#",
      },
    ],
  },
  {
    date: "2023-03-20",
    measurement: "100.00",
    unit: "ppm",
    sensorsName: "SENSOR NAME",
    sensorHref: "/sensors",
    format: [
      {
        ftp: "#",
      },
      {
        csv: "#",
      },
      {
        txt: "#",
      },
      {
        api: "#",
      },
    ],
  },
  {
    date: "2023-03-20",
    measurement: "100.00",
    unit: "ppm",
    sensorsName: "SENSOR NAME",
    sensorHref: "/sensors",
    format: [
      {
        ftp: "#",
      },
      {
        csv: "#",
      },
      {
        txt: "#",
      },
      {
        api: "#",
      },
    ],
  },
];

const ChangeLogData = [
  {
    title: "Data",
    description:
      "Minim eu dolore excepteur sit velit culpa labore Lorem laborum adipisicing irure minim officia adipisicing. Velit amet Lorem commodo duis enim Lorem laborum occaecat.",
    href: "#",
  },
  {
    title: "Data",
    description:
      "Minim eu dolore excepteur sit velit culpa labore Lorem laborum adipisicing irure minim officia adipisicing. Velit amet Lorem commodo duis enim Lorem laborum occaecat.",
    href: "#",
  },
  {
    title: "Data",
    description:
      "Minim eu dolore excepteur sit velit culpa labore Lorem laborum adipisicing irure minim officia adipisicing. Velit amet Lorem commodo duis enim Lorem laborum occaecat.",
    href: "#",
  },
  {
    title: "Data",
    description:
      "Minim eu dolore excepteur sit velit culpa labore Lorem laborum adipisicing irure minim officia adipisicing. Velit amet Lorem commodo duis enim Lorem laborum occaecat.",
    href: "#",
  },
];

const Page: React.FC<CollectionProps> = (props) => {
  //For Pagination
  const [pageSize, setPageSize] = useState(48);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableCount, setTableCount] = useState(0);

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

  console.log(props);
  return (
    <Layout>
      {/* Collection Hero */}
      <div className="px-9 uppercase font-bold">Collection:</div>
      <div className="p-9 grid grid-cols-2 gap-8">
        <div className="text-title font-bold">
          {props?.name || "Unknown name"}
        </div>
        <div className="text-p">
          {props?.description || "Unknown description"}
        </div>

        <div className="col-span-2">
          <div className="grid grid-cols-4 gap-1 text-sm">
            <div className="bg-grayDark p-4">
              <div className="uppercase">Source</div>
              <div className="font-bold">
                {props?.source || "Unknown Source"}
              </div>
            </div>
            <div className="bg-grayDark p-4">
              <div className="uppercase">Type</div>
              <div className="font-bold"> {props?.ghg || "Unknown GHG"}</div>
            </div>
            <div className="bg-grayDark p-4 col-span-2 grid grid-cols-2">
              <div>
                <div className="uppercase">State Date</div>
                <div className="font-bold">
                  {" "}
                  {props?.dataStart || "Unknown Start Date"}
                </div>
              </div>
              <div>
                <div className="uppercase">End Date</div>
                <div className="font-bold">
                  {" "}
                  {props?.source || "Unknown End Date"}
                </div>
              </div>
            </div>
            <div className="bg-grayDark p-4">
              <div className="uppercase">Sensor(s)</div>
              <div className="font-bold">
                {" "}
                {props?.sensors || "Unknown Sensors"}
              </div>
            </div>
            <div className="bg-grayDark p-4">
              <div className="uppercase">Site</div>
              <div className="font-bold">
                {" "}
                {props?.sensors || "Unknown Site"}
              </div>
            </div>
            <div className="bg-grayDark p-4 col-span-2 grid grid-cols-2">
              <div>
                <div className="uppercase">Latitude</div>
                <div className="font-bold">
                  {props?.latitude || "Unknown Latitude"}
                </div>
              </div>
              <div>
                <div className="uppercase">Longitude</div>
                <div className="font-bold">
                  {" "}
                  {props?.longitude || "Unknown Longitude"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Anchor Links */}
      <div className="p-9 grid grid-cols-4 gap-8">
        <div className="pt-3 border-t-2 border-black">
          <Link href="#section-measurements">
            <div className="hover:underline">Measurement →</div>
          </Link>
        </div>
        <div className="pt-3 border-t-2 border-black">
          <Link href="#section-api">
            <div className="hover:underline">Our API →</div>
          </Link>
        </div>

        <div className="pt-3 border-t-2 border-black">
          <Link href="#section-changelog">
            <div className="hover:underline">Changelog →</div>
          </Link>
        </div>

        <div className="pt-3 border-t-2 border-black ">
          <Link href="#section-related">
            <div className="hover:underline">Related Collections →</div>
          </Link>
        </div>
      </div>
      {/* Measurements Section */}
      <div className="p-9 grid grid-cols-2 gap-4 bg-grayDark">
        <div className="">
          <div id="section-measurements" className="text-h1 font-bold">
            Measurements
          </div>
          <div className="text-p">
            Minim eu dolore excepteur sit velit culpa labore Lorem laborum
            adipisicing irure minim officia adipisicing. Velit amet Lorem
            commodo duis enim Lorem laborum occaecat. Ipsum occaecat dolor
            deserunt labore et culpa eiusmod est pariatur anim proident
            reprehenderit ullamco laborum id. Laboris laboris cillum enim velit
            consequat est esse excepteur eu enim.
          </div>
        </div>{" "}
        <div className="">
          {/* @gndclouds @FIX logic for statement when no measurement data available */}
          {!MeasurementData[0].date ? (
            <>oop</>
          ) : (
            <>
              <MeasurementTable data={MeasurementData} />
              <Pagination />
            </>
          )}
        </div>
      </div>
      {/* Community Section */}

      <JoinCommunity />
      {/* API / Play Section */}
      <div className="p-9">
        <div id="section-api" className="col-span-4 text-h1 font-bold">
          API
        </div>
      </div>

      {/* Changelog Section */}
      <div className="p-9">
        <div id="section-changelog" className="col-span-4 text-h1 font-bold">
          Changelog
        </div>
        <div className="py-9 snap-x grid grid-cols-4 gap-8">
          {ChangeLogData.map((d, i) => {
            return (
              <Link href="#" key={i}>
                <div className="scroll-ml-6 snap-start">
                  <div className="">{d.title}</div>
                  <div className="">{d.description}</div>
                  <div className="">Arrow →</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Related by tags Section */}

      <div className="p-9">
        <div id="section-related" className="col-span-4 text-h1 font-bold">
          Realted Collections
        </div>

        <SearchAndData dataTable="Collections" filterAndSort={false} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<CollectionProps> = async (
  context
) => {
  const slug = String(
    Array.isArray(context.params?.id)
      ? context.params?.slug[0]
      : context.params?.slug
  );
  // Fetch the data for the collection
  const collection = await prisma.collections.findUnique({
    where: {
      id: slug,
    },
  });

  if (!collection) {
    return {
      notFound: true,
    };
  }

  // Convert createdAt to string representation
  const createdAt = collection.createdAt.toISOString();
  const updatedAt = collection.createdAt.toISOString();

  return {
    props: {
      ...collection,
      createdAt,
      updatedAt,
    },
  };
};

export default Page;
