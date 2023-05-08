// Tables
import React from "react";

const Table: React.FC<{ data: MatterProps }> = ({ data }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, i) => {
          return (
            <tr key={i} className="">
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
