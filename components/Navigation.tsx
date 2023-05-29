import Head from "next/head";
import Link from "next/link";

export type SearchProps = {
  id: string;
  title: string;
};

const navigation = [
  { name: "Data", href: "/collections" },
  { name: "Docs", href: "/docs" },
  { name: "Account", href: "/account" },

];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <>
      <Head>
        <title>Data Made for Earth [alpha]</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="m-9 text-h4 rounded-lg bg-white">
        <div className="relative flex justify-between ">
          <Link href="/">
            <div className="px-8 flex flex-shrink-0 items-center font-bold hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer">
              {process.env.UMAMI != "DEVELOPMENT" ? (
                <>
                  <span className="uppercase text-[]">Data.</span>
                </>
              ) : (
                <>
                  <span className="uppercase">Data.</span>
                </>
              )}
            </div>
          </Link>
          <div className="min-w-0 flex-1">
            <div className="flex items-center py-2">
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
                    className="block w-full rounded-md border-none focus:border-none bg-grayLight text-sm placeholder-gray-500 "
                    placeholder="Search for terms, agencies, treaties, emissions … "
                    type="search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex pl-8">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-shrink-0 items-center">
                <Link href={item.href}>
                  <div className="cursor-pointer pr-8 hover:underline hover:underline-offset-4 hover:decoration-2">
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
