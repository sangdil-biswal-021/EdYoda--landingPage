import React from "react";
import "./style.css";

export const Form = () => {
  return (
    <div className="form">
      <div className="progress-bar">
        <div className="stage">
          <div className="icon">
            <div className="text-wrapper">1</div>
          </div>
          <div className="text">Sign Up</div>
        </div>
        <div className="stage">
          <div className="icon">
            <div className="text-wrapper">2</div>
          </div>
          <div className="text">Subscribe</div>
        </div>
      </div>
      <div className="form-header">
        <div className="div">Select your subcription plan</div>
      </div>
      <div className="input-container">
        <div className="text-field">
          <img className="radio-button" alt="Radio button" src="radio-button.svg" />
          <div className="text-container">
            <div className="text-2">12 Months Subscription</div>
            <div className="right-text-container">
              <div className="top-text">
                <div className="text-3">Total</div>
                <div className="text-4">₹99</div>
              </div>
              <div className="div-2">
                <div className="text-5">₹8</div>
                <div className="text-6">/mo</div>
              </div>
            </div>
          </div>
          <div className="tag">
            <div className="text-wrapper-2">Offer expired</div>
          </div>
        </div>
        <div className="text-field-2">
          <img className="radio-button" alt="Radio button" src="image.svg" />
          <div className="text-container">
            <div className="text-7">12 Months Subscription</div>
            <div className="div-3">
              <div className="top-text">
                <div className="text-8">Total</div>
                <div className="text-9">₹179</div>
              </div>
              <div className="div-2">
                <div className="text-10">₹15</div>
                <div className="text-6">/mo</div>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Recommended</div>
          </div>
        </div>
        <div className="text-field-3">
          <img className="radio-button" alt="Radio button" src="radio-button-2.svg" />
          <div className="text-container">
            <div className="text-7">6 Months Subscription</div>
            <div className="div-3">
              <div className="top-text">
                <div className="text-8">Total</div>
                <div className="text-9">₹149</div>
              </div>
              <div className="div-2">
                <div className="text-10">₹25</div>
                <div className="text-6">/mo</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-field-4">
          <img className="radio-button" alt="Radio button" src="radio-button-3.svg" />
          <div className="text-container">
            <div className="text-7">3 Months Subscription</div>
            <div className="div-3">
              <div className="top-text">
                <div className="text-8">Total</div>
                <div className="text-9">₹99</div>
              </div>
              <div className="div-2">
                <div className="text-10">₹33</div>
                <div className="text-6">/mo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="summary-container">
        <div className="div-4">
          <div className="text-11">Subscription Fee</div>
          <div className="text-12">₹18,500</div>
        </div>
        <div className="alert">
          <div className="div-4">
            <div className="text-13">Limited time offer</div>
            <div className="text-14">- ₹18,401</div>
          </div>
          <div className="alert-body">
            <img className="icon-clock" alt="Icon clock" src="icon-clock.svg" />
            <p className="p">Offer valid till 25th March 2023</p>
          </div>
        </div>
        <div className="div-4">
          <p className="left-text">
            <span className="span">Total </span>
            <span className="text-wrapper-4">(Incl. of 18% GST)</span>
          </p>
          <div className="right-text">₹149</div>
        </div>
      </div>
      <div className="button-container">
        <div className="secondary-button">
          <div className="text-15">CANCEL</div>
        </div>
        <div className="primary-button">
          <div className="text-16">PROCEED TO PAY</div>
        </div>
      </div>
      <div className="icon-container">
        <div className="razorpay-icon" />
      </div>
    </div>
  );
}; 