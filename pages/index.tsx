import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "../public/api-mfe-hero.png";

import { ChevronRightIcon, StarIcon } from "@heroicons/react/20/solid";

const Home: NextPage = () => {
  return (
    <>
      <title>API Made For Earth</title>
      <meta property="og:image" content="https://api.madefor.earth/api/og" />
      <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
        <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div className="mt-20">
                <div>
                  {/* <Link href="/blog/hello-world">
                    <a className="inline-flex space-x-4">
                      <span className="rounded bg-green-50 px-2.5 py-1 text-sm font-semibold text-green-600">
                        What&apos;s new
                      </span>
                      <span className="inline-flex items-center space-x-1 text-sm font-medium text-green-600">
                        <span>Just shipped version 1.0.0</span>
                        <ChevronRightIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </Link> */}
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    An API Made for{" "}
                    <span className="text-green-600">Earth</span>
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
                    Humanity has generated a lot of collective knowledge about
                    our planet, and our API focuses on helping us make new
                    meanings of that to accelerate emissions reduction.
                  </p>
                </div>
                <form
                  action="https://buttondown.email/api/emails/embed-subscribe/gndclouds"
                  method="post"
                  target="popupwindow"
                  className="mt-12 sm:flex sm:w-full sm:max-w-lg"
                >
                  <div className="min-w-0 flex-1">
                    <label htmlFor="bd-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="bd-email"
                      className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500"
                      placeholder="Enter your email"
                    />
                    <input type="hidden" name="tag" value="API MFE" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form>

                <div className="mt-6">
                  <div className="inline-flex items-center divide-x divide-gray-300">
                    <div className="min-w-0 flex-1 py-1 text-sm text-gray-500 sm:py-3">
                      <span className="font-medium text-gray-900">
                        Want to contrinute?
                      </span>{" "}
                      <span className="font-medium text-green-600">
                        <Link href="https://community.madefor.earth">
                          <a> Join our Discord Community</a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl  lg:left-80 lg:right-0 lg:w-full" />
                {/* <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  />
                </svg> */}
              </div>
              <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                <div className="w-full rounded-md  lg:h-full lg:w-auto lg:max-w-none">
                  <Image
                    src={HeroImage}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
