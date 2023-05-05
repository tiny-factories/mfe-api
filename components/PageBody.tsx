import React, { ReactNode, useEffect, useState } from "react";

import useDebounce from "../hooks/useDebounce";

export default function SearchDataGrid({ data }) {
  const [loading, setLoading] = React.useState(true);
  const [notices, setNotices] = useState<Notice[]>([]);

  const [search, setSearch] = useState<string | null>(null);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    // search the api

    async function fetchData() {
      setLoading(true);

      setNotices([]);

      const data = await fetch(
        `/api/search?searchString=${debouncedSearch}`
      ).then((res) => res.json());
      setNotices(data);
      setLoading(false);
    }

    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

  return (
    <div className="">
      <div className="">explore</div>

      <div className="">
        Non eiusmod et minim ullamco laboris veniam. Culpa adipisicing eiusmod
        magna sunt. Ipsum elit ad dolor et id magna pariatur enim proident culpa
        cupidatat ut aliquip ut ea. Laborum eiusmod aute ullamco et non.
        Occaecat incididunt sunt est cillum deserunt et. Adipisicing veniam
        veniam est laborum laborum.
      </div>
      <div className="">
        <div className="w-full">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
           Icon
         </div> */}
            <input
              id="search"
              name="search"
              className="block w-full rounded-md border-none focus:border-gray-300 bg-[#E9E9E9] text-sm placeholder-gray-500 "
              placeholder="Search for terms, agencies, treaties, emissions … "
              type="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="">
        {!search && (
          <div className="grid grid-cols-12 gap-4">
            {data.feed.map((data, i) => (
              <div
                key={i}
                className="col-span-12 sm:col-span-6 md:col-span-4 p-3 rounded border bg-black-200"
              >
                <Card data={data} />
              </div>
            ))}
          </div>
        )}
        <div className="grid grid-cols-12 gap-4">
          {notices.map((data, i) => {
            return (
              <div
                key={i}
                className="col-span-12 sm:col-span-6 md:col-span-4 p-3 rounded border bg-black-200"
              >
                <Card data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Card: React.FC<{ data: MatterProps }> = ({ data }) => {
  const unitAbbrevation = data.unit ? data.unit.abbrevation : "unit unknown";
  return (
    <div
      className=""
      onClick={() => Router.push(`/data/${data.slug}`, `/data/${data.slug}`)}
    >
      <div className="font-bold">{data.name}</div>
      <div>{data.measurement}</div>
      <div>sds</div>
    </div>
  );
};
