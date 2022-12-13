import type { NextPage } from "next";
import * as React from "react";

import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Map from "../components/Map";

const Home: NextPage = () => {
  const [loading, setLoading] = React.useState(true);
  const handleMapLoading = () => setLoading(false);
  return (
    <Layout>
      <title>API Made For Earth</title>
      <meta property="og:image" content="https://api.madefor.earth/api/og" />
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 h-96 p-9 rounded border bg-black-200">
          <div className="flex flex-wrap col-span-4 h-96">
            <div className="w-full sm:w-1/2">
              <div className="">we are unlocking</div>

              <div className="text-h1">Decades of Climate Data</div>
              <div>
                We are streamlining aucess to past and present claimte data to
                allow the next generation of climate activiests, scientties,
                procrod cfrators, and … to make their best work. Through this
                efforst we want to help build products for the next 3
                generations
              </div>
            </div>
            <div className="w-full sm:w-1/2">Globe</div>
          </div>
        </div>
        <div className="col-span-2 h-96 p-9 rounded border bg-black-200">
          02
        </div>
        <div className="col-span-2 h-96 rounded border bg-black-200">
          <Map
            initialOptions={{ center: [38.0983, 55.7038] }}
            onLoaded={handleMapLoading}
          />
        </div>
        <div className="col-span-4 h-96 p-9 rounded border bg-black-200">
          04
        </div>
        <div className="col-span-4 h-96 p-9 rounded border bg-black-200">
          05
        </div>
        <div className="col-span-2 h-96 p-9 rounded border bg-black-200">
          Widget
        </div>
        <div className="col-span-1 h-96 p-9 rounded border bg-black-200">
          07
        </div>
        <div className="col-span-1 h-96 p-9 rounded border bg-black-200">
          07
        </div>
        <div className="col-span-1 h-96 p-9 rounded border bg-black-200">
          07
        </div>
        <div className="col-span-1 h-96 p-9 rounded border bg-black-200">
          07
        </div>
        <div className="col-span-4 h-96 p-9 rounded border bg-black-200">
          Newsletter
        </div>
      </div>
    </Layout>
  );
};

export default Home;
