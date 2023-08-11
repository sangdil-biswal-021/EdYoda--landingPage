import React, { useState } from "react";
import "./style2.css";
import pay from "../../images/RazorpayIcon.png";
import alert from "../../images/alert.svg";

function Form2() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected option:", selectedOption);
  };
  return (
    <div className="formBox">
      <div className="top1">
        <div className="top2">
          <div className="circB">1</div>
          <div>Sign Up</div>
        </div>
        <div className="top2">
          <div className="circB">2</div>
          <div>Subscribe</div>
        </div>
      </div>
      <div className="text2">
        Select <i className="wi wi-yahoo-10"></i>our Subscription Plan
      </div>

      <div className="dataBarsDisabled">
        <div className="topAbsRed">offer expired</div>
        <div className="rightAbs">
          <div className="textSm">
            Total <span className="boldTx textMd">₹99</span>
          </div>
          <div className="textSm textRight">
            ₹8 <span className="faded textXsm"> /mo</span>
          </div>
        </div>
        <input type="radio" disabled id="input1" value="option1" name="form" />
        <label htmlFor="input1"> 12 Months Subscription</label>
      </div>
      <div className="dataBarsGreen">
        <div className="topAbsGreen">Recommended</div>
        <div className="rightAbs">
          <div className="textSm">
            Total <span className="boldTx textMd">₹179</span>
          </div>
          <div className="textSm textRight">
            ₹15 <span className="faded textXsm"> /mo</span>
          </div>
        </div>
        <input type="radio" id="input2" value="option2" name="form" />
        <label htmlFor="input2">12 Months Subscription</label>
      </div>
      <div className="dataBars">
        <input type="radio" id="input2" value="option2" name="form" />
        <div className="rightAbs">
          <div className="textSm">
            Total <span className="boldTx textMd">₹149</span>
          </div>
          <div className="textSm textRight">
            ₹25 <span className="faded textXsm"> /mo</span>
          </div>
        </div>
        <label htmlFor="input2">6 Months Subscription</label>
      </div>
      <div className="dataBars">
        <input type="radio" id="input3" value="option3" name="form" />
        <div className="rightAbs">
          <div className="textSm">
            Total <span className="boldTx textMd">₹99</span>
          </div>
          <div className="textSm textRight">
            ₹33 <span className="faded textXsm"> /mo</span>
          </div>
        </div>
        <label htmlFor="input3">3 Months Subscription</label>
      </div>

      <div className="line"></div>
      <div className="dataBars2">
        {" "}
        <div>Subscription Fee</div> <div> ₹ 18,500</div>
      </div>
      <div className="dataBarsOrange">
        <div>
          <div className="boldTx">Limited time offer</div>
          <div>
            <img src={alert} alt="" />
          </div>
        </div>

        <div className=""> - ₹ 18,401</div>
      </div>

      <div className="dataBars2">
        {" "}
        <div className="textSm">
          {" "}
          <span className="boldTx">Total </span>(inc. of 18% gst)
        </div>{" "}
        <div className="textLg"> ₹ 149</div>
      </div>
      <div className="dataBars2">
        {" "}
        <button className=" redBtn boldTx">CANCEL</button>
        <button className="greenBtn boldTx">PROCEED TO PAY</button>
      </div>
      <div className="dataBars2">
        {" "}
        <img className="leftAlign" src={pay} alt="rajorpay" />
      </div>
    </div>
  );
}

export default Form2;
