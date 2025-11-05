import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1507844471338-4d8b99a431cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1251"
              className="image img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="p-4">The perfect design for your website</h2>
              <p>
                The perfect design for your website blends creativity,
                functionality, and user experience. It captures your brand’s
                identity, engages visitors, and guides them smoothly to your
                goals. With responsive layouts, modern visuals, and clear
                navigation, a well-crafted design ensures your website looks
                professional, builds trust, and leaves a lasting impression..
              </p>
              <a className="btn btn-light mb-5 mt-2" href="https://www.google.com">
                Learn More <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1699011488383-fbf76377f781?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"
              className="image img-fluid" 
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="p-4">Start Your Future Financial Plan</h2>
              <p>
                The perfect design for your website blends creativity,
                functionality, and user experience. It captures your brand’s
                identity, engages visitors, and guides them smoothly to your
                goals. With responsive layouts, modern visuals, and clear
                navigation, a well-crafted design ensures your website looks
                professional, builds trust, and leaves a lasting impression..
              </p>
              <a className="btn btn-light mb-5 mt-2" href="https://www.twitter.com">
                Learn More <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1708374818332-e80329ecc163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
              className="image img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="p-4">Enjoy the Difference</h2>
              <p>
                slide 3 Enjoy the Difference Enjoy the difference that true
                quality and care bring to your life. From thoughtful details to
                lasting value, the right choice transforms ordinary moments into
                extraordinary experiences. It’s not just about products or
                services—it’s about how they make you feel, creating
                satisfaction, trust, and joy in every interaction.
              </p>
              <a className="btn btn-light mb-5 mt-2" href="https://www.facebook.com">
                Learn More <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Home;
