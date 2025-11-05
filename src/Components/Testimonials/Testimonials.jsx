import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="content">
      <hr className="mb-5" />
      <section id="testimonials">
        <h2 className="d-flex justify-content-center">CLIENT TESTIMONIALS</h2>
        <p className="d-flex justify-content-center">
          - what client says about us -
        </p>
        <div
          id="myCarousel"
          className="carousel slide mb-5 mt-5"
          data-bs-ride="carousel"
        >
          {" "}
          <div className="carousel-indicators">
            {" "}
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-label="Slide 1"
              aria-current="true"
            ></button>{" "}
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>{" "}
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>{" "}
          </div>{" "}
          <div className="carousel-inner">
            {" "}
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1536183922588-166604504d5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
                className="w-100"
                alt=""
              />
              <div className="carousel-caption">
                {" "}
                <div className="container">
                  {" "}
                  <p className="para">
                    Corporate transformed our online presence with their
                    innovative solutions. Their team is professional,
                    responsive, and truly cares about delivering results. Highly
                    recommended!
                  </p>{" "}
                  <p className="text-white mb-1">- JOHN WILLS</p>
                  <p className="text-white">Manager</p>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1536183922588-166604504d5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
                className="w-100"
                alt=""
              />
              <div className="container">
                {" "}
                <div className="carousel-caption">
                  <p className="para">
                    Working with Corporate was seamless. They understood our
                    vision and exceeded expectations with their creativity and
                    expertise. Our business has never looked better online.
                  </p>
                  <p className="text-white mb-1">- JASMINE PERRY</p>
                  <p className="text-white">Accountant</p>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1536183922588-166604504d5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
                className="w-100"
                alt=""
              />
              <div className="container">
                {" "}
                <div className="carousel-caption">
                  <p className="para">
                    The support and guidance from Corporate have been
                    outstanding. Their attention to detail and commitment to
                    excellence made a real difference for our company.
                  </p>{" "}
                  <p className="text-white mb-1">- ROCKY JOHNSON</p>
                  <p className="text-white">CEO</p>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            {" "}
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>{" "}
            <span className="visually-hidden">Previous</span>{" "}
          </button>{" "}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            {" "}
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>{" "}
            <span className="visually-hidden">Next</span>{" "}
          </button>{" "}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
