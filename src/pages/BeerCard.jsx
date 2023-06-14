import cover4 from "../assets/cover3.jpg";
import { RowIcon, DropIcon } from "../icons";
import Beer from "../component/Beer";
import { useEffect, useState } from "react";
import { getAllBeer } from "../api/beer-api";
import { Link } from "react-router-dom";

export default function BeerCard() {
  const [beer, setBeer] = useState([]);

  const fetchBeer = async () => {
    const res = await getAllBeer();
    console.log(res)
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
          <div className="flex justify-around gap-3 bg-blue-900 w-[30%] p-1">
            {/* <RowIcon className="w-5 h-5"/>
            <p className="text-mainc text-xs">ประเภทเบียร์</p>
            <DropIcon className="w-5 h-5"/> */}
            <details className="dropdown">
              <summary className="btn">เลือกประเภทเบียร์</summary>
              <ul className="shadow menu dropdown-content bg-base-100 rounded-box w-30">
                <li>
                  <a>IPA</a>
                </li>
                <li>
                  <a>Stout</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      {/* card */}
      <div className="bg-gray-200">
        <div className="flex justify-around mx-4 mt-8">
        {beer.map((el, id) => {
            return (
              <Link to={`/beer/${el.id}`}>
              <Beer
              key={id}
              percentAlcohol={el.percentAlcohol}
              ypte={el.Type.type}
              image={el.ImageBeer.image1}
              />
              </Link>
            )
          })}
        </div>
        {/* <div className="flex justify-around mx-4 mt-8">
        {beer.map((el, id) => {
            return (
              <Link to={`/beer/${el.id}`}>
              <Beer
              key={id}
              percentAlcohol={el.percentAlcohol}
              type={el.Type.type}
              image={el.ImageBeer.image1}
              />
              </Link>
            )
          })}
        </div> */}
      </div>
    </div>
  );
}
