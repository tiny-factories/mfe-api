import type { NextPage } from "next";
import * as React from "react";

import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Map from "../components/Map";

const Home: NextPage = () => {
  const [loading, setLoading] = React.useState(true);
  const handleMapLoading = () => setLoading(false);
  return <></>;
};

export default Home;
