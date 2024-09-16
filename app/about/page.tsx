"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import About from "./About";
import Footer from "../components/Footer";
type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");
  return (
    <>
      <Heading
        title="About us-Elearning"
        description="Elearning is a learning management system for helping programmers."
        keywords="programing,mern"
      />
      <Header
        open={open}
        setOpen={setOpen}
        setRoute={setRoute}
        activeItem={activeItem}
        route={route}
      />
      <About />
      <Footer />
    </>
  );
};

export default Page;
