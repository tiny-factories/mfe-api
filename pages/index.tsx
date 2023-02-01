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
  // console.log(selectedOption);

  return (
    <Layout>
      <div className="my-9 col-span-2 h-fit">
        <div className="md:text-subTitle font-bold uppercase">
          increasing aucess to
        </div>
        <div className="text-sectionTitle md:text-title font-bold">
          Decades of Climate data
        </div>
      </div>
      <div className="my-9 col-span-2 border-t-4 bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-subTitle md:text-sectionTitle font-bold uppercase">
            Today’s atmopheric readings
          </div>

          <Link href="/data">
            <div className="text-subTitle md:text-sectionTitle font-bold uppercase font-mono transform-gpu hover:translate-x-2"></div>
          </Link>
        </div>
        <div className="grid sm:grid-cols-4 gap-4">
          <div className="rounded border-2">
            {/* Today's CH₄ Data */}
            {!props.atmosphericReadings[0].ch4 ? (
              <div className="p-3 items-center ">
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
          <div className="rounded border-2">
            {/* Today's CO₂ Data */}
            {!props.atmosphericReadings[1].co2 ? (
              <div className="p-3 items-center">
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
          <div className="rounded border-2">
            {/* Today's N₂O Data */}
            {!props.atmosphericReadings[2].n2o ? (
              <div className="p-3 items-center">
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
          <div className="rounded border-2">
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

      {/*}<div className="my-9 p-9 col-span-2 rounded border bg-[#343339] text-[#DADCE0]">
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
      </div>*/}

      <div className="my-9 col-span-2 border-t-4 bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-subTitle md:text-sectionTitle font-bold uppercase">
            Explore the Data
          </div>

          <Link href="/data">
            <div className="text-subTitle md:text-sectionTitle font-bold uppercase font-mono transform-gpu hover:translate-x-2">
              →
            </div>
          </Link>
        </div>
        <div className="py-6 md:py-9 w-full md:w-1/2 md:text-paragraph">
          Part of out mission is to make earth science data accessible to
          anyone. So that we can be more informed by our actions to reduce out
          impact on the planet.{" "}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-2 rounded hover:cursor-pointer hover:bg-[#343339] hover:text-[#DADCE0]">
            <div className="flex flex-flex-wrap justify-between">
              <div className="font-bold uppercase">Data Sets</div>

              <Link href="/data">
                <div className=" font-bold uppercase font-mono ">→</div>
              </Link>
            </div>
            <div className="">
              We maintain a list of internal and external earth science datasets
              for use with internal tools you can find below, or avaible through
              our api.
            </div>
          </div>
          <div className="p-4 border border-2 rounded hover:cursor-pointer hover:bg-[#343339] hover:text-[#DADCE0]">
            <div className="flex flex-flex-wrap justify-between ">
              <div className="font-bold uppercase">Data Sources</div>

              <Link href="/data">
                <div className=" font-bold uppercase font-mono ">→</div>
              </Link>
            </div>
            <div className="">
              Search through sources bopth public and private to find the data
              you need.
            </div>
          </div>
        </div>
      </div>
      <div className="my-9 col-span-2 border-t-4 bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-subTitle md:text-sectionTitle font-bold uppercase">
            our tools
          </div>

          <Link href="/data">
            <div className="text-subTitle md:text-sectionTitle font-bold uppercase font-mono">
              →
            </div>
          </Link>
        </div>
        <div className="py-6 md:py-9 w-full md:w-1/2 md:text-paragraph">
          Part of out mission is to make earth science data accessible to
          anyone. So that we can be more informed by our actions to reduce out
          impact on the planet.{" "}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-2 rounded hover:cursor-pointer hover:bg-[#343339] hover:text-[#DADCE0]">
            <div className="flex flex-flex-wrap justify-between">
              <div className="font-bold uppercase">Embeding Data Widget</div>

              <Link href="/data">
                <div className="font-bold uppercase font-mono">→</div>
              </Link>
            </div>
            <div className="">
              Create awareness by adding a banner to your website, github, or
              ...
            </div>
          </div>
          <div className="p-4 border border-2 rounded hover:cursor-pointer hover:bg-[#343339] hover:text-[#DADCE0]">
            <div className="flex flex-flex-wrap justify-between">
              <div className="font-bold uppercase">Graph Creator</div>

              <Link href="/data">
                <div className="font-bold uppercase font-mono">→</div>
              </Link>
            </div>
            <div className="">
              Create awareness by adding a banner to your website, github, or
              ...
            </div>
          </div>
        </div>
      </div>

      {/* <div className="my-9  col-span-2 rounded border bg-[#201F25] text-[#DADCE0]">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-9">
            <div className="text-subTitle uppercase">
              {" "}
              Making data more visable
            </div>

            <div className="text-subTitle md:text-sectionTitle font-bold">Widgets & Banners</div>

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

      {/*Pricing Info*/}
      <div className="my-9 p-9 col-span-2 rounded border bg-[#343339] text-[#DADCE0]">
        <div className="uppercase font-bold">Supporting our Team</div>
        <div className="text-subTitle md:text-sectionTitle font-bold uppercase">
          Pricing
        </div>
        <div className="py-6 md:py-9 w-full md:w-1/2 ">
          Although we are working to keep our tools and datasets free for all we
          do need to keep the lights on and allow our team to live their life.
          So we have aunique pricing model. For those who can we{" "}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-6 md:p-9 bg-[#201F25] rounded">
            <div className="flex flex-flex-wrap justify-between">
              <div className="uppercase">Public</div>
              <div className="￼">500+ Account</div>
            </div>
            <div className="￼">$0.00</div>

            <div className="￼">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="￼"></div>

            <div className="￼"></div>
            <Link href="/data">
              <div className="">SignUp</div>
            </Link>
          </div>
          <div className="p-6 md:p-9 bg-[#201F25] rounded">
            <div className="flex flex-flex-wrap justify-between">
              <div className="uppercase">Supporter</div>
              <div className="￼">3/1000 Avaible</div>
            </div>

            <div className="￼">$420.00</div>

            <div className="￼"></div>

            <div className="￼"></div>

            <div className="￼"></div>
            <Link href="/data">
              <div className="">Support</div>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="my-9 col-span-2 border-t-2 bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-subTitle md:text-sectionTitle font-bold uppercase">
            Starter Examples
          </div>

          <Link href="/data">
            <div className="text-subTitle md:text-sectionTitle font-bold uppercase font-mono transform-gpu hover:translate-x-2">
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
      </div> */}
      <div className="p-4 border border-2 rounded">
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/madeforearth"
          method="post"
          target="popupwindow"
          onSubmit="window.open('https://newsletter.madefor.earth', 'popupwindow')"
          className="flex flex-flex-wrap justify-between items-center"
        >
          <label htmlFor="bd-email" className="">
            Subscrube for updates on our API
          </label>
          <input
            type="email"
            name="email"
            id="bd-email"
            placeholder="hello@madefor.earth"
            className="grow outline-none border-0 underline underline-offset-2 bg-[#] mx-4"
          />
          <input type="submit" value="→" />
          <input type="hidden" name="tag" value="API → Feature Updates" />
        </form>
      </div>
    </Layout>
  );
};

export default Home;
