import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">
                <a href="/">
                  <img
                    src={require("../../assets/images/logo.png")}
                    alt="logo"
                  />
                </a>
              </div>
              <p>
                eSpark Consulting Group is a full-carrier software development
                employer presenting Enterprise Software Development, Application
                Development (Desktop, Web & Mobile), Product Development,
                Digital Commerce,UI/UX Design and IT Consulting services.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="single-footer-widget pl-5">
              <h3>Company</h3>
              <ul className="list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/project">Work</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/lets-talk">Lets-Talk</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="single-footer-widget">
              <h3>Support</h3>
              <ul className="list">
                <li>
                  <Link to="/privacy-policy">Privacy-policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h3>Address</h3>
              <ul className="footer-contact-info">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  &nbsp;&nbsp; 301/B 3rd Floor & 401/A 4th Floor, Blossom Trade
                  Centre, Block 1 Gulistan-e-Johar, Karachi, 74300
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  &nbsp;&nbsp; Email:{" "}
                  <a href="/cdn-cgi/l/email-protection#9cefe8fdeee8ecdcfbf1fdf5f0b2fff3f1">
                    <span
                      className="__cf_email__"
                      data-cfemail="3043445142444070575d51595c1e535f5d"
                    >
                      info@esparkconsultants.com
                    </span>
                  </a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  &nbsp;&nbsp; Phone:{" "}
                  <a href="tel:321984754">+92 333 600 6055</a>
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/eSparkConsGroup"
                    className="facebook"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/eSparkConsGroup"
                    className="twitter"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/esparkconsultantsgroup"
                    className="instagram"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/esparkconsgroup"
                    className="linkedin"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>
                Copyright © 2020. All Rights Reserved{" "}
                <a href="/" target="_blank">
                  eSpark Consulting Group
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={require("../../assets/images/map.png")}
        className="map"
        alt="map"
      />
      {/* <div className="shape1">
        <img src={require("../../assets/images/shape.svg")} alt="shape" />
      </div> */}
    </footer>
  );
};

export default Footer;
