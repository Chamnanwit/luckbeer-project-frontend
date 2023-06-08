import { Link } from "react-router-dom";
import { DropIcon, RowIcon, UserIcon } from "../icons";
import logo from "../assets/logo_luckbeer.png"

export default function Header() {
  return (
    <>
    <div>
        <img src={logo} alt="logo" className="absolute h-[80px] w-[80px] top-2 left-[10vw]"/>

    </div>
    <div>

      <div className="bg-mainr h-10 pl-[20vw] pr-[10vw] flex justify-between items-center">
        <p className="text-mainc text-xs">คุณยังไม่ได้เข้าสู่ระบบ</p>
        <div className="flex gap-5">
          <Link to="#" className="text-mainc text-sm">
            ผู้ผลิต
          </Link>
          <Link to="#" className="text-mainc text-sm">
            แหล่งรวมเบียร์
          </Link>
          <Link to="#" className="text-mainc text-sm">
            เกี่ยวกับฉัน
          </Link>
        </div>
      </div>

      <div className="bg-mainb h-14 pl-[20vw] pr-[10vw] flex justify-between items-center shadow-xl">
        <div className="flex justify-around gap-3">
            <RowIcon className="w-5 h-5"/>
            <p className="text-mainc text-xs">ประเภทเบียร์</p>
            <DropIcon className="w-5 h-5"/>
        </div>
        <div className="flex justify-center items-center gap-4">
            <UserIcon className="w-7 h-7 pb-1"/>
            <div className="flex gap-5">
                <Link to='/login' className="text-mainc">เข้าสู่ระบบ</Link>
                <p className="text-mainc">/</p>
                <Link to='/register' className="text-mainc">สมัครสมาชิก</Link>
            </div>
        </div>
      </div>

    </div>

    <h1 className="font-bold py-3 text-mainr mx-auto flex justify-center text-lg">สุราไทย ไปได้ไกลกว่าที่คุณคิด By LUCK BEER</h1>
    </>
  );
}
