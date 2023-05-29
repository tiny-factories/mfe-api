// Tables
import React from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

const Table: React.FC<{ data: MatterProps }> = ({ data }) => {
  const router = useRouter();

  return (
    <table className="table-auto text-left">
      <thead>
        <tr>
          <th className="cursor-auto">
            {!data.name ? <>Measurement</> : <> Name</>}
          </th>
          <th>Site</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => {
          return (
            <tr
              key={i}
              onClick={() => {
                router.push({
                  pathname: `/[parent]/[child]`,
                  query: { parent: "collections", child: data.id },
                });
              }}
            >
              <td> {!d.name ? <>{d.measurement}</> : <> {d.name}</>}</td>

              <td>{d.site}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// Used on collection/slug pages
export const MeasurementTable: React.FC<{ data: MatterProps }> = ({ data }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr className="font-bold">
          <th>Date</th>
          <th>Measurement</th>
          <th>Sensor</th>
          <th>Formats</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => {
          return (
            <tr key={i} className="">
              <td>
                {d.measurement}
                {d.unit}
              </td>
              <td>{d.measurement}</td>
              <td>{d.measurement}</td>
              <td>
                {!d.format[0] ? (
                  <></>
                ) : (
                  <>
                    {" "}
                    <Link href={d.format[0]}>FTP →</Link>
                  </>
                )}

                {!d.format[1] ? (
                  <></>
                ) : (
                  <>
                    {" "}
                    <Link href={d.format[1]}>CSV ↓</Link>
                  </>
                )}

                {!d.format[2] ? (
                  <></>
                ) : (
                  <>
                    {" "}
                    <Link href={d.format[2]}>TXT ↓</Link>
                  </>
                )}

                {!d.format[3] ? (
                  <></>
                ) : (
                  <>
                    {" "}
                    <Link href={d.format[3]}>API →</Link>
                  </>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
