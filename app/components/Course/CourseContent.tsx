import { useGetCourseContentQuery } from "@/redux/features/courses/coursesApi";
import React, { useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import CourseContentMedia from "./CourseContentMedia";
import Header from "../Header";
import CourseContentList from "./CourseContentList";

type Props = {
  id: string;
  user: any; // Add user type if possible for better TypeScript validation
};

const CourseContent = ({ id, user }: Props) => { // Destructure user here
  const { data: contentData, isLoading, error } = useGetCourseContentQuery(id);
  const data = contentData?.content;
  const [activeVideo, setActiveVideo] = useState(0);
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");

  if (isLoading) {
    return <Loader />;
  }

  if (error || !data) {
    return <div>Error loading course content</div>;
  }

  return (
    <>
      <Header
        activeItem={1}
        open={open}
        setOpen={setOpen}
        route={route}
        setRoute={setRoute}
      />
      <div className="w-full grid 800px:grid-cols-10">
        <Heading
          title={data?.[activeVideo]?.title || "Default Title"}
          description="anything"
          keywords={data?.[activeVideo]?.tags || []}
        />
        <div className="col-span-7">
          <CourseContentMedia
            data={data}
            id={id}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
            user={user} // Pass user prop here
          />
        </div>
        <div className="hidden 800px:block 800px:col-span-3">
          <CourseContentList
            data={data}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
          />
        </div>
      </div>
    </>
  );
};

export default CourseContent;
