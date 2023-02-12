import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type DataProps = {
  id: number;
  measurement: string;
  unit: {
    name: string;
    abbrevation: string;
  };
  matter: {
    name: string;
    abbrevation: string;
    slug: string;
  };
  matterSlug: string;
  published: boolean;
};
export type matterPageDataProps = {
  id: number;
  name: string;
  abbreviation: string;
  description: string;
  slug: string;
};

const Data: React.FC<{ data: DataProps }> = ({ data }) => {
  const unitAbbrevation = data.unit ? data.unit.abbrevation : "unit unknown";
  return (
    <div
      onClick={() =>
        Router.push(
          `/data/${data.matterSlug}/[id]`,
          `/data/${data.matterSlug}/${data.id}`
        )
      }
    >
      <h2>{data.measurement}</h2>
      <small>{data.matterSlug}</small>
    </div>
  );
};

export default Data;
