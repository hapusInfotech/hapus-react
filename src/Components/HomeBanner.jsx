import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is imported
import "animate.css"; // Optional: Include animate.css for the animations
import "../css/HomeBanner.css";

const HomeBanner = ({ id, onReady }) => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    fetch(`/api/portfolio/home-banner-block/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBannerData(data);
        onReady();
      })
      .catch((error) => console.error("Error fetching banner data:", error));
  }, [id]);

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid carousel px-0 pb-5">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {bannerData.field_home_banner_section.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {bannerData.field_home_banner_section.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={item.image}
                className="img-fluid"
                alt={item.title}
                fetchpriority="high"
              />
              <div className="carousel-caption d-flex flex-column align-items-start">
                <h4 className="text-white mb-4 animated slideInDown">
                  {item.title}
                </h4>
                <h1 className="text-white display-1 mb-4 animated slideInDown">
                  {item.description}
                </h1>
                <a href={item.link.url} className="btn btn-primary px-5 py-3">
                  {item.link.title}
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
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
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
