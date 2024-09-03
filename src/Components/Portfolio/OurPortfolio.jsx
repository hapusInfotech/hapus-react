import React, { useEffect, useState } from "react";
import "animate.css/animate.min.css"; // Ensure you have WOW.js or equivalent animation library installed
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/OurPortfolio.css"; // Custom styles if needed
import AOS from "aos";
import "aos/dist/aos.css";

const OurPortfolio = ({ id }) => {
  const [portfolioData, setPortfolioData] = useState(null);

  // useEffect(() => {
  //   // Initialize AOS
  //   AOS.init({
  //     duration: 1200, // Animation duration
  //   });
  //   // Fetch the portfolio data from the API
  //   fetch(`/api/our-portfolio/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setPortfolioData(data))
  //     .catch((error) => console.error("Error fetching portfolio data:", error));
  // }, [id]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200, // Animation duration
    });
    var data = {
      title: "Our Portfolio",
      body: "\u003Cp\u003EWelcome to our portfolio, where innovation meets execution. At Hapus Infotech, we pride ourselves on delivering top-notch web development projects that cater to the diverse needs of our clients. Each project is a testament to our commitment to quality, creativity, and client satisfaction.\u003C/p\u003E",
      founder_description:
        "\u003Cp\u003EVinoth, the visionary behind Hapus Infotech, has been at the forefront of web development for over 17 years. His leadership and expertise have been pivotal in shaping the projects you see in our portfolio today.\u003C/p\u003E",
      founder_image:
        "http://dev.hapusinfotech.com/sites/default/files/2024-08/attachment-img.jpg",
      founder_name: "Vinoth (Founder & CEO)",
      portfolio_content:
        "\u003Ch4\u003EOur Work\u003C/h4\u003E\u003Cp\u003E\u003Cstrong\u003EInnovative Solutions:\u003C/strong\u003E Our projects range from sleek, modern websites to complex web applications. Each project is a reflection of our commitment to excellence and our passion for pushing the boundaries of web development.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003ECase Studies:\u003C/strong\u003E Dive into our case studies to see detailed breakdowns of our projects, including challenges faced, solutions implemented, and the impact achieved. Each case study highlights our problem-solving skills and technical capabilities.\u003C/p\u003E",
      portfolio_section_one_img:
        "http://dev.hapusinfotech.com/sites/default/files/2024-08/about-img.jpg",
      portfolio_section_second_img:
        "http://dev.hapusinfotech.com/sites/default/files/2024-08/Untitled%20%2826%29.png",
    };
    setPortfolioData(data);
  }, []);

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid overflow-hidden about py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div
            className="col-xl-6"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="300"
          >
            <div className="about-item">
              <h1 className="display-5 text-capitalize">
                {portfolioData.title}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: portfolioData.body }} />
              <div
                dangerouslySetInnerHTML={{
                  __html: portfolioData.portfolio_content,
                }}
                className="text-item my-4"
              />
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="d-flex align-items-center">
                    <img
                      src={portfolioData.founder_image}
                      className="img-fluid rounded-circle border border-4 border-secondary"
                      style={{ width: "100px", height: "100px" }}
                      alt="Founder"
                    />
                    <div className="ms-4">
                      <h4>{portfolioData.founder_name}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: portfolioData.founder_description,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-delay="300"
          >
            <div className="about-img">
              <div className="img-1">
                <img
                  src={portfolioData.portfolio_section_one_img}
                  className="img-fluid rounded h-100 w-100"
                  alt="Portfolio"
                />
              </div>
              <div className="img-2">
                <img
                  src={portfolioData.portfolio_section_second_img}
                  className="img-fluid rounded w-100"
                  alt="Portfolio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPortfolio;
