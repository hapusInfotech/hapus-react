import React from "react";

const FooterLinks = ({ links }) => {
  const handleDropdownClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior to avoid page reload
  };

  return (
    <ul className="nav navbar-nav">
      {links.map((link, index) => (
        <li className={`nav-item ${link.sub_menu ? "dropdown" : ""}`} key={index}>
          {link.sub_menu ? (
            <>
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id={`navbarDropdown-${index}`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleDropdownClick}
              >
                {link.title}
              </a>
              <ul className="dropdown-menu" aria-labelledby={`navbarDropdown-${index}`}>
                {link.sub_menu.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subLink.url}
                      className="dropdown-item"
                      data-drupal-link-system-path={subLink.url}
                    >
                      {subLink.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <a
              href={link.url}
              className="nav-link"
              data-drupal-link-system-path={link.url}
            >
              {link.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
