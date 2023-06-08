import { Link } from "react-router-dom";
import logo from "../assets/logo_luckbeer.png"
import { FaceIcon, IgIcon, LineIcon, TwitIcon } from "../icons";

export default function Footer() {
    return (
        <div className="w-full bg-mainb mt-4">
            <div className="flex justify-center items-center gap-2 py-1">
                <img src={logo} alt="logo" className="h-[50px] w-[50px]"/>
                <h1 className="text-mainc font-semibold">LUCK BEER</h1>
            </div>
            <div className="flex gap-4 justify-center py-1">
                <Link to='/' className="text-mainc text-sm">หน้าแรก</Link>
                <Link to='#' className="text-mainc text-sm">ผู้ผลิต</Link>
                <Link to='#' className="text-mainc text-sm">แหล่งรวมเบียร์</Link>
                <Link to='#' className="text-mainc text-sm">เกี่ยวกับฉัน</Link>
            </div>
            <div className="flex justify-center gap-6 py-3">
                <FaceIcon className="w-6 h-6"/>
                <IgIcon className="w-6 h-6"/>
                <LineIcon className="w-6 h-6"/>
                <TwitIcon className="w-6 h-6"/>
            </div>
        </div>
    )
}