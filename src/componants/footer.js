import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/verkproLogo.png";
import verkPro from "../assets/images/verkproLogo.png";

import {
  FiShoppingCart,
  FiDribbble,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiBookmark,
  FiGlobe,
} from "../assets/icons/vander";

export default function Footer({ top }) {
  return (
    <footer className="bg-footer">
      {top === true ? (
        <div className="py-5">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-md-7">
                <div className="section-title">
                  <div className="d-flex align-items-center">
                    <FiBookmark className="fea icon-lg" />
                    <div className="flex-1 ms-3">
                      <h4 className="fw-bold text-white mb-2">
                        Explore a job now!
                      </h4>
                      <p className="text-white-50 mb-0">
                        Search all the open positions on the web. Get your own
                        personalized salary estimate. Read reviews on over
                        30000+ companies worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 mt-4 mt-sm-0">
                <div className="text-md-end ms-5 ms-sm-0">
                  <Link to="/job-apply" className="btn btn-primary me-1 my-1">
                    Apply Now
                  </Link>
                  <Link to="/contactus" className="btn btn-soft-primary my-1">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="py-5 footer-bar">
              <div className="row align-items-center">
                <div className="col-sm-3">
                  <div className="text-center text-sm-start">
                    <Link className="logo" to="/">
                      <img src={logo} className="l-light w-50" alt="" />
                    </Link>
                  </div>
                </div>

                <div className="col-sm-9 mt-4 mt-sm-0">
                  <ul className="list-unstyled footer-list terms-service text-center text-sm-end mb-0">
                    <li className="list-inline-item my-2">
                      <Link to="/" className="text-foot fs-6 fw-medium me-2">
                        <i className="mdi mdi-circle-small"></i> Home
                      </Link>
                    </li>
                    <li className="list-inline-item my-2">
                      <Link
                        to="/aboutus"
                        className="text-foot fs-6 fw-medium me-2"
                      >
                        <i className="mdi mdi-circle-small"></i> About Us
                      </Link>
                    </li>
                    <li className="list-inline-item my-2">
                      <Link
                        to="/services"
                        className="text-foot fs-6 fw-medium me-2"
                      >
                        <i className="mdi mdi-circle-small"></i> Services
                      </Link>
                    </li>
                    <li className="list-inline-item my-2">
                      <Link
                        to="/workwithus"
                        className="text-foot fs-6 fw-medium me-2"
                      >
                        <i className="mdi mdi-circle-small"></i> Work with us
                      </Link>
                    </li>
                    <li className="list-inline-item my-2">
                      <Link
                        to="/contactus"
                        className="text-foot fs-6 fw-medium"
                      >
                        <i className="mdi mdi-circle-small"></i> Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 footer-bar">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="text-sm-start">
                <p className="mb-0 fw-medium">
                  © {new Date().getFullYear()} VerkPro Pvt Ltd. All rights
                  reserved.
                </p>
              </div>
            </div>

            <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-0">
                {/* <li className="list-inline-item">
                  <Link
                    to="https://1.envato.market/jobnova-react"
                    target="_blank"
                    className="rounded"
                  >
                    <FiShoppingCart className="fea icon-sm align-middle" />
                  </Link>
                </li> */}
                {/* <li className="list-inline-item">
                  <Link
                    to="https://dribbble.com/shreethemes"
                    target="_blank"
                    className="rounded"
                  >
                    <FiDribbble className="fea icon-sm align-middle" />
                  </Link>
                </li> */}
                <li className="list-inline-item">
                  <Link
                    to="https://www.linkedin.com/company/verkproo/"
                    target="_blank"
                    className="rounded"
                  >
                    <FiLinkedin className="fea icon-sm align-middle" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="https://www.facebook.com/share/16E3aMaCRo/?mibextid=wwXIfr"
                    target="_blank"
                    className="rounded"
                  >
                    <FiFacebook className="fea icon-sm align-middle" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="https://www.instagram.com/verkpro?igsh=NWZtaHZqZTM3a2d4"
                    target="_blank"
                    className="rounded"
                  >
                    <FiInstagram className="fea icon-sm align-middle" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" target="_blank" className="rounded">
                    <FiTwitter className="fea icon-sm align-middle" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="https://verkpro.com"
                    target="_blank"
                    className="rounded"
                  >
                    <FiGlobe className="fea icon-sm align-middle" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
