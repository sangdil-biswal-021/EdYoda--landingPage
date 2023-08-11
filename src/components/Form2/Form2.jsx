import React, { useState } from "react";
import "./style2.css";
import pay from '../../images/RazorpayIcon.png';

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
      <div className="text2">Select Subscription Plan</div>

      <div className="dataBars">
        <input type="radio" id="input1" value="option1" name="form" />
        <label htmlFor="input1"> 12 Months Subscription</label>
      </div>
      <div className="dataBars">
        <input type="radio" id="input2" value="option2" name="form" />
        <label htmlFor="input2">12 Months Subscription</label>
      </div>
      <div className="dataBars">
        <input type="radio" id="input2" value="option2" name="form" />
        <label htmlFor="input2">6 Months Subscription</label>
      </div>
      <div className="dataBars">
        <input type="radio" id="input3" value="option3" name="form" />
        <label htmlFor="input3">3 Months Subscription</label>
      </div>

      <div className="line"></div>
      <div className="dataBars2">
        {" "}
        <div>Subscription Fee</div> <div> ₹ 18,401</div>
      </div>
      <div className="dataBars">Limited time offer</div>

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
      <div className="dataBars2"> <img className="leftAlign" src={pay} alt="rajorpay" /></div>
    </div>
  );
}

export default Form2;
