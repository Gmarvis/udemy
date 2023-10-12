import Image from "next/image";
import React from "react";

type Props = {};

const UdemyBusiness = (props: Props) => {
  return (
    <div>
      <div>
        <Image
          className=""
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
          alt="udemy business"
          width={50}
          height={25}
        />
      </div>
    </div>
  );
};

export default UdemyBusiness;
