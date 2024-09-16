import React from "react";
// import AdminSidebar from "@/app/components/Admin/Sidebar/AdminSidebar";
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar";
// import Heading from "@/app/utils/Heading";
import Heading from "../../utils/Heading";
import CourseAnalytics from "../../components/Admin/Analytics/CourseAnalytics";
import DashboardHeader from "../../components/Admin/DashboardHeader";
type Props = {};

const page = (props: Props) => {
  return(
  <div>
    page
    <Heading
      title="Defenzo-Admin"
      description="Elearning is a platform for students to learn and get help from teachers"
      keywords="NDA CDS AFCAT"
    />
    <div className="flex">
      {/* <div className="1500px:w-[16%] w-1/5">
        <AdminSidebar />
      </div>
      <div>
        <DashboardHeader />
        <CourseAnalytics />
      </div> */}
    </div>
  </div>
  );
};

export default page;
