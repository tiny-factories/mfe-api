import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen ">
      <Head>
        <title>API Made for Earth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 ">
        <h1 className="text-6xl font-bold">
          API Made for <span className="text-[#007d00]">Earth</span>
        </h1>
      </main>
    </div>
  );
};

export default Home;
