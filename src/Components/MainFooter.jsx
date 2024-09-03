import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/MainFooter.css"; // Create and link your CSS file for custom styles
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
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";
import FooterLinks from "./FooterLinks";

const MainFooter = () => {
  const [mainLinks, setMainLinks] = useState([]);

  useEffect(() => {
    fetch("/api/menu/main")
      .then((response) => response.json())
      .then((data) => setMainLinks(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  // useEffect(() => {
  //   const data = [
  //     {
  //       title: "Home",
  //       url: "/",
  //     },
  //     {
  //       title: "About",
  //       url: "/about",
  //     },
  //     {
  //       title: "Portfolio",
  //       url: "/portfolio",
  //     },
  //     {
  //       title: "Services",
  //       url: "",
  //       sub_menu: [
  //         {
  //           title: "Web Development Services",
  //           url: "/web-development-services",
  //         },
  //         {
  //           title: "Mobile Development Services",
  //           url: "/mobile-development-services",
  //         },
  //         {
  //           title: "Design Services",
  //           url: "/web-design-services",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Blog",
  //       url: "/blog",
  //     },
  //     {
  //       title: "Career",
  //       url: "/career",
  //     },
  //   ];

  //   setMainLinks(data);
  // }, []); // Empty dependency array means this effect runs only once after the initial render

  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("/api/menu/link")
      .then((response) => response.json())
      .then((data) => setLinks(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  // useEffect(() => {
  //   const data = [
  //     {
  //       title: "Privacy Policy",
  //       url: "/privacy-policy",
  //     },
  //     {
  //       title: "Terms and Conditions",
  //       url: "/terms-and-conditions",
  //     },
  //     {
  //       title: "Career",
  //       url: "/career",
  //     },
  //     {
  //       title: "Sitemap",
  //       url: "/sitemap",
  //     },
  //   ];

  //   setLinks(data);
  // }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div
      className="container-fluid footer py-5 wow fadeIn"
      data-wow-delay=".3s"
    >
      <Container className="py-5">
        <Row className="g-4 footer-inner">
          <Col lg={3} md={6}>
            <div className="footer-item">
              <p className="h4 text-white fw-bold mb-4">About</p>
              <p>
                Nostrud exertation ullamco labor nisi aliquip ex ea commodo
                consequat duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore.
              </p>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-item">
              <p className="h4 text-white fw-bold mb-4">Useful Links</p>
              <div className="d-flex flex-column align-items-start">
                <FooterLinks links={mainLinks} />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-item">
              <p className="h4 text-white fw-bold mb-4">Links</p>
              <div className="d-flex flex-column align-items-start">
                {/* Replace this with dynamic content or links */}
                <FooterLinks links={links} />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-item">
              <p className="h4 text-white fw-bold mb-4">Contact Us</p>
              <Button
                variant="link"
                className="w-100 text-start ps-0 pb-3 border-bottom rounded-0 text-white"
                href="/"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />
                Amman Nagar, Suite # P1 -003, Viya Workspace. 36/1, Raghav
                Towers, Saravanampatti, Coimbatore, Tamil Nadu 641035
              </Button>
              <Button
                variant="link"
                className="w-100 text-start ps-0 py-3 border-bottom rounded-0 text-white"
                href="tel:+918667311175"
              >
                <FontAwesomeIcon icon={faPhone} className="me-3" />
                +91 8667311175
              </Button>
              <Button
                variant="link"
                className="w-100 text-start ps-0 py-3 border-bottom rounded-0 text-white"
                href="tel:+918778450252"
              >
                <FontAwesomeIcon icon={faPhone} className="me-3" />
                +91 8778450252
              </Button>
              <Button
                variant="link"
                className="w-100 text-start ps-0 py-3 border-bottom rounded-0 text-white"
                href="mailto:contact@hapusinfotech.com"
              >
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                contact@hapusinfotech.com
              </Button>
            </div>
          </Col>
        </Row>

        <div className="border-top border-top-3 my-5"></div>

        <Row>
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <a href="#" className="navbar-brand">
              <h1 className="text-primary mb-0 display-5">
                <img
                  src="/sites/default/files/hapus_logo_1.webp"
                  alt="Home"
                  fetchpriority="high"
                  className="home-banner-logo-img"
                />
              </h1>
            </a>
          </Col>
          <Col
            md={4}
            className="copyright-btn text-center text-md-start mb-3 mb-md-0 flex-shrink-0"
          >
            <a
              className="btn btn-primary rounded-circle me-3 copyright-icon"
              href="https://www.facebook.com/profile.php?id=100076470284680"
              target="_blank" aria-label="Facebook profile"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className="btn btn-primary rounded-circle me-3 copyright-icon"
              href="https://x.com/hapusinfotech"
              target="_blank" aria-label="X profile"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              className="btn btn-primary rounded-circle me-3 copyright-icon"
              href="https://www.instagram.com/hapusinfo/"
              target="_blank" aria-label="Instagram profile"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="btn btn-primary rounded-circle me-3 copyright-icon"
              href="https://www.linkedin.com/company/hapus-infotech/"
              target="_blank" aria-label="Linkedin profile"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              className="btn btn-primary rounded-circle me-3 copyright-icon"
              href="https://in.pinterest.com/hapus_infotech/"
              target="_blank" aria-label="Pinterest Profile"
            >
              <FontAwesomeIcon icon={faPinterestP} />
            </a>
            <a
              className="btn btn-primary rounded-circle me-3 copyright-icon"
              href="https://wa.me/918667311175"
              target="_blank" aria-label="Whatsapp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </Col>
          <Col
            md={4}
            className="my-auto text-center text-md-end text-white design"
          >
            Designed By
            <a className="border-bottom ms-2" href="/">
              Hapus Infotech
            </a>
            <p className="mb-0">
              <a href="/">Hapus Infotech</a> &copy; 2024 All Right Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainFooter;
