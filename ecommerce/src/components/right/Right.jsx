import { useState } from "react"
import { Img } from "../../Data"
import "./right.css"


export default function Right() {
  const [src, setSrc] = useState(Img[0])
  const clickHandler = (myIndex) => {
    setSrc(Img[myIndex])
  }

  return (
    <div className="right">
      <div className="rightTop">
        <img src={src.imgUrl} alt="" className="righTopImg"/>
      </div>
      <div className="rightBottom">
         <div className="rightBottomBox">
            <img src={Img[0].imgUrl} alt="" className="rightBottomImg" key={Img[0].id}
            onClick={ () => clickHandler(0)}
            />
          </div>
          <div className="rightBottomBox">
            <img src={Img[1].imgUrl} alt="" className="rightBottomImg" key ={Img[1].id}
             onClick={ () => clickHandler(1)}/>
          </div>
          <div className="rightBottomBox">
            <img src={Img[2].imgUrl} alt="" className="rightBottomImg" key={Img[2].id}
             onClick={ () => clickHandler(2)}/>
          </div>
      </div>
    </div>
  )
}
