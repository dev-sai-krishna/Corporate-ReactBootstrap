import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
      <footer id="footer" className="footer">
        <div className="container-fluid foot">
          <div className="copyright d-flex justify-content-center text-white">© 2022 Corporate. All Right Reserved.</div>
          <div className="socials">
            <ul>
              <li>
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="go-top"></div> */}
        </div>
      </footer>
  );
};

export default Footer;
