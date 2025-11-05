import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className=" container mt-5">
        <section id="blog" className="block blog-block">
          <div className="container-fluid">
            <div className="title-holder">
              <h2 className="d-flex justify-content-center">LATEST FROM BLOG</h2>
              <div className="subtitle d-flex justify-content-center mb-5">- get our latest news from blog -</div>
            </div>
            <div className="row mb-5">
              <div className="col-sm-4">
                <div className="holder">
                  <div className="card">
                    <img
                      className="card-img-top img-fluid p-3"
                      src="https://bibekshakya.com/demo/react/reactbootstrap/corporate/static/media/blog1.41fc52f527bd1b05cdcd.jpg"
                    />
                    <div className="card-body">
                      <time>15 Nov 2016</time>
                      <div className="card-title h5 mt-2">Coffee Lovers</div>
                      <p className="card-text">
                        For coffee lovers, every sip is more than a drink—it’s
                        an experience. Rich aromas, bold flavors, and perfect
                        brews create moments of comfort, energy, and pure
                        enjoyment every day.
                      </p>
                      <a
                        href="https://www.google.com"
                        className="btn btn-primary"
                      >
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="holder">
                  <div className="card">
                    <img
                      className="card-img-top img-fluid p-3"
                      src="https://bibekshakya.com/demo/react/reactbootstrap/corporate/static/media/blog2.b31a167d23173c955d09.jpg"
                    />
                    <div className="card-body">
                      <time>10 Nov 2016</time>
                      <div className="card-title h5 mt-2">Tips for UI Design</div>
                      <p className="card-text">
                        Effective UI design combines clarity, simplicity, and
                        aesthetics. Focus on intuitive navigation, consistent
                        visuals, responsive layouts, and user-friendly
                        interactions.
                      </p>
                      <a
                        href="https://www.facebook.com"
                        className="btn btn-primary"
                      >
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="holder">
                  <div className="card">
                    <img
                      className="card-img-top img-fluid p-3"
                      src="https://bibekshakya.com/demo/react/reactbootstrap/corporate/static/media/blog3.bcca9fb438e228c66612.jpg"
                    />
                    <div className="card-body">
                      <time>07 Nov 2016</time>
                      <div className="card-title h5 mt-2">Beautiful Day</div>
                      <p className="card-text">
                        A beautiful day brings warmth, light, and positivity.
                        It’s a chance to embrace joy, connect with nature, and
                        appreciate life’s simple moments, leaving you refreshed
                        and inspired.
                      </p>
                      <a
                        href="https://www.twitter.com"
                        className="btn btn-primary"
                      >
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
