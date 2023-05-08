// DataGalleryVire
import React from "react";
import Card from "./Card";

const GalleryView = ({ data }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {data.map((d, i) => {
        return (
          <div key={i} className="col-span-12 sm:col-span-6 md:col-span-4">
            <Card data={d} />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryView;
