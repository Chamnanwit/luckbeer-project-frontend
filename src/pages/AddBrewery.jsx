import React, { useState } from "react";
import { addBrewery } from "../api/brewery-api";
import { useNavigate } from "react-router-dom";

export default function AddBrewery() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    address: "",
    province: "",
    phoneNumber: "",
    linkWeb: "",
    text: "",
    logo: "",
    image: "",
  });

  // const [file, setFile] = useState({
  //   logo: "",
  //   image: "",
  // })

  // const hdlChangeFile = (e) => {
  //   if (e.target.files[0]) {
  //     setFile({ ...file, [e.target.name]: e.target.files[0] });
  //     console.log(file);
  //   }
  // };

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("name", input.name);
    // formData.append("address", input.address);
    // formData.append("province", input.province);
    // formData.append("phoneNumber", input.phoneNumber);
    // formData.append("linkWeb", input.linkWeb);
    // formData.append("text", input.ltext);
    // formData.append("logo", file.logo);
    // formData.append("image", file.image);
    addBrewery(input);
    navigate("/");
  };

  return (
    <div>
      <div className="px-[30vw]">
        <div className="flex flex-col justify-center items-center py-1">
          <h1 className="text-3xl font-semibold">เพิ่มโรงเบียร์ของคุณ</h1>
          <p className="text-sm">ADD YOUR BREWERY</p>
        </div>
        <hr />
        <form onSubmit={hdlSubmit}>
          <div className="py-1">
            <label htmlFor="name" className="block font-medium text-gray-700">
              ชื่อผู้ผลิต *
            </label>

            <input
              type="text"
              name="name"
              id="name"
              onChange={hdlChangeInput}
              className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
            />
          </div>
          <div className="py-1">
            <label
              htmlFor="phoneNumber"
              className="block font-medium text-gray-700"
            >
              เบอร์โทรศัพท์ *
            </label>

            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              onChange={hdlChangeInput}
              className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
            />
          </div>

          <div className="py-1">
            <label
              htmlFor="linkWeb"
              className="block font-medium text-gray-700"
            >
              เว็บไซต์ของคุณ *
            </label>

            <input
              type="text"
              name="linkWeb"
              id="linkWeb"
              onChange={hdlChangeInput}
              className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
            />
          </div>

          <div className="flex gap-3 justify-between">
            <div className="py-1">
              <label
                htmlFor="address"
                className="block font-medium text-gray-700"
              >
                ที่อยู่ *
              </label>

              <input
                type="text"
                name="address"
                id="address"
                onChange={hdlChangeInput}
                className="w-[250%] mt-1 rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
              />
            </div>

            <div className="py-1">
              <label
                htmlFor="province"
                className="block font-medium text-gray-700"
              >
                จังหวัด *
              </label>

              <input
                type="text"
                name="province"
                id="province"
                onChange={hdlChangeInput}
                className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
              />
            </div>
          </div>

          <div className="py-1">
            <label htmlFor="text" className="block font-medium text-gray-700">
              เรื่องราวและแรงบันดาใจ *
            </label>

            <input
              type="text"
              name="text"
              id="text"
              onChange={hdlChangeInput}
              className="h-[10vh] mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
            />
          </div>

          <div className="flex">
            <div className="py-1">
              <label htmlFor="logo" className="block font-medium text-gray-700">
                รูปโลโก้ผู้ผลิต *
              </label>

              <input
                type="file"
                name="logo"
                id="logo"
                onChange={hdlChangeInput}
                className="h-[10vh] mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
              />
            </div>
            <div className="py-1">
              <label
                htmlFor="image"
                className="block font-medium text-gray-700"
              >
                รูปประกอบ *
              </label>

              <input
                type="file"
                name="image"
                id="image"
                onChange={hdlChangeInput}
                className="h-[10vh] mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
              />
            </div>
          </div>

          <button
            className="inline-block w-full rounded bg-mainr text-center py-2 text-sm font-bold text-mainb transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring mt-3 mb-1"
            type="submit"
          >
            เพิ่มข้อมูล
          </button>
        </form>
      </div>
    </div>
  );
}
