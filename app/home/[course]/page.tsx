import MyCourses from "@/app/components/molecules/my-courses";
import Footer from "@/app/components/organisms/footer-logout";
import LogiNav from "@/app/components/organisms/login-navbar";
import React from "react";

type Props = {};

const MyLearning = (props: Props) => {
  return (
    <div>
      <LogiNav />
      <MyCourses />
      <div className="h-10">
        <p>Hello guys</p>
      </div>
      <Footer />
    </div>
  );
};

export default MyLearning;
