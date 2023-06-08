import { FaceIcon } from "../icons";

export default function Login() {
  return (
    <div className="flex justify-around py-[8vh]">
      <div className="w-[20vw] ">
        <h1 className="text-xl font-semibold py-4">เข้าสู่ระบบ</h1>

        <div className="py-3">
          <label
            htmlFor="UserEmail"
            className="block font-medium text-gray-700"
          >
            Email
          </label>

          <input
            type="email"
            id="UserEmail"
            placeholder="Email"
            className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
          />
        </div>

        <div className="py-3">
          <label htmlFor="Password" className="block font-medium text-gray-700">
            Password
          </label>

          <input
            type="text"
            id="Password"
            placeholder="รหัสผ่าน"
            className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
          />

          <a
            className="inline-block w-full rounded bg-mainr text-center py-2 text-sm font-bold text-mainb transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring my-5"
            href="/download"
          >
            เข้าสู่ระบบ
          </a>
        </div>
      </div>

      <div className="w-[20vw]">
      <h1 className="text-xl font-semibold my-4">หรือ เข้าสู่ระบบด้วย</h1>
      <a
            className="flex justify-center items-center gap-3 w-full rounded bg-blue-800 text-center py-2 text-sm font-bold text-mainb transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring mt-3 mb-1"
            href="/download"
          >
            <FaceIcon className="fill-mainb h-5 w-5" /><span>Continue with Feacbook</span>
          </a>

          <h1 className="text-xl font-semibold my-4">หากคุณเป็นผู้ใช้ใหม่</h1>
          <p className="text-xs">ผู้สมัครสามชิกจะต้องมีอายุไม่ต่ำกว่า 20 ปี</p>
          <a
            className="inline-block w-full rounded bg-mainr text-center py-2 text-sm font-bold text-mainb transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring mt-3 mb-1"
            href="/register"
          >
            สมัครสมาชิก
          </a>
      </div>
    </div>
  );
}
