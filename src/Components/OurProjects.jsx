import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/OurProjects.css"; // Optional: Create and link your custom CSS file
import AOS from "aos";
import "aos/dist/aos.css";

const OurProjects = ({onReady}) => {
  const [projects, setProjects] = useState([]);

  const projectRefs = useRef([]);
  const [currentCenteredProject, setCurrentCenteredProject] = useState(null);

  useEffect(() => {
    fetch("/api/our-projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        onReady();
        // Initialize AOS for animations
        AOS.init({
          duration: 1000,
          offset: 300,
        });
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  // useEffect(() => {
  //   // Initialize AOS for animations
  //   AOS.init({
  //     duration: 1000, // Duration of the animation
  //     offset: 300, // Offset from the top of the viewport
  //   });
  //   const data = [
  //     {
  //       title: "E-Gov Bostwanna",
  //       body: "\u003Cp\u003EProject one Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi\u003C/p\u003E",
  //       field_project_image:
  //         "http://dev.hapusinfotech.com/sites/default/files/2024-07/Untitled%20%289%29.png",
  //     },
  //     {
  //       title: "Nickurie",
  //       body: "\u003Cp\u003EProject two Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi\u003C/p\u003E",
  //       field_project_image:
  //         "http://dev.hapusinfotech.com/sites/default/files/2024-07/Untitled%20%289%29.png",
  //     },
  //     {
  //       title: "CEGIS",
  //       body: "\u003Cp\u003EProject three Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi\u003C/p\u003E",
  //       field_project_image:
  //         "http://dev.hapusinfotech.com/sites/default/files/2024-07/Untitled%20%289%29.png",
  //     },
  //     {
  //       title: "StatsBots",
  //       body: "\u003Cp\u003EProject four Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi\u003C/p\u003E",
  //       field_project_image:
  //         "http://dev.hapusinfotech.com/sites/default/files/2024-07/Untitled%20%289%29.png",
  //     },
  //     {
  //       title: "Webro Centric",
  //       body: "\u003Cp\u003EProject five Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi\u003C/p\u003E",
  //       field_project_image:
  //         "http://dev.hapusinfotech.com/sites/default/files/2024-07/Untitled%20%289%29.png",
  //     },
  //     {
  //       title: "Project",
  //       body: "\u003Cp\u003EProject six Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi\u003C/p\u003E",
  //       field_project_image:
  //         "http://dev.hapusinfotech.com/sites/default/files/2024-07/Untitled%20%289%29.png",
  //     },
  //   ];

  //   setProjects(data);
  // }, []); // Empty dependency array means this effect runs only once after the initial render

  useEffect(() => {
    const findCenteredProject = () => {
      const centerCircleElement = document.querySelector(".center-circle");
      if (!centerCircleElement || projects.length === 0) return;
      // Get the vertical center of the .center-circle element
      const centerCircleRect = centerCircleElement.getBoundingClientRect();
      const circleCenter = centerCircleRect.top + centerCircleRect.height / 2;

      let closestProjectIndex = null;
      let closestDistance = Infinity;

      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const projectCenter = rect.top + rect.height / 2;
          const distanceToCenter = Math.abs(circleCenter - projectCenter);

          if (distanceToCenter < closestDistance) {
            closestDistance = distanceToCenter;
            closestProjectIndex = index;
          }
        }
      });

      if (
        closestProjectIndex !== null &&
        closestProjectIndex !== currentCenteredProject
      ) {
        const cardBackgroundElement = document.querySelector(
          ".mask-content .mask-card"
        );
        // Set the background image and size for the center circle
        if (cardBackgroundElement) {
          cardBackgroundElement.style.background = `linear-gradient(rgba(19, 53, 123, .6), rgba(19, 53, 123, .6)), url(${projects[closestProjectIndex].field_project_image})`;
          cardBackgroundElement.style.backgroundSize = "cover";
        }

        // Set the innerHTML of the .mask element
        const maskElementTitle = document.querySelector(
          ".mask-content .card-title"
        );
        if (maskElementTitle) {
          maskElementTitle.innerHTML = projects[closestProjectIndex].title;
        }

        // Set the innerHTML of the .mask element
        const maskElementText = document.querySelector(
          ".mask-content .card-text"
        );
        if (maskElementText) {
          maskElementText.innerHTML = projects[closestProjectIndex].body;
        }

        // Set the background image and size for the center circle
        if (centerCircleElement) {
          centerCircleElement.style.backgroundImage = `url(${projects[closestProjectIndex].field_project_image})`;
          centerCircleElement.style.backgroundSize = "cover";
        }

        setCurrentCenteredProject(closestProjectIndex);
      }
    };

    const checkPositions = () => {
      findCenteredProject();
      requestAnimationFrame(checkPositions); // Continuously call this function
    };

    requestAnimationFrame(checkPositions); // Start the loop

    return () => cancelAnimationFrame(checkPositions); // Clean up the loop
  }, [projects, currentCenteredProject]);

  return (
    <>
      <div
        className="text-center my-5 our-portfolio-title"
        data-aos="fade-up"
        data-aos-offset="300"
      >
        <p className="h5 mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
          Our Projects
        </p>
        <h1 className="display-5">Our recently completed projects</h1>
      </div>
      <div
        className="void"
        id="void"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-delay="300"
      >
        <div className="crop">
          <ul id="card-list" style={{ "--count": projects.length }}>
            {projects.map((project, index) => (
              <li key={index}>
                <div
                  className="card project"
                  ref={(el) => (projectRefs.current[index] = el)}
                  style={{
                    background: `linear-gradient(rgba(19, 53, 123, .6), rgba(19, 53, 123, .6)), url(${project.field_project_image})`,
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <a href="#">
                    <span className="model-name">{project.title}</span>
                    {/* <span dangerouslySetInnerHTML={{ __html: project.body }} /> */}
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div className="last-circle"></div>
          <div className="second-circle"></div>
        </div>
        <div
          className="mask d-flex align-items-center justify-content-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="500"
        >
          <div className="mask-content">
            <div className="card mask-card">
              <div className="card-body text-white">
                <p className="h3 card-title text-center fw-bold"></p>
                <p className="card-text fs-6 lh-base"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="center-circle"></div>
      </div>
    </>
  );
};

export default OurProjects;
