// Card - used for
import React, { useEffect, useState } from "react";

import Router, { useRouter } from "next/router";

const Card: React.FC<{ data: MatterProps }> = ({ data }) => {
  const router = useRouter();

  console.log(router);

  const searchUnitId = data.unitId;
  const [unitName, setUnitName] = useState<any | null>(data.unitId);
  console.log(unitName);

  // const unitAbbrevation = data.unitId ? data.unitId : "unit unknown";

  useEffect(() => {
    fetchData(searchUnitId);
  }, [searchUnitId]);

  async function fetchData(searchByUnitId: string) {
    const unitData = await fetch(`/api/v1/units?unitId=${searchByUnitId}`).then(
      (res) => res.json()
    );
    setUnitName(unitData.abbreviation);
    console.log("fetching");
    console.log(JSON.stringify(unitData));
  }

  return (
    <div
      className="p-3 min-h-full bg-tan rounded text-green border-2 border-green hover:cursor-auto duration-150 hover:translate-x-1 hover:-translate-y-1 transform-gpu"
      onClick={() => {
        router.push({
          pathname: `/[parent]/[child]`,
          query: { parent: "collections", child: data.id },
        });
      }}
    >
      <div className="font-bold">
        {!data.name ? <>{data.measurement}</> : <> {data.name}</>}
      </div>

      <div className="line-clamp-3">
        {!data.description ? <div></div> : <div></div>}
        <div className="font-bold">Symboles</div>
      </div>
    </div>
  );
};

export default Card;
