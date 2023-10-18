import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
      <div className="bg-gray-100 h-[250px] flex flex-col items-center justify-center mt-[50px] md:flex-nowrap">
        <h3 className="text-[20px] text-gray-500 font-medium">
          Trusted by over 14,400 companies and millions of learners around the
          world
        </h3>
        <div className="">
          <ul className="w-[100%] gap-[80px] flex justify-between  items-center p-4 sm:flex-nowrap">
            <li>
              <Image
                src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
                width={48}
                height={48}
                alt="logo"  
              />
            </li>
            <li>
              <Image src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg" width={101} height={34} alt="logo" />
            </li>
            <li>
              <Image src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg" width={87} height={40} alt="logo" />
            </li>
            <li>
              <Image src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg" width={97} height={40} alt="logo" />
            </li>
            <li>
              <Image src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg" width={48} height={48} alt="logo" />
            </li>
            <li>
              <Image src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg" width={94} height={40} alt="logo" />
            </li>
            <li>
              <Image src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg" width={68} height={40} alt="logo" />
            </li>
            <li>
              <Image src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg" width={55} height={48} alt="logo" />
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Logos;
