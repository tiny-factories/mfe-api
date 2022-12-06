import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Data", href: "/data" },
  { name: "Docs", href: "" },
  { name: "Explorer", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <div className="block h-8 w-auto lg:hidden">
                    <Link href="/">
                      <a>
                        {" "}
                        API Made for{" "}
                        <span className="text-[#007d00]">Earth</span>
                      </a>
                    </Link>
                  </div>
                  <div className="hidden h-8 w-auto lg:block">
                    <Link href="/">
                      <a>
                        API Made for{" "}
                        <span className="text-[#007d00]">Earth</span>
                      </a>
                    </Link>
                  </div>
                  {/* <img
					className="block h-8 w-auto lg:hidden"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
					alt="Your Company"
				  />
				  <img
					className="hidden h-8 w-auto lg:block"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
					alt="Your Company"
				  /> */}
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a>{item.name}</a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="https://buttondown.email/madeforearth">
                    <a>Newsletter</a>
                  </Link>
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium"
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as="a" href={item.href}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}