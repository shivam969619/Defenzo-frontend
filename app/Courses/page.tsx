"use client";
import React, { FC, useState } from "react";
import Heading from "../utils/Heading";
// import Hero1 from "./components/Route/Hero1";
import Header from "../components/Header";
import Courses from "../components/Route/Courses";
import Footer from "../components/Footer";
interface Props {}
const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(4);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      <Heading
        title="Defenzo"
        description="A Complete wriiten guidance place"
        keywords="NDA CDS AFCAT WRITTEN "
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <div className="min-h-screen">
        <Courses />
      </div>
      <Footer />
    </div>
  );
};
export default Page;
