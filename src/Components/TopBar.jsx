import React from "react";
import { Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faPinterestP,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Ensure you have installed the latest FontAwesome version
import '../App.css';
import '../css/TopBar.css';


const TopBar = () => {
  return (
    <div className="container-fluid topbar-top bg-primary">
      <Container>
        <div className="d-flex justify-content-between topbar py-2">
          {/* Left Side */}
          <div className="d-flex align-items-center flex-shrink-0 topbar-info">
            <a href="#" className="me-4 text-light" target="_blank">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="me-2 text-dark"
              />
              Sarvanampatti - Coimbatore
            </a>
            <a href="tel:+918667311175" className="me-4 text-light" target="_blank">
              <FontAwesomeIcon icon={faPhone} className="me-2 text-dark" />
              +91 8667311175
            </a>
            <a href="mailto:contact@hapusinfotech.com" className="text-light" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} className="me-2 text-dark" />
              contact@hapusinfotech.com
            </a>
          </div>

          {/* Middle */}
          <Col className="text-end pe-4 me-4 border-end border-dark search-btn">
            <div className="search-form">
              <div id="note" className="text-light d-none d-xl-flex">
                <small>Note: We help you to Grow your Business</small>
              </div>
            </div>
          </Col>

          {/* Right Side */}
          <Col className="d-flex align-items-center justify-content-center topbar-icon">
            <a href="https://www.facebook.com/profile.php?id=100076470284680" className="me-4" target="_blank" aria-label="Facebook profile">
              <FontAwesomeIcon icon={faFacebookF} className="text-dark" />
            </a>
            <a href="https://x.com/hapusinfotech" className="me-4" target="_blank" aria-label="X profile">
              <FontAwesomeIcon icon={faXTwitter} className="text-dark" />
            </a>
            <a href="https://www.instagram.com/hapusinfo/" className="me-4" target="_blank" aria-label="Instagram profile">
              <FontAwesomeIcon icon={faInstagram} className="text-dark" />
            </a>
            <a href="https://www.linkedin.com/company/hapus-infotech/" className="me-4" target="_blank" aria-label="Linkedin profile">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-dark" />
            </a>
            <a href="https://in.pinterest.com/hapus_infotech/" className="me-4" target="_blank" aria-label="Pinterest profile">
              <FontAwesomeIcon icon={faPinterestP} className="text-dark" />
            </a>
            <a href="https://wa.me/918667311175" target="_blank" aria-label="Whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} className="text-dark" />
            </a>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
