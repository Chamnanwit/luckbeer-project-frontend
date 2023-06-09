import { useState } from "react";
import { register } from "../api/register-api";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(e.target.value)
  };

  const hdlSubmit = async (e) => {
    const { email, name, password, confirmPassword } = input;
    console.log({ email, name, password, confirmPassword })
    try {
      e.preventDefault();
      if (password !== confirmPassword) return alert("รหัสไม่ตรงกัน");
      await register({
        email,
        name,
        password,
        confirmPassword,
      });
      console.log({email, name, password, confirmPassword})
      alert("สมัครสมาชิกสำเร็จ");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-[30vw]">
      <div className="flex flex-col justify-center items-center py-1">
        <h1 className="text-3xl font-semibold">สมัครสมาชิก</h1>
        <p className="text-sm">MEMBER REGISTER</p>
      </div>
      <div className="flex flex-col justify-start items-start py-1">
        <h1 className="text-xl font-semibold">ข้อมูลการเข้าสู่ระบบ</h1>
        <p className="text-sm pl-5">Create an Account</p>
      </div>
      <hr />
      <form onSubmit={hdlSubmit}>
        <div className="py-1">
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email address *
          </label>

          <input
            type="email"
            name="email"
            id="email"
            onChange={hdlChangeInput}
            placeholder="john@rhcp.com"
            className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
          />
        </div>
        <div className="py-1">
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name *
          </label>

          <input
            type="text"
            name="name"
            id="name"
            onChange={hdlChangeInput}
            placeholder="ชื่อในการใช้งาน"
            className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
          />
        </div>
        <div className="py-1">
          <label htmlFor="password" className="block font-medium text-gray-700">
            Password *
          </label>

          <input
            type="text"
            name="password"
            id="password"
            onChange={hdlChangeInput}
            placeholder="รหัสผ่าน"
            className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
          />
        </div>
        <div className="py-1">
          <label
            htmlFor="confirmPassword"
            className="block font-medium text-gray-700"
          >
            Confirm Password *
          </label>

          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            onChange={hdlChangeInput}
            placeholder="ยืนยันรหัสผ่าน"
            className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
          />
        </div>
        <button
          className="inline-block w-full rounded bg-mainr text-center py-2 text-sm font-bold text-mainb transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring mt-3 mb-1"
          type="submit"
        >
          ดำเนินการต่อ
        </button>
      </form>

      <div className="flex flex-row justify-center">
        <p className="text-xs">เป็นสมาชิกอยู่แล้ว ? </p>
        <a className="underline underline-offset-4 text-xs px-2">
          {" "}
          เข้าสู่ระบบ
        </a>
      </div>
    </div>
  );
}
