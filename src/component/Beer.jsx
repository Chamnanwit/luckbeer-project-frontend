import { WebIcon, CommentIcon, LikeIcon } from "../icons";

import cover1 from "../assets/cover1.jpg";

export default function Beer({ percentAlcohol, type, image, name }) {
  return (
    <div>
        <div className="pt-10 pb-7">
            <div className="bg-white w-[15rem] h-[20rem] flex flex-col justify-around items-center rounded-xl p-2">
              <img
                src={image}
                className="rounded-full w-[7rem] h-[7rem] mt-[-3.5rem] outline outline-4 outline-white "
              />
              <h1 className="text-xl font-bold">{name}</h1>
              <a
                class="rounded-full border border-mainr bg-mainr px-12 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-mainr focus:outline-none focus:ring"
                href="/"
              >
                ไปดูเบียร์เลย
              </a>
              <div>
                <div className="flex gap-4">
                  <span className="font-semibold">ประเภท</span> <span>{type}</span>
                </div>
                <hr />
                <div className="">
                  <span className="font-semibold">ปริมาณแอลกอฮอล์</span> <span>{percentAlcohol} %</span>
                </div>
              <div className="flex py-2 gap-7">
                <WebIcon />
                <CommentIcon />
                <LikeIcon />
              </div>
              </div>
            </div>
          </div>
    </div>
  )
}
