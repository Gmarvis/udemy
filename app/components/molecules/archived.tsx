import React from "react";

type Props = {};

const Archived = (props: Props) => {
  return (
    <div className="text-center">
      <h2 className="font-semibold text-lg pb-3">Focus on only the courses that matter to you.</h2>
      <p><a className="underline text-violet" href="/home/my-courses">Go to the all Courses </a>to the archive.</p>
    </div>
  );
};

export default Archived;
