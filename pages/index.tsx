import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Select from "react-select";
import Term, { TermProps } from "../components/Term";

import Layout from "../components/Layout";

import widgetImage from "../public/widget.png";
import bannerImage from "../public/banner.png";

const options = [
  {
    value: `[
      {"ch4":{"measurement":["1895.32"]}},
      {"co2":{"measurement":["414.73"]}},
      {"n2o":{"measurement":["333.03"]}},
      {"sf6":{"measurement":["10.63"]}}
    ]`,
    label: "/today",
  },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const getStaticProps: GetStaticProps = async () => {
  const apiToday = await fetch("http://api.madefor.earth/api/today");
  const todaysatmosphericReadings = await apiToday.json();

  let atmosphericReadings = Object.values(todaysatmosphericReadings);

  return {
    props: {
      atmosphericReadings,
    },
    revalidate: 10,
  };
};

type Props = {
  atmosphericReadings: TermProps[];
  group: string;
};

const Home: NextPage = (props) => {
  const [loading, setLoading] = React.useState(true);
  const handleMapLoading = () => setLoading(false);
  const [selectedOption, setSelectedOption] = useState({
    value: `[
        {"ch4":{"measurement":["1895.32"]}},
        {"co2":{"measurement":["414.73"]}},
        {"n2o":{"measurement":["333.03"]}},
        {"sf6":{"measurement":["10.63"]}}
      ]`,
    label: "/today",
  });
  console.log(selectedOption);

  return (
    <Layout>
      <div className="my-9 col-span-2 h-screen">
        <div className="text-subTitle uppercase">increasing aucess to</div>
        <div className="text-title font-bold">Decades of Climate data</div>
      </div>
      <div className="my-9 col-span-2 border-t bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-sectionTitle font-bold uppercase">
            Today’s atmopheric readings
          </div>

          <Link href="/data">
            <div className="text-sectionTitle font-bold uppercase font-mono transform-gpu hover:translate-x-2">
              →
            </div>
          </Link>
        </div>
        <div className="grid sm:grid-cols-4 gap-4">
          <div className="rounded border ">
            {/* Today's CH₄ Data */}
            {!props.atmosphericReadings[0].ch4 ? (
              <div className="p-3 items-center  ">
                <span className="font-bold">CH₄</span> is{" "}
                <span className="animate-pulse">loading</span>
              </div>
            ) : (
              <div className="p-3  items-center">
                <div className="">CH₄</div>{" "}
                <div className="font-bold">
                  {props.atmosphericReadings[1].co2.measurement}ppt{" "}
                </div>
              </div>
            )}
          </div>
          <div className="rounded border ">
            {/* Today's CO₂ Data */}
            {!props.atmosphericReadings[1].co2 ? (
              <div className="p-3 items-center  ">
                <span className="font-bold">CO₂</span> is{" "}
                <span className="animate-pulse">loading</span>
              </div>
            ) : (
              <div className="p-3  items-center">
                <div className="">CO₂</div>{" "}
                <div className="font-bold">
                  {props.atmosphericReadings[1].co2.measurement}ppm{" "}
                </div>
              </div>
            )}
          </div>

          <div className="rounded border ">
            {/* Today's N₂O Data */}
            {!props.atmosphericReadings[2].n2o ? (
              <div className="p-3 items-center  ">
                <span className="font-bold">N₂O</span> is{" "}
                <span className="animate-pulse">loading</span>
              </div>
            ) : (
              <div className="p-3  items-center">
                <div className="">N₂O</div>{" "}
                <div className="font-bold">
                  {props.atmosphericReadings[2].n2o.measurement}???{" "}
                </div>
              </div>
            )}
          </div>

          <div className="rounded border ">
            {/* Today's SF₆ Data */}

            {!props.atmosphericReadings[3].sf6 ? (
              <div className="p-3 items-center  ">
                <span className="font-bold">SF₆</span> is{" "}
                <span className="animate-pulse">loading</span>
              </div>
            ) : (
              <div className="p-3  items-center">
                <div className="">SF₆</div>{" "}
                <div className="font-bold">
                  {props.atmosphericReadings[3].sf6.measurement}???{" "}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="my-9 p-9 col-span-2 rounded border bg-black-200">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="">
            <div className="text-subTitle uppercase">test drive out api</div>
            <div className="text-sectionTitle font-bold ">
              {selectedOption.label}
            </div>
            <div className="text-paragraph">
              Our api offers spercial api routes for the most common emissions
              querries.{" "}
            </div>
            <div className=" ">
              /today for example gives you the latest global greenhouse gass and
              climate averages for our planet.
            </div>
            <div className=" ">Read the ...</div>
          </div>
          <div className="">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
            <div>/api/{selectedOption.value}</div>
          </div>
        </div>
      </div>

      <div className="my-9 col-span-2 border-t bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-sectionTitle font-bold uppercase">the Data </div>

          <Link href="/data">
            <div className="text-sectionTitle font-bold uppercase font-mono transform-gpu hover:translate-x-2">
              →
            </div>
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="">Data Sets</div>
          <div className="">Data Source</div>
        </div>
      </div>
      <div className="my-9 col-span-2 border-t bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-sectionTitle font-bold uppercase">our tools</div>

          <Link href="/data">
            <div className="text-sectionTitle font-bold uppercase font-mono transform-gpu hover:translate-x-2">
              →
            </div>
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="">Banner Creator</div>
          <div className="">Graph Creator</div>
        </div>
      </div>

      {/* <div className="my-9  col-span-2 rounded border bg-[#201F25] text-[#DADCE0]">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-9">
            <div className="text-subTitle uppercase">
              {" "}
              Making data more visable
            </div>

            <div className="text-sectionTitle font-bold">Widgets & Banners</div>

            <div className="text-paragraph">
              Want to help spead the word on the current health of out planet?
              Then embed or link back to api.madefor.earth with our emissions
              widget or banner.
            </div>
          </div>

          <div className="">
            <Image
              alt="Mountains"
              src={widgetImage}
              width={740}
              height={303}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="px-9">
          <Image
            alt="Mountains"
            src={bannerImage}
            width={1381}
            height={303}
            sizes="100vw"
          />
        </div>
      </div> */}

      <div className="my-9 col-span-2 border-t bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-sectionTitle font-bold uppercase">
            Starter Examples
          </div>

          <Link href="/data">
            <div className="text-sectionTitle font-bold uppercase font-mono transform-gpu hover:translate-x-2">
              →
            </div>
          </Link>
        </div>
        <div className="grid sm:grid-cols-4 gap-4">
          <div className="">1</div>
          <div className="">2</div>

          <div className="">3</div>

          <div className="">4</div>
        </div>
      </div>
      <div className="my-9 col-span-2 rounded border bg-black-200">
        Newsletter
      </div>
    </Layout>
  );
};

export default Home;
