import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Now available on digital: Wonder Woman, ™ & © DC Comics. © 2019 Warner
          Bros. Entertainment Inc. All rights reserved. Jurassic World: Fallen
          Kingdom™ and © 2019 Universal Studios and Amblin Entertainment, Inc.
          All rights reserved. Spider-Man: Into the Spider-Verse, © 2018 Sony
          Pictures Animation Inc. All rights reserved. | MARVEL and all related
          character names: © & ™ 2019 MARVEL. Star Wars: A New Hope, © 2019 & ™
          Lucasfilm Ltd. Marvel Studios’ Avengers: Endgame, © 2019 MARVEL. All
          rights reserved. Registration with Movies Anywhere required. Movies
          Anywhere is open to U.S. residents 13+. Subject to the Movies Anywhere
          Terms of Use and Privacy Policy.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
