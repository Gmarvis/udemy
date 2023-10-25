import React from "react";

type Props = {};

const ListItems = (props: Props) => {
  return (
    <div className="text-white bg-black">
      <div className="w-1/2 bg-violet mx-auto">
        <h1 className="py-6 font-semibold text-4xl leading-normal">My Learning</h1>
        <div className="flex gap-5 text-base font-semibold py-4">
          <h3>All courses</h3>
          <h3>My Lists</h3>
          <h3>Whishlist</h3>
          <h3>Archived</h3>
          <h3>Learning tools</h3>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
