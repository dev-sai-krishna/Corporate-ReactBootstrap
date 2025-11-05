import React from "react";
import "./Works.css";

const Works = () => {
  return (
    <div>
      <hr className="mb-5"/>
      <section id="works" className="block works-block">
        <div className="container-fluid">
          <div className="title-holder mt-4 mb-4">
            <h2 className="d-flex justify-content-center">OUR WORKS</h2>
            <div className="subtitle d-flex justify-content-center">
              - our awesome works -
            </div>
          </div>
          <div className="container ">
            <div className="portfoliolist row mt-5">
              <div className="col-sm-4">
                <div className="portfolio-wrapper">
                  <a href="https://www.google.com">
                    <img
                      src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                      className="img-fluid"
                    />
                    <div className="label text-center">
                      <h3>The Difference</h3>
                      <p>Web Design</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfolio-wrapper">
                  <a href="https://www.google.com">
                    <img
                      src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1247"
                      className="img-fluid"
                    />
                    <div className="label text-center">
                      <h3>Lonely Path</h3>
                      <p>Branding</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfolio-wrapper">
                  <a href="https://www.google.com">
                    <img
                      src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
                      className="img-fluid"
                    />
                    <div className="label text-center">
                      <h3>Shoot</h3>
                      <p>Photography</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfolio-wrapper">
                  <a href="https://www.google.com">
                    <img
                      src="https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932"
                      className="img-fluid"
                    />
                    <div className="label text-center">
                      <h3>Nature Patterns</h3>
                      <p>Web Design</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfolio-wrapper">
                  <a href="https://www.google.com">
                    <img
                      src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                      className="img-fluid"
                    />
                    <div className="label text-center">
                      <h3>The Difference</h3>
                      <p>Branding</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfolio-wrapper">
                  <a href="https://www.google.com">
                    <img
                      src="https://images.unsplash.com/photo-1580892047528-7dfd384dce65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
                      className="img-fluid"
                    />
                    <div className="label text-center">
                      <h3>Winter Sonata</h3>
                      <p>Photography</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination justify-content-center mt-0">
            <li className="page-item">
              <a className="page-link" role="button" tabIndex="0" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <span className="page-link bg-danger text-white">
                2
                {/* <span className="visually-hidden">(current)</span> */}
              </span>
            </li>
            <li className="page-item">
              <a className="page-link" role="button" tabIndex="0" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" role="button" tabIndex="0" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" role="button" tabIndex="0" href="#">
                5
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Works;
