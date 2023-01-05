import "./navbar.css"
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="/assets/img/logo.png" alt="" className="navLogo"/>
        </div>
        <ul className="navLists">
            <li className="navList">Men</li>
            <li className="navList">Women</li>
            <li className="navList">Kids</li>
            <li className="navList">Customise</li>
            <li className="navList">Sale</li>
            <li className="navList">Gifts</li>
            <li className="navList">SNKRS</li>
        </ul>
        <div className="navIcons">
            <div className="navSearch">
                <div className="navSearchIcon">
                    <AiOutlineSearch/>
                </div>
                <input placeholder="Search" className="navSearchInput"/>
            </div>
            <AiOutlineHeart className="NavIcon"/>
            <div className="navCart">
                <AiOutlineShoppingCart className="NavIcon"/>
                <label className="navCartLabel">2</label>
            </div>
        </div>
    </div>
  )
}
