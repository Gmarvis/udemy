import React from "react";

type Props = {};

const MyCourses = (props: Props) => {
  return (
    <div className="text-white bg-black">
      <h1>My Learning</h1>
      <div className="flex">
        <h3>All courses</h3>
        <h3>My Lists</h3>
        <h3>Whishlist</h3>
        <h3>Archived</h3>
        <h3>Learning tools</h3>
      </div>
    </div>
  );
};

export default MyCourses;
