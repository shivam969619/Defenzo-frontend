"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer";
type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(7);
  const [route, setRoute] = useState("Login");
  return (
    <>
      <Heading
        title="FAQ -Defenzo"
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
      <FAQ />
      <Footer />
    </>
  );
};

export default Page;
