import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type MatterProps = {
  id: number;
  name: string;
  abbrevation: string;
  slug: string;
  dataPoints: string;

  unit: {
    name: string;
    abbrevation: string;
  };
};

const Matter: React.FC<{ data: MatterProps }> = ({ data }) => {
  const unitAbbrevation = data.unit ? data.unit.abbrevation : "unit unknown";
  return (
    <div
      className=""
      onClick={() => Router.push(`/data/${data.slug}`, `/data/${data.slug}`)}
    >
      <div className="font-bold">{data.name}</div>
      <div>{data.name}</div>
      <div>sds</div>
    </div>
  );
};

export default Matter;
