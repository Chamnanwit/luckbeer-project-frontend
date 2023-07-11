import React, { useState, useEffect } from "react";
import cover4 from "../assets/cover4.jpg";
import ttbar from "../assets/ttbar.png";
import brew from "../assets/brew.jpg";
import { HomeIcon, PhoneIcon, SetIcon, WebIcon } from "../icons";
import Beer from "../component/Beer";
import { useAuth } from "../contexts/Auth-context";
import { useParams } from "react-router-dom";

export default function BreweryData({}) {
  const { breweryId } = useParams();
  const { breweryById, fetchBreweryById } = useAuth();

  console.log("555555555555555", breweryId);

  console.log("---------------- ------- -- - - -", breweryById);

  useEffect(() => {
    fetchBreweryById(breweryId);
  }, []);

  return (
    <div>
      {/* head */}
      <div>
        <div className="w-[90vw] mx-auto">
          <img src={cover4} alt="" className="object-fill w-full h-[15vw]" />
        </div>
        <div className="flex w-[90vw] justify-center items-center mx-auto">
          <div className="bg-mainc w-full h-12 flex justify-center items-center">
            <p className="font-semibold">ผู้ผลิตเบียร์</p>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="flex justify-around items-center w-[90vw] mx-auto pt-4">
        <div className="flex flex-col">
          <SetIcon className={"w-2"} />
          <img src={breweryById?.logo} alt="" className="h-[10rem] w-[10rem] mx-auto" />
          <h1 className="text-lg font-semibold py-4">{breweryById?.name}</h1>
          <div>
            <hr />
            <div className="flex gap-5 items-center my-2">
              <HomeIcon className={"h-8"} />
              <span>{breweryById?.address}</span>
            </div>
            <hr />
            <div className="flex gap-5 items-center my-2">
              <PhoneIcon className={"h-8"} />
              <span>{breweryById?.phoneNumber}</span>
            </div>
            <hr />
            <div className="flex gap-5 items-center my-2">
              <WebIcon className={"h-8 fill-mainb"} />
              <a href={breweryById?.linkWeb}>
              {breweryById?.linkWeb}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20rem] w-[30rem]">
          <img src={breweryById?.image} alt="" className="h-[100%] w-[100%]" />
        </div>
      </div>
      <div className="w-[80vw] mx-auto mt-5">
        <h1 className="text-lg font-semibold">ข้อความจากผู้ผลิต</h1>
        <p className="w-[90%] mt-4 mx-auto">
        {breweryById?.text}
        </p>
      </div>
      <div>
        {/* <div className="flex justify-around mx-4 mt-10">
          <Beer />
          <Beer />
          <Beer />
          <Beer />
        </div> */}
      </div>
    </div>
  );
}
