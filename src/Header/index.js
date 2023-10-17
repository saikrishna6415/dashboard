import React from "react";
import "./Header.css";
import { FaDollarSign } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

import Sales from "../Assets/Images/Sales.png";
import Orders from "../Assets/Images/Orders.png";
import Earning from "../Assets/Images/Earning.png";
import Service from "../Assets/Images/Service.png";
import BarGraph from "../Componenrs/BarGraph";
import PieGraph from "../Componenrs/PieGraph";
import ProductSell from "../Componenrs/Products";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  return (
    <div className={isMobile ? "right-part-mobile" : "right-part"}>
      <div className={isMobile ? "header-mobile" : "header"}>
        <h2 className={isMobile ? "header-title-mobile" : "header-title"}>Hello Sharukh</h2>
        <div className={isMobile ? "search-bar-mobile" : "search-bar"}>
          <div className={isMobile ? "search-icon-mobile" : "search-icon"}>
            <i className="fas fa-search"></i>
          </div>
          <input type="text" placeholder="Search..." className={isMobile ? "search-input-mobile" : "search-input"} />
        </div>
      </div>
      <div className={isMobile ? "cards-mobile" : "cards"}>
        <div className={isMobile ? "card-mobile" : "card"}>
          <img src={Earning} alt="description" className={isMobile ? "cardimage-mobile" : "cardimage"} />
          <div className={isMobile ? "card-content-mobile" : "card-content"}>
            <p className={isMobile ? "card-title-mobile" : "card-title"}>Earning</p>
            <p className={isMobile ? "card-amount-mobile" : "card-amount"}>$198k</p>
            <p className={isMobile ? "card-text-mobile" : "card-text"}>
              <span className={isMobile ? "value-rise-mobile" : "value-rise"}>+37.8</span> this month
            </p>
          </div>
        </div>

        <div className={isMobile ? "card-mobile" : "card"}>
          <img src={Orders} alt="description" className={isMobile ? "cardimage-mobile" : "cardimage"} />
          <div className={isMobile ? "card-content-mobile" : "card-content"}>
            <p className={isMobile ? "card-title-mobile" : "card-title"}>Orders</p>
            <p className={isMobile ? "card-amount-mobile" : "card-amount"}>$2.4k</p>
            <p className={isMobile ? "card-text-mobile" : "card-text"}>
              <span className={isMobile ? "value-fall-mobile" : "value-fall"}>-2% </span> this month
            </p>
          </div>
        </div>

        <div className={isMobile ? "card-mobile" : "card"}>
          <img src={Service} alt="description" className={isMobile ? "cardimage-mobile" : "cardimage"} />
          <div className={isMobile ? "card-content-mobile" : "card-content"}>
            <p className={isMobile ? "card-title-mobile" : "card-title"}>Balance</p>
            <p className={isMobile ? "card-amount-mobile" : "card-amount"}>$2.4k</p>
            <p className={isMobile ? "card-text-mobile" : "card-text"}>
              <span className={isMobile ? "value-fall-mobile" : "value-fall"}>-2% </span> this month
            </p>
          </div>
        </div>

        <div className={isMobile ? "card-mobile" : "card"}>
          <img src={Sales} alt="description" className={isMobile ? "cardimage-mobile" : "cardimage"} />
          <div className={isMobile ? "card-content-mobile" : "card-content"}>
            <p className={isMobile ? "card-title-mobile" : "card-title"}>Total Sales</p>
            <p className={isMobile ? "card-amount-mobile" : "card-amount"}>$89k</p>
            <p className={isMobile ? "card-text-mobile" : "card-text"}>
              <span className={isMobile ? "value-rise-mobile" : "value-rise"}>+11% </span> this week
            </p>
          </div>
        </div>
        {/* Add more cards with similar structure */}
      </div>

      <div style={{ display: "flex", flexDirection: !isMobile ? "row" : "column" }}>
        <BarGraph />
        <PieGraph />
      </div>
      <ProductSell/>
    </div>
  );
};
export default Header;
