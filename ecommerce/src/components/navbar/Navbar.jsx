import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
          <SearchIcon className="navSearchIcon"/>
          <input placeholder="Search"  className="navSearchInput"/>
        </div>
        <FavoriteBorderIcon className="navIcon" />
        <div className="navCart">
          <ShoppingCartOutlinedIcon className="navIcon" />
          <label className="navCartLabel">2</label>
        </div>
      </div>
    </div>
  )
}
