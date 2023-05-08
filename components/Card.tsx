// Card - used for

import React from "react";
import Router from "next/router";

const Card: React.FC<{ data: MatterProps }> = ({ data }) => {
  const unitAbbrevation = data.unit ? data.unit.abbrevation : "unit unknown";
  return (
    <div
      className="p-3 min-h-full bg-tan rounded text-green border-2 border-green hover:cursor-auto duration-150 hover:translate-x-1 hover:-translate-y-1 transform-gpu"
      onClick={() => Router.push(`/data/${data.slug}`, `/data/${data.slug}`)}
    >
      <div className="font-bold">{data.name}</div>
      <div>{data.measurement}</div>
      <div>sds</div>
    </div>
  );
};

export default Card;
