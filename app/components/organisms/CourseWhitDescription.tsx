// import React, { useState } from "react";
// import { Popover } from "react-tiny-popover";
// import CoursePopop from "../atoms/Coursepopop";
// import { courseData, responsive } from "@/public/data/dummydata";
// import CourseCard from "./CourseCard";
// import CouseContent from "./CouseContent";

// const CourseComponent= ({...item}) => {
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);
//   return (
//     <Popover
//       isOpen={isPopoverOpen}
//       content={
//         <div>
//           {" "}
//           <CouseContent />
//         </div>
//       }
//       positions={["top", "right", "left", "bottom"]}
//     >
//       <CoursePopop onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
//         <CourseCard
//           name={item?.name}
//           imageurl={item?.imageurl}
//           price={item?.price}
//           author={item?.author}
//           description={item?.description}
//           classification={item?.classification}
//         />
//       </CoursePopop>
//     </Popover>
//   );
// };

// export default CourseComponent;

import "rsuite/dist/rsuite.min.css";
import { Button, Popover, Whisper, Tooltip } from "rsuite";

import { courseData, responsive } from "@/public/data/dummydata";
import CourseCard from "./CourseCard";
import CouseContent from "./CouseContent";

const CourseComponent = ({...item}) => {


  return (
    <div>
      <div>
        <div>
          <Whisper
            trigger="hover"
            speaker={
              <Popover arrow={true}>
                <CouseContent />
              </Popover>
            }
            placement="autoHorizontal"
            enterable
            controlId="control-id-hover-enterable"
          >
            <div>
              <CourseCard
                name={item?.name}
                imageurl={item?.imageurl}
                price={item?.price}
                author={item?.author}
                description={item?.description}
                classification={item?.classification}
              />
            </div>
          </Whisper>
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;

