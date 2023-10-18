import Image from "next/image";
import React from "react";
import English from "../atoms/english-btn";
import UnOrderedList from "../atoms/unordered-list";

function FooterLandingPage() {
  return (
    <div className="bg-black h-fit pb-4 md:w-full">
      <hr />
      <div className="px-4 pb-8 md:hidden">
        <English />
        <div className="text-white md:pl-8 md:flex md:gap-8 md:leading-8  md:pb-10">
          <UnOrderedList
            className="md:w-2/12 leading-loose"
            l1={"Udemy Business"}
            l2={"Tech on Udemy"}
            l3={"Get the app"}
            l4={"About us"}
            l5={"Contact us"}
          />
          <UnOrderedList
            className="md:w-2/12 leading-loose"
            l1={"Careers"}
            l2={"Blog"}
            l3={"Help and Support"}
            l4={"Affilaite"}
            l5={"Investors"}
          />
          <UnOrderedList
            className="md:w-2/12 leading-loose"
            l1={"Terms"}
            l2={"Privacy policy"}
            l3={"Cookies settings"}
            l4={"Sitemap"}
            l5={"Accessibility statement"}
          />
        </div>
      </div>
      <div className="px-4 pb-8 hidden md:flex md:justify-between ">
        <div className="text-white md:pl-8 md:flex md:gap-8 md:leading-8 md:w-4/5 md:pt-6 md:pb-10">
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
          className="py-2 pl-8"
          width={120}
          height={120}
        />
        <p className="text-white text-xs my-auto">© 2023 Udemy, Inc.</p>
      </div>
    </div>
  );
}

export default FooterLandingPage;
