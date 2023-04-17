import type { NextPage } from "next";
import * as React from "react";

import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Map from "../components/Map";
import HeroAnimation from "../components/animations/TextAnimations"

const Home: NextPage = () => {
  const [loading, setLoading] = React.useState(true);
  const handleMapLoading = () => setLoading(false);
  return (
    <Layout>
      <div className="text-center uppercase font-bold text-green">
        <div className="text-h3">We are unlocking</div>

        <div className="text-title">Decades of Climate Data for <HeroAnimation/></div>
      </div>
      <div className="">Search</div>
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
            className="grow outline-none border-0 underline underline-offset-2 mx-4"
          />
          <input type="submit" value="→" />
          <input type="hidden" name="tag" value="API → Feature Updates" />
        </form>
      </div>
    </Layout>
  );
};

export default Home;
