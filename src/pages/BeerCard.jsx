import cover4 from "../assets/cover3.jpg";
import Beer from "../component/Beer";
import { useEffect, useState } from "react";
import { getAllBeer, searchBeer } from "../api/beer-api";
// import { getAllBeer } from "../api/beer-api";
import { Link } from "react-router-dom";

export default function BeerCard() {
  const [beer, setBeer] = useState([]);
  const [input, setInput] = useState("");
  
  // console.log("--------beer----------", beer);
  // console.log("--------INPUT----------", input);
  
  const hdlChangeInput = async (e) => {
    const selectedValue = e.target.value;
    setInput(selectedValue);
    e.preventDefault();
    if (selectedValue === "") return;
    const res = await searchBeer(e.target.value);
    console.log("------res-----", res)
    console.log(e.target.value)
    console.log(input)
    setBeer(res.data);
  };

  const fetchBeer = async () => {
    const res = await getAllBeer();
    setBeer(res.data);
  };

  useEffect(() => {
    fetchBeer();
  }, []);

  return (
    <div>
      {/* head */}
      <div className="bg-gray-200">
        <div className="w-[90vw] mx-auto ">
          <img src={cover4} alt="" className="object-fill w-full h-[15vw]" />
        </div>
        <div className="flex w-[90vw] justify-center items-center mx-auto">
          <div className="bg-mainc w-full h-12 flex justify-center items-center">
            <p className="font-semibold">เบียร์</p>
          </div>
          <div className="flex bg-blue-900 w-[80%] p-1">
            <select
              name="typeId"
              id="typeId"
              value={input}
              onChange={hdlChangeInput}
              className="w-[100%] rounded-md border-gray-400 shadow-sm sm:text-sm py-2"
            >
              <option value="">เลือกประเภทเบียร์</option>
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
      </div>

      {/* card */}
      <div className="bg-gray-200">
        <div className="flex justify-around mx-4 mt-8 gap-10 flex-wrap">
          {beer.map((el, id) => {
            return (
              <Link to={`/beer/${el.id}`}>
                <Beer
                  key={id}
                  name={el.name}
                  percentAlcohol={el.percentAlcohol}
                  type={el.Type.type}
                  image={el.ImageBeer.image1}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
