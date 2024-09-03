import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Testimonial.css"; // Your custom CSS
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = ({ onReady }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch the testimonial data
    fetch("/api/testimonials")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
        onReady();
      })
      .catch((error) => console.error("Error fetching testimonials:", error));

    // const data = [
    //   {
    //     title: "Client One",
    //     body: "\u003Cp\u003E\u003Cstrong\u003ELorem Ipsum\u003C/strong\u003E is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\u003C/p\u003E",
    //     location: "Tamil Nadu ,India",
    //     testimonial_image:
    //       "http://dev.hapusinfotech.com/sites/default/files/2024-07/team-1..jpg",
    //   },
    //   {
    //     title: "Suresh",
    //     body: "\u003Cp\u003E\u003Cstrong\u003ELorem Ipsum\u003C/strong\u003E is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\u003C/p\u003E",
    //     location: "Tamil Nadu,India",
    //     testimonial_image:
    //       "http://dev.hapusinfotech.com/sites/default/files/2024-07/team-2.jpg",
    //   },
    //   {
    //     title: "Client Three",
    //     body: "\u003Cp\u003E\u003Cstrong\u003ELorem Ipsum\u003C/strong\u003E is another dummy text.\u003C/p\u003E",
    //     location: "Kerala, India",
    //     testimonial_image:
    //       "http://dev.hapusinfotech.com/sites/default/files/2024-07/team-3.jpg",
    //   },
    //   {
    //     title: "Ravi",
    //     body: "\u003Cp\u003E\u003Cstrong\u003ELorem Ipsum\u003C/strong\u003E is simply dummy text of the printing and typesetting industry.\u003C/p\u003E",
    //     location: "Delhi, India",
    //     testimonial_image:
    //       "http://dev.hapusinfotech.com/sites/default/files/2024-07/team-4.jpg",
    //   },
    // ];

    // setTestimonials(data);
    // Initialize AOS for animations
    AOS.init({
      duration: 1000, // Duration of the animation
      offset: 300, // Offset from the top of the viewport
    });
  }, []);

  // Function to group testimonials into pairs
  const groupTestimonials = (testimonials) => {
    const grouped = [];
    for (let i = 0; i < testimonials.length; i += 2) {
      grouped.push(testimonials.slice(i, i + 2));
    }
    return grouped;
  };

  return (
    <div
      className="testimonial-component container-lg my-5"
      data-aos="fade-up"
      data-aos-offset="300"
    >
      <div className="row">
        <div className="col-sm-12">
          <h2>
            Customer <b>Testimonials</b>
          </h2>
          {/* Carousel */}
          <Carousel controls={true} indicators={false}>
            {groupTestimonials(testimonials).map((testimonialPair, index) => (
              <Carousel.Item key={index}>
                <div className="row">
                  {testimonialPair.map((testimonial, subIndex) => (
                    <div className="col-sm-6" key={subIndex}>
                      <div className="testimonial">
                        <p>
                          <span>
                            <FontAwesomeIcon icon={faQuoteLeft} />
                          </span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: testimonial.body,
                            }}
                          />
                        </p>
                      </div>
                      <div className="media">
                        <img
                          src={testimonial.testimonial_image}
                          className="mr-3 rounded-circle"
                          alt={testimonial.title}
                          fetchpriority="high"
                        />
                        <div className="media-body">
                          <div className="overview">
                            <div className="name">
                              <b>{testimonial.title}</b>
                            </div>
                            <div className="details">
                              {testimonial.location}
                            </div>
                            <div className="star-rating">
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li className="list-inline-item">
                                  <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li className="list-inline-item">
                                  <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li className="list-inline-item">
                                  <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li className="list-inline-item">
                                  <FontAwesomeIcon icon={faStarHalfAlt} />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
