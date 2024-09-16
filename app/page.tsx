"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
// import Hero1 from "./components/Route/Hero1";
import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";
import Footer from "./components/Footer";
import Hero1 from "./components/Route/Hero1";
import Hero2 from "./components/Route/Hero2";
interface Props {}
const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      <Heading
        title="Defenzo"
        description="A Complete wriiten guidance place"
        keywords="NDA CDS AFCAT WRITTEN"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <Hero1 />
      {/* <Hero1 /> */}
      <Courses />
      <Reviews />
      <Hero2 />
      <Footer />
    </div>
  );
};
export default Page;
