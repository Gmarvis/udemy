import Image from "next/image";
import React from "react";
import { TfiWorld } from "react-icons/tfi";

function Footer() {
  return (
    <div className="bg-black h-fit pb-4 md:w-full">
      <div className="md:flex md:gap-2 md:justify-between px-4 md:px-12 self-baseline py-3">
        <h1 className="text-white my-auto">
          Top companies choos
          <strong className="text-purple-300 py-">Udemy Business</strong> to
          build in-demande career skills.
        </h1>
        <div className="flex md:gap-8 ">
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
            alt="Nasdaq"
            className="w-20 md:w-24"
            width={10}
            height={5}
          />
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
            alt="volsk wargen"
            className="w-10 md:w-20"
            width={10}
            height={5}
          />
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
            alt="box"
            className="w-20"
            width={10}
            height={5}
          />
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
            alt="net app"
            className="w-10"
            width={10}
            height={5}
          />
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
            alt="eventbright"
            className="w-20"
            width={10}
            height={5}
          />
        </div>
      </div>
      <hr />
      <div className="px-4 pb-8">
        <div className="text-white hover:cursor-pointer flex gap-2 px-4 py-2 w-36 my-10 border">
          <TfiWorld className="my-auto "/>
          <p >English</p>
        </div>
        <div className="text-white md:flex md:gap-8 md:leading-8  md:pb-10">
          <ul className="w-3/12  ">
            <li className="hover:underline hover:cursor-pointer">Udemy Business</li>
            <li className="hover:underline hover:cursor-pointer">Teach on Udemy</li>
            <li className="hover:underline hover:cursor-pointer">Get the app</li>
            <li className="hover:underline hover:cursor-pointer">About us</li>
            <li className="hover:underline hover:cursor-pointer">Contact us</li>
          </ul>
          <ul className="w-3/12 ">
            <li className="hover:underline hover:cursor-pointer">Careers</li>
            <li className="hover:underline hover:cursor-pointer">Blog</li>
            <li className="hover:underline hover:cursor-pointer">Help and Support</li>
            <li className="hover:underline hover:cursor-pointer">Affilaite</li>
            <li className="hover:underline hover:cursor-pointer">Investors</li>
          </ul>
          <ul className="w-4/12 ">
            <li className="hover:underline hover:cursor-pointer">Terms</li>
            <li className="hover:underline hover:cursor-pointer">Privacy policy</li>
            <li className="hover:underline hover:cursor-pointer">Cookies settings</li>
            <li className="hover:underline hover:cursor-pointer">Sitemap</li>
            <li className="hover:underline hover:cursor-pointer">Accessibility statement</li>
          </ul>
        </div>
      </div>
      <div className="px-4 md:flex md:justify-between">
        <Image
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          alt="udemy logo"
          className="py-2 "
          width={100}
          height={100}
        />
        <p className="text-white text-xs my-auto" >© 2023 Udemy, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
