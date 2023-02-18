"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import Table from "./Table";

const tabsData = [
  {
    label: "Yearly",
    href: "/data/co2/?table=yearly",
    component: "d",
  },
  {
    label: "Monthly",
    href: "/data/co2/?table=monthly",
    component:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
  {
    label: "Weekly",
    href: "/data/co2/?table=weekly",
    component:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
  {
    label: "Daily",
    href: "/data/co2/?table=daily",
    component: "TableDaily",
  },
];

export default function Tables({ data }) {
  // console.log(data);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const searchParams = useSearchParams();
  const table = searchParams.get("table");

  // var YearlyData = data.records.filter(function(itm){
  //   return empIds.indexOf(itm.empid) > -1;
  // });

  // var YearlyData = data.filter(data.published === TRUE);
  // var MonthlyData = data.records.filter(function(itm){
  //   return empIds.indexOf(itm.empid) > -1;
  // });
  // var WeeklyData = data.records.filter(function(itm){
  //   return empIds.indexOf(itm.empid) > -1;
  // });
  // var DailyData = data.records.filter(function(itm){
  //   return empIds.indexOf(itm.empid) > -1;
  // });

  return (
    <div>
      <div className="flex space-x-3 border-b">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, i) => {
          return (
            <Link
              href={tab.href}
              key={i}
              className={`py-2 border-b-4 transition-colors duration-300 ${
                i === activeTabIndex
                  ? "border-teal-500"
                  : "border-transparent hover:border-gray-200"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(i)}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className=""></div>
    </div>
  );
}
