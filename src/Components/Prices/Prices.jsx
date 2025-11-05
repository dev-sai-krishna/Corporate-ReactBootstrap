import React from "react";
import "./Prices.css";

const Prices = () => {
  return (
    <div className="container prices">
      <section id="pricing" className="block pricing-block">
        <div className="container-fluid mb-5">
          <div className="title-holder">
            <h2 className="d-flex justify-content-center">PRICING & PLANS</h2>
            <div className="subtitle d-flex justify-content-center mb-5">- check our pricing & plans -</div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="heading">
                <h3 className="d-flex justify-content-center fs-3 text-black">Basic</h3>
                <span className="price d-flex justify-content-center fs-4">£49</span>
              </div>
              <div className="content">
                <div className="list-group">
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Wireframing</div>
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Visual Design</div>
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">5 pages</div>
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Free Hosting</div>
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Support &amp; Assistance</div>
                </div>
              </div>
              <div className="btn-holder d-flex justify-content-center p-4">
                <a href="https://www.google.com" className="btn btn-primary">
                  Order Now
                </a>
              </div>
            </div>
            <div className="col-sm-4 premium">
              <div className="heading">
                <h3 className="d-flex justify-content-center fs-3 mb-0 p-2 text-white">Premium</h3>
                <span className="price d-flex justify-content-center fs-2">£149</span>
              </div>
              <div className="content">
                <div className="list-group">
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Wireframing</div>
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Visual Design</div>
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">15 pages</div>
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Free Hosting</div>
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Support &amp; Assistance</div>
                </div>
              </div>
              <div className="btn-holder d-flex justify-content-center p-4">
                <a href="https://www.facebook.com" className="btn btn-primary">
                  Order Now
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="heading">
                <h3 className="d-flex justify-content-center text-black">Ultimate</h3>
                <span className="price d-flex justify-content-center fs-4">£349</span>
              </div>
              <div className="content">
                <div className="list-group">
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Wireframing</div>
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Visual Design</div>
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Unlimited pages</div>
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Free Hosting</div>
                  <div className="list-group-item d-flex justify-content-center fs-6 p-3">Support &amp; Assistance</div>
                </div>
              </div>
              <div className="btn-holder d-flex justify-content-center p-4">
                <a href="https://www.twitter.com" className="btn btn-primary">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;
