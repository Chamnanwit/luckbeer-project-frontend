import { Link } from "react-router-dom";
import { DropIcon, RowIcon, UserIcon } from "../icons";
import logo from "../assets/logo_luckbeer.png";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/Auth-context";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <>
      <div>
        <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="absolute h-[80px] w-[80px] top-2 left-[10vw]"
        />
        </Link>
      </div>
      <div>
        <div className="bg-mainr h-10 pl-[20vw] pr-[10vw] flex justify-between items-center">

          {user ? (<p className="text-mainc text-xl">{user?.name}</p>) : (<p className="text-mainc text-xs">คุณยังไม่ได้เข้าสู่ระบบ</p>)}

          <div className="flex gap-5">
            <Link to="/brewery" className="text-mainc text-sm">
              ผู้ผลิต
            </Link>
            <Link to="/beer" className="text-mainc text-sm">
              แหล่งรวมเบียร์
            </Link>
            <Link to="/aboutme" className="text-mainc text-sm">
              เกี่ยวกับฉัน
            </Link>
          </div>
        </div>

        <div className="bg-mainb h-14 pl-[20vw] pr-[10vw] flex justify-between items-center shadow-xl">
          <div className="flex justify-around gap-3">
            {/* <RowIcon className="w-5 h-5"/>
            <p className="text-mainc text-xs">ประเภทเบียร์</p>
            <DropIcon className="w-5 h-5"/> */}
          </div>
          {user ? (
            <a className="text-mainc cursor-pointer" onClick={()=>logout()}>ออกจากระบบ</a>
          ) : (
            <div className="flex justify-center items-center gap-4">
              <UserIcon className="w-7 h-7 pb-1" />
              <div className="flex gap-5">
                <Link to="/login" className="text-mainc">
                  เข้าสู่ระบบ
                </Link>
                <p className="text-mainc">/</p>
                <Link to="/register" className="text-mainc">
                  สมัครสมาชิก
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <h1 className="font-bold py-3 text-mainr mx-auto flex justify-center text-lg">
        สุราไทย ไปได้ไกลกว่าที่คุณคิด By LUCK BEER
      </h1>
    </>
  );
}
