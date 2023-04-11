import React from "react"
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img className="header-logo" src="/images/amazon-dark-logo-removebg-preview.png" alt="logo" />
      <div className="header-search">
        <input className="header-searchInput" type="text" name="" value="" />
       <SearchIcon 
       className="header-searchIcon"/>
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello there</span>
          <span className="header-optionLineTwo">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <div className="header-optionBasket">
          <ShoppingBasketIcon />

          <span className="header-optionLineTwo header-basketCount">0</span>
        </div>



      </div>
    </div>
  );
}
export default Header