import Head from "next/head";
import Link from "next/link";

export type SearchProps = {
  id: string;
  title: string;
};

const navigation = [
  { name: "Collections", href: "/collections" },
  { name: "Sensors", href: "/sensors" },
];

export default function Navigation() {
  return (
    <>
      <Head>
        <title>Climate Glossary [a]</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mx-auto py-3 px-3">
        <div className="relative flex justify-between rounded-lg bg-[#ffffff]">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <div className="font-bold hover:underline hover:underline-offset-4 hover:decoration-2">
                  {process.env.UMAMI != "DEVELOPMENT" ? (
                    <>
                      <span className="uppercase">[DEV] API</span>
                    </>
                  ) : (
                    <>
                      <span className="uppercase">Earth &apos; s API</span>
                    </>
                  )}
                </div>
              </Link>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center px-3 py-2">
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
                    className="block w-full rounded-md border-none focus:border-none bg-[#EEEDE6] text-sm placeholder-gray-500 "
                    placeholder="Search for terms, agencies, treaties, emissions … "
                    type="search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex ">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-shrink-0 items-center">
                <Link href={item.href}>
                  <div className="pr-3 hover:underline hover:underline-offset-4 hover:decoration-2">
                    {item.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
