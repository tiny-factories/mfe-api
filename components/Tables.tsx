// Tables
import React from "react";

const Table: React.FC<{ data: MatterProps }> = ({ data }) => {
  console.log(data);
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th> {!data.name ? <>Measurement</> : <> Name</>}</th>
          <th>Abbreviation</th>
          <th>Site</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => {
          return (
            <tr key={i} className="">
              <td> {!d.name ? <>{d.measurement}</> : <> {d.name}</>}</td>
              <td>{d.abbreviation}</td>
              <td>{d.site}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
