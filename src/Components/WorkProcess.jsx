import React, { useEffect, useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import "../css/WorkProcess.css"; // Ensure this CSS file includes necessary styles

const WorkProcess = ({ id, onReady }) => {
  const [data, setData] = useState(null); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  useEffect(() => {
    // Fetch the work process data based on the id passed as a prop
    fetch(`/api/work-process/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // var data = {
        //   title: "How we work",
        //   body: "\u003Cp\u003ELorem ipsum is a placeholder text commonly used to demonstrate\u003C/p\u003E",
        //   process_paragraphs: [
        //     {
        //       title: "Strategy",
        //       summary:
        //         "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a",
        //       image:
        //         "http://dev.hapusinfotech.com/sites/default/files/2024-08/about_0.jpg",
        //     },
        //     {
        //       title: "Design",
        //       summary:
        //         "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a",
        //       image:
        //         "http://dev.hapusinfotech.com/sites/default/files/2024-08/bg_1.jpg",
        //     },
        //     {
        //       title: "Development",
        //       summary:
        //         "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a",
        //       image:
        //         "http://dev.hapusinfotech.com/sites/default/files/2024-08/news_letter.png",
        //     },
        //     {
        //       title: "Maintanance & Support",
        //       summary:
        //         "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a",
        //       image:
        //         "http://dev.hapusinfotech.com/sites/default/files/2024-08/about18.jpg",
        //     },
        //   ],
        // };
        setData(data);
        setLoading(false); // Data fetched successfully, stop loading
        onReady();
      })
      .catch((error) => {
        console.error("Error fetching work process:", error);
        setError(error);
        setLoading(false); // Stop loading if there's an error
      });
  }, [id]); // Re-fetch data if the id prop changes

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>; // Display an error message if there's an error
  }

  return (
    <>
      <div
        className="text-center my-5 our-portfolio-title"
        data-aos="fade-up"
        data-aos-offset="300"
      >
        <p className="h5 mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
          {data.title}
        </p>
        <div dangerouslySetInnerHTML={{ __html: data.body }}></div>{" "}
        {/* Render the body content */}
      </div>
      <div className="container-fluid">
        <div className="timeline mx-5">
          {data.process_paragraphs.map((process, index) => (
            <div
              key={index}
              className={`timeline__event animated fadeInUp delay-${
                (index + 1) * 1
              }s timeline__event--type${(index % 3) + 1}`}
              data-aos="fade-up"
            >
              <div className="timeline__event__icon">0{index + 1}</div>
              <div className="timeline__event__image">
                <img
                  src={process.image}
                  alt={process.title}
                  className="image"
                  fetchpriority="high"
                />
              </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">{process.title}</div>
                <div className="timeline__event__description">
                  <p>{process.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkProcess;
