"use client";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import AdminSidebar from "@/app/components/Admin/Sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import React from "react";
import Editfaq from "../../components/Admin/Customization/EditFaq";
type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Defenzo-Admin"
          description="Elearning is a platform for students to learn and get help from teachers"
          keywords="NDA CDS AFCAT"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5 ">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHeader />
            <Editfaq />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
