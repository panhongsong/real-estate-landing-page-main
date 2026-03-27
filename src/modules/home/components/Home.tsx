import React, { lazy } from "react";

import VideoPlayer from "./VideoPlayer";
import Contact from "./Contact";
import About from "./About";
import Products from "./Products";
import Quality from "./Quality";
import Application from "./Application";
import News from "./News";

const Customers = lazy(() => import("./Customers"));
const Headline = lazy(() => import("./Headline"));
const Rent = lazy(() => import("./Rent"));

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      <Headline />
      <Products />
      <Quality />
      <Application />
      <News />
      <Contact />
      {/* <About />
      <VideoPlayer />
      <Rent />
      <Customers /> */}
    </div>
  );
}