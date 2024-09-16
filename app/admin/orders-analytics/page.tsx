import React from "react";
import AdminSidebar from "@/app/components/Admin/Sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import OrderAnalytics from "../../../app/components/Admin/Analytics/OrderAnalytics";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      page
      <Heading
        title="Defenzo-Admin"
        description="Elearning is a platform for students to learn and get help from teachers"
        keywords="NDA CDS AFCAT"
      />
      {/* <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <OrderAnalytics />
        </div>
      </div> */}
    </div>
  );
};

export default Page;
