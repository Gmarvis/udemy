import Image from "next/image";
import React from "react";
import English from "../atoms/english-btn";
import UnOrderedList from "../atoms/unordered-list";

function Footer() {
  return (
    <div className="bg-black h-fit pb-4 md:w-full">
      <div className="md:flex md:gap-2 md:justify-between px-4 md:px-12 self-baseline py-3">
        <h1 className="text-white my-auto">
          Top companies choose <strong className="text-purple py-">Udemy Business</strong> to
          build in-demande career skills.
        </h1>
        <div className="flex md:gap-8 gap-5 flex-wrap pt-3">
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
            alt="Nasdaq"
            className="w-24 p-0 md:w-24"
            width={10}
            height={5}
          />
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
            alt="volsk wargen"
            className="w-9 md:w-9"
            width={10}
            height={5}
          />
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
            alt="box"
            className="w-16 md:w-16"
            width={10}
            height={5}
          />
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
            alt="net app"
            className="md:w-28 w-28"
            width={10}
            height={5}
          />
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
            alt="eventbright"
            className="w-28"
            width={10}
            height={5}
          />
        </div>
      </div>
      <hr/>
      <div className="px-4 md:pl-8 pb-8 md:hidden">
        <English />
        <div className="text-white md:flex md:gap-8 md:leading-8  md:pb-10">
        <UnOrderedList
            className="md:w-2/12 "
            l1={"Udemy Business"}
            l2={"Tech on Udemy"}
            l3={"Get the app"}
            l4={"About us"}
            l5={"Contact us"}
          />
          <UnOrderedList
            className="md:w-2/12 "
            l1={"Careers"}
            l2={"Blog"}
            l3={"Help and Support"}
            l4={"Affilaite"}
            l5={"Investors"}
          />
          <UnOrderedList
            className="md:w-2/12 "
            l1={"Terms"}
            l2={"Privacy policy"}
            l3={"Cookies settings"}
            l4={"Sitemap"}
            l5={"Accessibility statement"}
          />
        </div>
      </div>
      <div className="px-12 pb-8 hidden md:flex md:justify-between ">
        <div className="text-white md:flex md:gap-8 md:leading-8 md:w-4/5 md:pt-6 md:pb-10">
          <UnOrderedList
            className="md:w-2/12 "
            l1={"Udemy Business"}
            l2={"Tech on Udemy"}
            l3={"Get the app"}
            l4={"About us"}
            l5={"Contact us"}
          />
          <UnOrderedList
            className="md:w-2/12 "
            l1={"Careers"}
            l2={"Blog"}
            l3={"Help and Support"}
            l4={"Affilaite"}
            l5={"Investors"}
          />
          <UnOrderedList
            className="md:w-2/12 "
            l1={"Terms"}
            l2={"Privacy policy"}
            l3={"Cookies settings"}
            l4={"Sitemap"}
            l5={"Accessibility statement"}
          />
        </div>
        <English />
      </div>
      <div className="px-4 md:flex md:justify-between">
        <Image
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          alt="udemy logo"
          className="py-2 md:pl-8"
          width={120}
          height={120}
        />
        <p className="text-white text-xs my-auto md:pr-10" >© 2023 Udemy, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
