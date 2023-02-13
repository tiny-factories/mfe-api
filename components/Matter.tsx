import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type MatterProps = {
  id: number;
  name: string;
  abbreviation: string;
  slug: string;
  description: string;
  dataPoints: string;
  unit: {
    name: string;
    abbrevation: string;
  };
};

const Matter: React.FC<{ data: MatterProps }> = ({ data }) => {
  const unitAbbreviation = data.unit ? data.unit.abbreviation : "unit unknown";
  return (
    <div
      className=""
      onClick={() => Router.push(`/data/${data.slug}`, `/data/${data.slug}`)}
    >
      <div className="font-bold">{data.name}</div>
      <div className="">{data.abbreviation}</div>
    </div>
  );
};

export default Matter;
