import React from "react";
import Pulsation from "@/app/components/atoms/Pulsation";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className=" w-full my-16 mx-auto flex items-center justify-center">
      <Pulsation />
    </div>
  );
};

export default loading;
