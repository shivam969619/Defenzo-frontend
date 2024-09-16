import React, { FC } from "react";
import Image from "next/image"; // Use Next.js Image component
import { motion } from "framer-motion"; // Import Framer Motion
import Link from "next/link";

// Define types for the props
type Props = {
  complogo: any; // Assuming it's a string URL
  text1: string;
  text2: string;
  personphoto: any; // Assuming it's a string URL
  personname: string;
  persondesignation: string;
};

const Hero1: FC<Props> = ({
  complogo,
  text1,
  text2,
  personphoto,
  personname,
  persondesignation,
}) => {
  return (
    <>
      <div className="md:w-[500px] md:h-[500px] w-[450px] h-[450px] border border-t-1 bg-white mt-[20px] text-black ">
        <div className="pt-[40px] pl-[30px]">
          {/* Use Next.js Image component for optimized images */}
          <Image src={complogo} alt="Company Logo" width={100} height={100} />
        </div>
        <div className="pt-[30px] pl-[30px] mr-[20px]">
          <div className="font-bold text-2xl">{text1}</div>
          <div className="font-semibold text-xl  pt-[6px]">{text2}</div>
        </div>
        <div className="md:pt-[30px] pl-[30px] pt-[20px] flex">
          <div className="h-[60px] w-[60px] ">
            {/* Use Image component for person photo */}
            <Image
              src={personphoto}
              alt="Person Photo"
              className="rounded-full"
              width={60}
              height={60}
            />
          </div>
          <div className="pl-[6px]">
            <div className="font-semibold text-xl ">{personname}</div>
            <div className="">{persondesignation}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;
