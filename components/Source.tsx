import React from "react";
import Link from "next/link";
import Router from "next/router";

export type SourcesProps = {
  id: number;
  name: string;
  abbreviation: string;
  description: string;
  websiteHref: string;
  dataHref: string;
  thingsMeasured: {
    id: number;
    name: string;
    abbrevation: string;
    slug: string;
  };
};

const Sources: React.FC<{ data: SourcesProps }> = ({ data }) => {
  return (
    <div className="">
      <div className="font-bold">{data.name}</div>
      <div className="">Description</div>
      <div className="">Measured:</div>

      <div>{data.thingsMeasured && <>cats</>}</div>
      <div>
        {data.websiteHref && (
          <Link href={data.websiteHref}>
            <div>Website ↗</div>
          </Link>
        )}
        {data.dataHref && (
          <Link href={data.dataHref}>
            <div>Data ↗</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sources;
