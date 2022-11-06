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
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Data;
