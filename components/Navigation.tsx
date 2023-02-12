"use client";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { useUser } from "../utils/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Menu, Transition } from "@headlessui/react";

import { signOut } from "next-auth/react";
export type SearchProps = {
  id: string;
  title: string;
};

const navigation = [{ name: "Data", href: "/data" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Climate Glossary [a]</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mx-auto py-1">
        <div className="relative flex justify-between ">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <div className="font-bold hover:underline">
                  <span className="">API.</span>
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="min-w-0 flex-1 ">
      <div className="flex items-center px-6 py-4 ">
        <div className="w-full">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative"></div>
        </div>
      </div>
      </div> */}
          <div className="flex ">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-shrink-0 items-center">
                <Link href={item.href}>
                  <div className=" hover:underline pr-3">{item.name}</div>
                </Link>
              </div>
            ))}
            <div className="flex flex-1 justify-end space-x-8">
              {user ? (
                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      {/* <Image
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=50&h=50&q=80"
            alt=""
            /> */}
                      Account
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/a">
                            <div
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            onClick={async () => {
                              await supabaseClient.auth.signOut();
                              router.push("/signin");
                            }}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </span>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link href="/account">
                  <div>Account</div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
