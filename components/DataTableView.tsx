// DataTableView.js
import React from "react";
import Table from "./Tables";

const TableView = ({ data }) => {
  return (
    <div className="">
      <Table data={data} />
    </div>
  );
};

export default TableView;
