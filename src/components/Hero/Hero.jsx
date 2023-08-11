import React from "react";
import book from "../../images/bookIcon.png";
import clock from "../../images/clockIcon.png";
import grad from "../../images/graduateIcon.png";
import live from "../../images/live.png";
import ads from "../../images/noAdsIcon.png";

function Hero() {
  return (
    <div>
      <div className="textMain">Access Curated Course Worth 100</div>
      <div className="textSub">
        ₹ 18,500 at just ₹ <span className="span">99</span> per year!
      </div>
      <div>
        <div className=" menus">
          {" "}
          <img className="imgs" src={book} alt="pic" />{" "}
          <div className="text-big">
            <span className="span text-big ">100+ </span>
            Job relevant courses
          </div>
        </div>
        <div className=" menus">
          {" "}
          <img className="imgs" src={clock} alt="pic" />{" "}
          <div className="text-big">
            <span className="span text-big ">20,000+ </span>
            Hours of content
          </div>
        </div>
        <div className=" menus">
          {" "}
          <img className="imgs" src={live} alt="pic" />{" "}
          <div className="text-big">
            <span className="span text-big ">Exclusive </span>
            Webinar access
          </div>
        </div>
        <div className=" menus">
          {" "}
          <img className="imgs" src={grad} alt="pic" />{" "}
          <div className="text-big">
            Scholarship worth
            <span className="span text-big ">₹94,500 </span>
            
          </div>
        </div>
        <div className=" menus">
          {" "}
          <img className="imgs" src={ads} alt="pic" />{" "}
          <div className="text-big">
            <span className="span text-big ">Ad Free </span>
            learning
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
