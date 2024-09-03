import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/MainNavbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // Import the FontAwesome icon



const MainNavbar = () => {
  const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
      fetch("/api/menu/main")
        .then((response) => response.json())
        .then((data) => setMenuItems(data))
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

  //   setMenuItems(data);
  // }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div className="container-fluid bg-transparent header-block">
      <Container>
        <Navbar expand="lg" variant="dark" className="py-lg-3">
          <div className="nav-img">
            <img
              src="/sites/default/files/hapus_logo_1.webp"
              alt="Home"
              fetchpriority="high"
              className="home-banner-logo-img"
            />
          </div>
          <Navbar.Toggle aria-controls="navbarCollapse" className="bg-primary">
            <span className="fa fa-bars text-dark"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarCollapse" className="me-n3">
            <Nav className="ms-auto">
              {menuItems.map((item, index) =>
                item.sub_menu ? (
                    <NavDropdown
                      title={
                        <span>
                          {item.title} <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                      }
                      key={index}
                      id={`submenu-${index}`}
                    >
                      {item.sub_menu.map((subItem, subIndex) => (
                        <NavDropdown.Item href={subItem.url} key={subIndex}>
                          {subItem.title}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  )  : (
                  <Nav.Link href={item.url} key={index}>
                    {item.title}
                  </Nav.Link>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default MainNavbar;
