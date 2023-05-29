// DataGalleryVire
import React from "react";
import Card from "./Card";

const GalleryView = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((d, i) => {
        return (
          <div
            key={i}
            className="col-span-2 sm:col-span-2 lg:col-span-1 rounded border bg-green text-tan"
          >
            <Card data={d} />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryView;
