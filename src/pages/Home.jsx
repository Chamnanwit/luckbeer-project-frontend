import cover1 from '../assets/cover1.jpg'
import cover2 from '../assets/cover2.jpg'
import cover3 from '../assets/cover3.jpg'
import cover4 from '../assets/cover4.jpg'

export default function Home() {
    return (
        <>
        <div>
        <div className="carousel w-full flex ">
  <div id="item1 " className="carousel-item w-full">
    <img src={cover1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={cover2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={cover3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={cover4} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
        </>
    )
}