import './left.css'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

export default function Left() {
  return (
    <div className='left'>
      <h1 className="leftHeading">Air Jordan 1 Mid SE</h1>
      <p className="leftText-1">Men's Shoes</p>
      <p className="leftText-2">
      MRP : $199.99 <br/>
      incl. of taxes<br/>
      (Also includes all applicable duties)
      </p>
      <p className="leftText-3"> 
      Get that Jordan energy on your feet this festive season. <br/>
      Rich grain leather with bright details make this pair shine <br/>
      like festive lights.
      </p>
      <button className='leftButton'>
        BUY NOW
        <ArrowForwardOutlinedIcon className='leftButtonIcon' />
      </button>
    </div>
  )
}
