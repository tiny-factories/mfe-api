import React from "react";
import Link from "next/link";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type SourcesProps = {
  id: number;
  name: string;
  abbreviation: string;
  description: string;
  websiteHref: string;
  dataHref: string;
};

const Sources: React.FC<{ data: SourcesProps }> = ({ data }) => {
  const unitAbbrevation = data.unit ? data.unit.abbrevation : "unit unknown";
  return (
    <div
      className=""
      onClick={() =>
        Router.push(
          `/data/${data.matterSlug}/[id]`,
          `/data/${data.matterSlug}/${data.id}`
        )
      }
    >
      <div className="font-bold">{data.name}</div>
      <div>{data.matterSlug}</div>
      <div>
        {data.websiteHref && (
          <Link href={data.websiteHref}>
            <a>Website ↗</a>
          </Link>
        )}
        {data.dataHref && (
          <Link href={data.dataHref}>
            <a>Data ↗</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sources;
