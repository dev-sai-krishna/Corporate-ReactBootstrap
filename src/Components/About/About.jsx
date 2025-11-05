import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container about">
      <section id="about">
        <div className="row featurette">
          <h1 className="aboutUs">About Us</h1>
          <p className="aboutP">- learn more about us -</p>
          <div className="col-md-7 order-md-2 mb-4">
            <p className="lead mt-4">
              Welcome to Corporate, where professionalism meets innovation. We
              are dedicated to helping businesses and individuals achieve their
              goals with tailored solutions that inspire growth and success. Our
              team combines expertise, creativity, and technology to deliver
              services that truly make a difference. At Corporate, we value
              trust, integrity, and long-term partnerships. We believe every
              client deserves personalized attention and results that exceed
              expectations. Whether you’re looking to strengthen your brand,
              streamline operations, or plan for the future, we are here to
              guide you every step of the way. Corporate is more than a
              name—it’s your partner in progress.
            </p>{" "}
            <div className="progress-block">
              <h4>HTML / CSS / Javascript</h4>
              <div className="progress">
                <div className="bar">80%</div>
              </div>
            </div>
            <div className="progress-block mb-4 mt-4">
              <h4>RESPONSIVE</h4>
              <div className="progress">
                <div className="bar2">95%</div>
              </div>
            </div>
            <div className="progress-block">
              <h4>PHOTOSHOP</h4>
              <div className="progress">
                <div className="bar3">60%</div>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-5 order-md-1">
            <img
              width={500}
              className="img-fluid"
              src="https://plus.unsplash.com/premium_photo-1723485655490-0a2093cf6c7f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
