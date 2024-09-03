import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NewsLetter.css";

const NewsLetter = ({ id, onReady }) => {
  const [newsletterData, setNewsletterData] = useState(null);
  const [email, setEmail] = useState(""); // State to store the email input
  const [message, setMessage] = useState(null); // State to store messages
  const [messageType, setMessageType] = useState(""); // State to store message type (success/error)

  useEffect(() => {
    // Fetch the newsletter data based on the id passed as a prop
    fetch(`/api/newsletter/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setNewsletterData(data);
        onReady();
      })
      .catch((error) => console.error("Error fetching newsletter:", error));
  }, [id]);

  // useEffect(() => {
  //   const data = {
  //     title: "News Letter",
  //     body: "\u003Cp\u003ELorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E&nbsp;\u003C/p\u003E",
  //     field_emailsubscribe: null,
  //     field_sub_title: "Subscribe",
  //     field_newsletter_image:
  //       "http://dev.hapusinfotech.com/sites/default/files/2024-07/Untitled%20%2835%29.png",
  //   };

  //   setNewsletterData(data);
  // }, []); // Empty dependency array means this effect runs only once after the initial render

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Email validation regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
      showMessage("Please enter a valid email address.", "danger");
      return;
    }

    const url = `/newsletter/subscribe`;

    const formData = new FormData();
    formData.append("email", email);

    fetch(url, {
      method: "POST",
      body: formData, // Multipart form data
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          showMessage(data.message, "success");
          setEmail(""); // Clear the input field
        } else {
          showMessage(data.message, "danger");
        }
      })
      .catch((error) => {
        console.error("Error during subscription:", error);
        showMessage("An error occurred. Please try again.", "danger");
      });
  };

  const showMessage = (message, type) => {
    setMessage(message);
    setMessageType(type);

    setTimeout(() => {
      setMessage(null);
      setMessageType("");
    }, 5000); // Hide message after 5 seconds
  };

  if (!newsletterData) {
    return <div>Loading...</div>; // Handle loading state
  }

  const backgroundImageStyle = {
    background: `linear-gradient(rgba(19, 53, 123, .6), rgba(19, 53, 123, .6)), url(${newsletterData.field_newsletter_image})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div
      className="container-fluid subscribe py-5"
      style={backgroundImageStyle}
    >
      <div className="container text-center py-5">
        <div className="mx-auto text-center" style={{ maxWidth: "900px" }}>
          <p className="h5 mb-2 px-3 py-1 text-white rounded-pill d-inline-block border border-2 border-primary">
            {newsletterData.field_sub_title}
          </p>
          <h1 className="text-white mb-4">{newsletterData.title}</h1>
          <div
            className="text-white mb-5"
            dangerouslySetInnerHTML={{ __html: newsletterData.body }}
          />
          <div className="position-relative mx-auto">
            <input
              className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5 newsletter-email"
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update the state when user types
            />
            <button
              type="button"
              className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2 newsletter-subscribe"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
          {message && (
            <div
              className={`alert alert-${messageType} alert-dismissible fade show message`}
              role="alert"
            >
              {message}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
