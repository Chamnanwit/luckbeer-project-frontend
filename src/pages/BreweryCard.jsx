import cover4 from "../assets/cover3.jpg";
import { SearchIcon } from "../icons";
import Brewery from "../component/brewery";
import { useEffect, useState } from "react";
import { getAllBrewery } from "../api/brewery-api";
import { Link } from "react-router-dom";

export default function BeerCard() {
  const [input, setInput] = useState("");
  const [brewery, setBrewery] = useState([]);


  const fetchBrewery = async () => {
    const res = await getAllBrewery();
    // console.log(res.data)
    setBrewery(res.data);
  };
  useEffect(() => {
    fetchBrewery();
  }, []);

  const hdlChangeInput = (e) => {
    setInput({ [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();

    addBeer(input);
  };

  return (
    <div>
      {/* head */}
      <div className="bg-gray-200">
        <div className="w-[90vw] mx-auto">
          <img src={cover4} alt="" className="object-fill w-full h-[15vw]" />
        </div>
        <div className="flex w-[90vw] justify-center items-center mx-auto">
          <div className="bg-mainc w-full h-12 flex justify-center items-center">
            <p className="font-semibold">ผู้ผลิตเบียร์</p>
          </div>
          <div className="bg-blue-900 w-full p-1">
            <form className="flex gap-2" onClick={hdlSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                onChange={hdlChangeInput}
                placeholder="search by name"
                className="w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
              />
              <button type="submit">
                <SearchIcon className={"w-8 mx-2"} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* card */}
      <div>
        <div className="flex justify-around mx-4 mt-8">
        {brewery.map((el, id) => {
            return (
              <Link to={`/brewery/${el.id}`}>
              <Brewery
                key={id}
                // logo={el?.Images[0]}
                name={el.name}
                province={el.province}
                phoneNumber={el.phoneNumber}
                address={el.address}
              />
              </Link>
            );
          })}
        </div>
        <div className="flex justify-around mx-4 mt-8">
        {brewery.map((el, id) => {
            return (
              <Brewery
                key={id}
                // logo={el?.Images[0]}
                name={el.name}
                province={el.province}
                phoneNumber={el.phoneNumber}
                address={el.address}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
