import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <hr />
      <div className="container mt-5 mb-5">
        <section id="services" className="block services-block">
          <div className="container-fluid">
            <div className="title-holder m-5">
              <h2 className="d-flex justify-content-center">OUR SERVICES</h2>
              <div className="subtitle d-flex justify-content-center">- services we provide -</div>
            </div>
            <div className="row">
              <div className="holder col-sm-4">
                <div className="icon">
                  <i className="fa-regular fa-clone"></i>
                </div>
                <h3>Responsive Design</h3>
                <p>
                  Responsive design ensures your website looks great and
                  functions seamlessly on any device. It adapts to screens of
                  all sizes, delivering accessibility, usability, and an
                  engaging user experience.
                </p>
              </div>
              <div className="holder col-sm-4">
                <div className="icon">
                  <i className="fa-solid fa-snowflake"></i>
                </div>
                <h3>Creative Design</h3>
                <p>
                  Creative design transforms ideas into visually striking
                  experiences. It blends innovation, aesthetics, and strategy to
                  capture attention, express identity, and deliver messages that
                  inspire and connect effectively.
                </p>
              </div>
              <div className="holder col-sm-4">
                <div className="icon">
                  <i className="fa-solid fa-plug"></i>
                </div>
                <h3>SEO Optimized</h3>
                <p>
                  SEO optimized design boosts your website’s visibility, driving
                  more traffic and engagement. It enhances search rankings,
                  ensures faster performance, and helps your business reach the
                  right audience effectively.
                </p>
              </div>
              <div className="holder col-sm-4">
                <div className="icon">
                  <i className="fa-solid fa-desktop"></i>
                </div>
                <h3>Retina Ready</h3>
                <p>
                  Retina ready design delivers crisp, high-resolution visuals on
                  modern devices. It enhances clarity, sharpness, and detail,
                  ensuring your website looks stunning and professional on every
                  screen.
                </p>
              </div>
              <div className="holder col-sm-4">
                <div className="icon">
                  <i className="fa-solid fa-trophy"></i>
                </div>
                <h3>Brower Compatibility</h3>
                <p>
                  Browser compatibility ensures your website works seamlessly
                  across all major browsers. It guarantees consistent
                  performance, design, and functionality, providing every
                  visitor with a smooth, reliable, and professional experience.
                </p>
              </div>
              <div className="holder col-sm-4">
                <div className="icon">
                  <i className="fa-solid fa-life-ring"></i>
                </div>
                <h3>Customer Support</h3>
                <p>
                  Customer support provides timely, helpful assistance to ensure
                  satisfaction and trust. Our dedicated team resolves issues,
                  answers questions, and guides users, creating a positive,
                  reliable experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
