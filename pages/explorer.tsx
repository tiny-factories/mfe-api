import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import HeroImage from "../public/api-mfe-hero.png";

import { ChevronRightIcon, StarIcon } from "@heroicons/react/20/solid";

const Home: NextPage = () => {
  return (
    <Layout>
      <title>API Made For Earth</title>
      <meta property="og:image" content="https://api.madefor.earth/api/og" />
      <div>Its a map</div>
    </Layout>
  );
};

export default Home;
