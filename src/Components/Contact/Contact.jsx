import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="">
      <section id="contact" className="block contact-block">
        <div className="container-fluid">
          <div className="title-holder mt-5">
            <h2 className="d-flex justify-content-center">CONTACT US</h2>
            <div className="subtitle d-flex justify-content-center mb-5">- get connected with us -</div>
          </div>
          <form className="contact-form container ">
            <div className="row gap-3">
              <div className="col-sm-4">
                <input
                  placeholder="Enter your full name"
                  required=""
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-sm-4">
                <input
                  placeholder="Enter your email address"
                  required=""
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="col-sm-4">
                <input
                  placeholder="Enter your contact number"
                  required=""
                  type="tel"
                  className="form-control"
                />
              </div>
              <div className="col-sm-4">
                <input
                  placeholder="Set Password"
                  required=""
                  type="tel"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mt-5 mb-4">
              <div className="col-sm-12">
                <textarea
                  placeholder="Enter your contact message"
                  required=""
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="btn-holder d-flex justify-content-center mb-5">
              <button type="submit" className="btn btn-primary contact-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="google-map">
          <iframe
            title="map" className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14048.211570060965!2d-0.1228208876550775!3d51.505942908931324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1481805868782"
          ></iframe>
        </div>
        <div className="container-fluid mt-5">
          <div className="contact-info d-flex justify-content-center">
            <ul className="">
              <li className="d-flex flex-column gap-3">
                <i className="fas fa-envelope"></i>hello@domain.com
              </li>
              <li className="d-flex flex-column justify-content-center gap-3">
                <i className="fas fa-phone"></i>000-000-0000
              </li>
              <li className="d-flex flex-column gap-3">
                <i className="fas fa-map-marker-alt"></i>London, United Kingdom
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
