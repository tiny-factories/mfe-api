import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/PageHero";

type Props = {};

const Page: React.FC<Props> = () => {
  return (
    <Layout>
      <Hero subtitle="sub" title="unit" description="" color="" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center px-6 py-4 ">
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
      </div>
    </Layout>
  );
};

export default Page;
