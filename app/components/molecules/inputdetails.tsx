"use client";
import React, { useState } from "react";
import Logininput from "../atoms/logininput";
import { NextPage } from "next";



const Inputdetails: NextPage = () => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [fxn, setFxn] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="mb-[200px]">
      <form onSubmit={handleSubmit} className="flex flex-row  gap-8 ">
        <div className="flex flex-col">
          <Logininput
            type="text"
            label="Firstname"
            name="firstname"
            placeholder="First name"
            value={firstname}
            className=" border border-slate-950 py-4 mb-2 placeholder:px-4"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Logininput
            type="text"
            label="Surname"
            name="Surname"
            placeholder="Surname"
            value={surname}
            className="border border-slate-950 py-4 mb-2 placeholder:px-4"
            onChange={(e) => setSurname(e.target.value)}
          />
          <Logininput
            type="text"
            label="function"
            name="function"
            placeholder="Trainer at Udemy"
            value={fxn}
            className="border border-slate-950 py-4 mb-2 placeholder:px-4"
            onChange={(e) => setFxn(e.target.value)}
          />
          <div className="mt-2">
            <p className="py-2  font-bold">Biography</p>
            <div className="flex gap-8 border border-slate-950 py-4 px-4">
              <p className="font-bold text-[16px]">B</p>
              <p className="font-bold text-[16px]">I</p>
            </div>
            <div className="border border-slate-950 py-4 placeholder:px-4">
              <textarea className="w-full "></textarea>
            </div>
          </div>
          <div>
            <p className="text-[12px] text-slate-600">
              To help attendees learn more about you, your bio should reflect
              your credibility, empathy, passion, and <br /> personality. Your
              bio must be atleast 50 words long. Links and coupon codes are
              prohited.
            </p>
          </div>
          <div>
            <h3 className="py-2 mt-4 font-semibold">LANGUAGES</h3>
            <select className="border border-slate-950 py-4 px-4 w-[100%]">
              <option value="0">French</option>
              <option value="2">Bahasa Indonesia</option>
              <option value="3">Deutsch</option>
              <option value="4">English (US)</option>
              <option value="5">Espanol</option>
              <option value="6">French</option>
              <option value="7">Italiano</option>
              <option value="8">Netherlands</option>
              <option value="9">Polski</option>
              <option value="10">Portugues</option>
              <option value="11">Tieng Viet</option>
              <option value="12">Turkce</option>
              <option value="13">Russian</option>
            </select>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-between gap-6">
            <Logininput
              type="text"
              label="website"
              name="function"
              placeholder="Url"
              value={fxn}
              className="border border-slate-950 py-4 px-4 placeholder:px-4 bg-slate-50"
              onChange={(e) => setFxn(e.target.value)}
            />
            <div>
              <label htmlFor="" className="font-bold ">
                Twitter
              </label>
              <div className="flex flex-row w-full py-2 mb-4">
                <p className="border border-slate-950 py-4 px-4 bg-slate-50">
                  http://www.twitter.com/
                </p>
                <input
                  type="text"
                  placeholder="username"
                  className="border border-slate-950 px-4 py-4 w-full"
                />
              </div>

              <label htmlFor="" className="font-bold">
                Facebook
              </label>
              <div className="flex flex-row w-full py-2 mb-4">
                <p className="border border-slate-950 py-4 px-4 bg-slate-50">
                  http://www.facebook.com/
                </p>
                <input
                  type="text"
                  placeholder="username"
                  className="border border-slate-950 px-4 py-4 w-full"
                />
              </div>

              <label htmlFor="" className="font-bold">
                Linkedin
              </label>
              <div className="flex flex-row w-full py-2 mb-4">
                <p className="border border-slate-950 py-4 px-4 bg-slate-50">
                  http://www.linkedin.com/
                </p>
                <input
                  type="text"
                  placeholder="Resource ID"
                  className="border border-slate-950 px-4 py-4 w-full"
                />
              </div>

              <label htmlFor="" className="font-bold">
                Youtube
              </label>
              <div className="flex flex-row  w-full py-2 mb-4">
                <p className="border border-slate-950 py-4 px-4 bg-slate-50">
                  http://www.youtube.com/
                </p>
                <input
                  type="text"
                  placeholder="username"
                  className="border border-slate-950 px-4 py-4 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <button
        type="submit"
        className="bg-slate-950 text-white font-bold  px-4 py-4 mt-8" 
      >To safeguard</button>
    </div>
  );
};

export default Inputdetails;
