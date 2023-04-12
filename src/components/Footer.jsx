import "./footer.css";
import logo from "../images/logo.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-links">
        <img src={logo} className="footer-logo" alt="" />
        <div className="links">
          <img src={facebookIcon} alt="" />
          <img src={twitterIcon} alt="" />
          <img src={pinterestIcon} alt="" />
          <img src={instagramIcon} alt="" />
        </div>
      </div>
      <div className="footer-menu">
        <ul className="list">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Careers">Careers</a>
          </li>
          <li>
            <a href="#Events">Events</a>
          </li>
          <li>
            <a href="#Products">Products</a>
          </li>
          <li>
            <a href="#Support">Support</a>
          </li>
        </ul>
        <span>&copy; 2021 Loopstudios. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
