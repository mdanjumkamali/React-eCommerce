import "./home.css"
import Navbar from "../components/navbar/Navbar"
import Left from "../components/left/Left"
import Right from "../components/right/Right"

export default function Home() {
  return (
    <div>
        <Navbar />
        <div className="homeWrapper">
          <Left className="homeLeft"/>
          <Right className="homeRight"/>
        </div>
    </div>
  )
}
