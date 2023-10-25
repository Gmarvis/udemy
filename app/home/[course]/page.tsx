import ListItems from "@/app/components/molecules/list-item-courses";
import Footer from "@/app/components/organisms/footer-logout";
import MyLearningNavbar from "@/app/components/organisms/my-learning-nav";
import React from "react";

type Props = {};

const MyLearning = (props: Props) => {
  return (
    <div>
      <MyLearningNavbar/>
      <ListItems />
      <div className="h-1/2 py-50">
        <p>My learnings</p>
      </div>
      <Footer />
    </div>
  );
};

export default MyLearning;
