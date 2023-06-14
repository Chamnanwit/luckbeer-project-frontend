import Brewery from "../component/brewery";
import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";
import Beer from "../component/Beer";
import cover3 from "../assets/cover3.jpg";
import cover4 from "../assets/cover4.jpg";
import { useEffect, useState } from "react";
import { getAllBeer, getBeerById } from "../api/beer-api";
import { getAllBrewery, getBreweryById } from "../api/brewery-api";

export default function Home() {
  const [beer, setBeer] = useState([]);
  const [brewery, setBrewery] = useState([]);
  const [dataBeer, setDataBeer] = useState({});
  const [dataBrewery, setDataBrewery] = useState({});

  const getBreweryDataById = async (id) => {
    const res = await getBreweryById(id)
    setDataBrewery(res.data)
  }

  const getBeerDataById = async (id) => {
    const res = await getBeerById(id)
    setDataBeer(res.data)
  }


  const fetchBrewery = async () => {
    const res = await getAllBrewery();
    console.log(res.data)
    setBrewery(res.data);
  };
  useEffect(() => {
    fetchBrewery();
  }, []);

  const fetchBeer = async () => {
    const res = await getAllBeer();
    console.log(res.data)
    setBeer(res.data);
  };
  useEffect(() => {
    fetchBeer();
  }, []);

  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full h-[40vh]">
          <img src={cover2} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full h-[40vh]">
          <img src={cover3} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full h-[40vh]">
          <img src={cover4} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full h-[40vh]">
          <img src={cover1} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      <div>
        <h1 className="my-4 mx-10 text-xl font-semibold">
          ผู้ผลิตเบียร์คราฟไทย
        </h1>
        <div className="px-10 flex justify-around">
          {brewery.map((el, id) => {
            return (
              <Brewery
                key={id}
                // logo={el?.Images[0]}
                name={el.name}
                province={el.province}
                phoneNumber={el.phoneNumber}
                address={el.address}
                getBreweryDataById={getBreweryDataById}
              />
            );
          })}
        </div>
        <div className="flex justify-center">
          <h1 className="my-4 mb-2 px-auto text-xl font-semibold">
            ช่วงเวลาแห่งการได้ดื่มด่ำ ไปกับคราฟเบียร์ไทย หลากหลายสไตล์ในแบบคุณ
          </h1>
        </div>
      </div>

      <div className="bg-gray-200">
        <h1 className="my-2 mx-10 py-3 text-xl font-semibold">
          เหล่าเบียร์ตำนาน ที่ถูกกล่าวขาน
        </h1>
        <div className="flex justify-around">
          {beer.map((el, id) => {
            return (
              <Beer
              key={id}
              percentAlcohol={el.percentAlcohol}
              type={el.Type.type}
              image={el.ImageBeer.image1}
              getBeerDataById={getBeerDataById}
              />
            )
          })}
          
        </div>
      </div>
    </>
  );
}
