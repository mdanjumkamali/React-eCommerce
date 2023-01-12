import "./right.css"
import { Img } from "../../Data"
import { useState } from "react"

export default function Right() {
  const [src, setSrc] = useState(Img[0])
  const clickHandler = (myIndex) => {
    setSrc(Img[myIndex])
  }

  return (
    <div className="right">
      <div className="rightTop">
        <img src={src.imgUrl} alt="" className="rightTopImg"/>
      </div>
      <div className="rightBottom">
        <div className="rightBottomBox">
          <img src="assets/img/img-1.png" alt="" className="rightBottomImg" 
           key={Img[0].id}
           onClick = { () => clickHandler(0)}
          />
        </div>
        <div className="rightBottomBox">
          <img src="assets/img/img-2.png" alt="" className="rightBottomImg"
          key={Img[1].id}
          onClick = { () => clickHandler(1)}
          />
        </div>
        <div className="rightBottomBox">
          <img src="assets/img/img-3.png" alt="" className="rightBottomImg"
            key={Img[2].id}
            onClick = { () => clickHandler(2)}
          />
        </div>
      </div>
    </div>
  )
}
