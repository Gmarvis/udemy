

import React, { forwardRef } from "react";

interface CoursePopopProps extends React.ComponentPropsWithoutRef<"div"> {
  onClick(): void;
}

const CoursePopop = forwardRef<HTMLDivElement, CoursePopopProps>(
  (props, ref) => (
    <div ref={ref} onClick={props.onClick}>
      {props.children}
    </div>
  )
);

CoursePopop.displayName = "CoursePopop";

export default CoursePopop;
