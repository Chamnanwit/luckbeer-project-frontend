import cover1 from "../assets/cover1.jpg";
import { PhoneIcon, HomeIcon } from "../icons";

export default function Brewery({ name, province, phoneNumber, address, getBreweryDataById}) {
  return (
    <div>
      <div className="bg-mainc w-[15rem] h-[20rem] flex flex-col justify-around items-center rounded-xl p-2">
        <img  className="rounded-full w-[7rem] h-[7rem]" />
        <h1 className="text-xl font-bold">{name}</h1>
        <p class="inline-block rounded-full border border-mainb px-2 py-1 text-sm font-medium text-mainb">
          {province}
        </p>
        <div>
          <div className="flex gap-4">
            <PhoneIcon className={"w-5 h-5"} /> <span>{phoneNumber}</span>
          </div>
          <hr />
          <div className="flex gap-4">
            <HomeIcon className={"w-5 h-5"} />{" "}
            <span>{address}</span>
          </div>
        </div>
        <a
          class="rounded-full border border-mainr bg-mainr px-12 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-mainr focus:outline-none focus:ring"
          href="/"
        >
          ดูรายละเอียด
        </a>
      </div>
    </div>
  );
}
