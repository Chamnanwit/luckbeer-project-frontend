import React, { useState } from "react";
import { addBeer } from "../api/beer-api";

export default function AddBeer() {
  const [input, setInput] = useState({
    name: "",
    percentAlcohol: "",
    text: "",
    // numberLike: "",
    breweryId: "",
    typeId: "",
  });

  const [file, setFile] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });

  const hdlChangeFile = (e) => {
    if (e.target.files[0]) {
      setFile({ ...file, [e.target.name]: e.target.files[0] });
      console.log(file);
      // setFile(e.target.files[0])
    }
  };

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("percentAlcohol", input.percentAlcohol);
    formData.append("text", input.text);
    formData.append("breweryId", input.breweryId);
    formData.append("typeId", input.typeId);
    formData.append("image1", file.image1);
    formData.append("image2", file.image2);
    formData.append("image3", file.image3);
    formData.append("image4", file.image4);
    addBeer(formData);
  };

  return (
    <div>
      <div className="px-[30vw]">
        <div className="flex flex-col justify-center items-center py-1">
          <h1 className="text-3xl font-semibold">เพิ่มเบียร์ของคุณ</h1>
          <p className="text-sm">ADD YOUR BEER</p>
        </div>
        <hr />

        <form onSubmit={hdlSubmit}>
          <div className="py-1">
            <label htmlFor="name" className="block font-medium text-gray-700">
              ชื่อเบียร์ *
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
              htmlFor="breweryId"
              className="block font-medium text-gray-700"
            >
              จากหมายเลขโรงเบียร์ *
            </label>

            <input
              type="text"
              name="breweryId"
              id="breweryId"
              onChange={hdlChangeInput}
              className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
            />
          </div>

          <div className="flex gap-3 justify-between w-[50%]">
            <div className="py-1">
              <label
                htmlFor="typeId"
                className="block font-medium text-gray-700"
              >
                ประเภทเบียร์ *
              </label>

              <select
                name="typeId"
                id="typeId"
                onChange={hdlChangeInput}
                className="w-[250%] mt-1 rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
              >
                <option value="">กรุณาเลือกประเภทเบียร์</option>
                <option value="1">Lager</option>
                <option value="2">Pilsner</option>
                <option value="3">Witbier</option>
                <option value="4">Hefeweizen</option>
                <option value="5">Pale Ale</option>
                <option value="6">IPA</option>
                <option value="7">Double IPA</option>
                <option value="8">Stout</option>
              </select>
            </div>
          </div>

          <div>
            <div className="py-1">
              <label
                htmlFor="percentAlcohol"
                className="block font-medium text-gray-700"
              >
                ปริมาณแอลกอฮอลล์ *
              </label>

              <input
                type="text"
                name="percentAlcohol"
                id="percentAlcohol"
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
              <label
                htmlFor="image1"
                className="block font-medium text-gray-700"
              >
                รูปเบียร์1 *
              </label>

              <input
                type="file"
                name="image1"
                id="image1"
                placeholder="ยืนยันรหัสผ่าน"
                onChange={hdlChangeFile}
                className="h-[10vh] mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
              />
            </div>
            <div className="py-1">
              <label
                htmlFor="image2"
                className="block font-medium text-gray-700"
              >
                รูปเบียร์2 *
              </label>

              <input
                type="file"
                name="image2"
                id="image2"
                placeholder="ยืนยันรหัสผ่าน"
                onChange={hdlChangeFile}
                className="h-[10vh] mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
              />
            </div>
          </div>
          <div className="flex">
            <div className="py-1">
              <label
                htmlFor="image3"
                className="block font-medium text-gray-700"
              >
                รูปเบียร์3 *
              </label>

              <input
                type="file"
                name="image3"
                id="image3"
                placeholder="ยืนยันรหัสผ่าน"
                onChange={hdlChangeFile}
                className="h-[10vh] mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
              />
            </div>
            <div className="py-1">
              <label
                htmlFor="image4"
                className="block font-medium text-gray-700"
              >
                รูปเบียร์4 *
              </label>

              <input
                type="file"
                name="image4"
                id="image4"
                placeholder="ยืนยันรหัสผ่าน"
                onChange={hdlChangeFile}
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
