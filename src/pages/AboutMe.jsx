import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";
import cover3 from "../assets/cover3.jpg";
import cover4 from "../assets/cover4.jpg";

export default function AboutMe() {
  return (
    <div>
      <div className="w-[80vw] mx-auto">
        <div className="carousel">
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
      </div>

      <div className="w-[70vw] mx-auto">
        <h1 className="text-xl font-semibold my-4">ข้อมูลเราเอง</h1>
        <p className="w-[60vw] mx-auto">
          แกสโซฮอล์คอมเพล็กซ์โฮป โอเพ่น ไดเอ็ตถ่ายทำ คันยินรีแพทย์เคส
          พุทโธวีเจอึมครึมคำสาป แม่ค้าอึมครึม เยลลี่
          เบบี้ปัจเจกชนแพนงเชิญโฮมสะบึมส์ ฉลุยสะกอม โครนาออโต้บูติก เห่ย
          ออกแบบทีวีซูชิ โฟล์คโซลาร์วอลนัต เชฟรามเทพโอเปอเรเตอร์สปิริตวันเวย์
          เหี่ยวย่นคาแรคเตอร์เฟอร์รี่ คองเกรสสเกตช์จิ๊ก
        </p>
      </div>
    </div>
  );
}
