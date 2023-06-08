export default function Login() {
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
      <div className="py-1">
        <label htmlFor="UserEmail" className="block font-medium text-gray-700">
          Email adress *
        </label>

        <input
          type="email"
          id="UserEmail"
          placeholder="john@rhcp.com"
          className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
        />
      </div>
      <div className="py-1">
        <label htmlFor="Name" className="block font-medium text-gray-700">
          Name *
        </label>

        <input
          type="text"
          id="Name"
          placeholder="ชื่อในการใช้งาน"
          className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
        />
      </div>
      <div className="py-1">
        <label htmlFor="Password" className="block font-medium text-gray-700">
          Password *
        </label>

        <input
          type="text"
          id="Password"
          placeholder="รหัสผ่าน"
          className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
        />
      </div>
      <div className="py-1">
        <label
          htmlFor="ConfirmPassword"
          className="block font-medium text-gray-700"
        >
          Confirm Password *
        </label>

        <input
          type="text"
          id="ConfirmPassword"
          placeholder="ยืนยันรหัสผ่าน"
          className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm py-2 pl-2"
        />
      </div>
      <a
        className="inline-block w-full rounded bg-mainr text-center py-2 text-sm font-bold text-mainb transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring mt-3 mb-1"
        href="/download"
      >
        ดำเนินการต่อ
      </a>
      <div className="flex flex-row justify-center">
        <p className="text-xs">เป็นสมาชิกอยู่แล้ว ?  </p>
        <a className="underline underline-offset-4 text-xs px-2"> เข้าสู่ระบบ</a>
      </div>
    </div>
  );
}
