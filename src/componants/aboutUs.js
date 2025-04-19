import React, { useState } from "react";
import { Link } from "react-router-dom";

import about1 from "../assets/images/about/ab01.jpg";
import about2 from "../assets/images/about/ab02.jpg";

import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

export default function AboutUs({ containerClass }) {
  let [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className={containerClass}>
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 col-md-6 mb-5">
            <div className="about-left">
              <div className="position-relative shadow rounded img-one">
                <img src={about1} className="img-fluid rounded" alt="" />
              </div>

              <div className="img-two shadow rounded p-2 bg-white">
                <img src={about2} className="img-fluid rounded" alt="" />

                <div className="position-absolute top-0 start-50 translate-middle">
                  <Link
                    to="#!"
                    onClick={() => setOpen(true)}
                    className="avatar avatar-md-md rounded-pill shadow card d-flex justify-content-center align-items-center lightbox"
                  >
                    <i className="mdi mdi-play mdi-24px text-primary"></i>
                  </Link>
                </div>
                <ModalVideo
                  channel="youtube"
                  youtube={{ mute: 0, autoplay: 0 }}
                  isOpen={isOpen}
                  videoId="yba7hPeTSjk"
                  onClose={() => setOpen(false)}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="section-title ms-lg-5">
              <h4 className="title mb-3">Why Choose Verk Pro?</h4>

              <ul className="list-unstyled text-muted mb-0 mt-3">
                <li className="d-flex align-items-start mb-3">
                  <span className="text-success h5 me-3 mt-1">
                    <i className="mdi mdi-check-circle-outline"></i>
                  </span>
                  <p className="mb-0 fw-bold" style={{ lineHeight: "1.6" }}>
                    Global Hiring Made Simple{" "}
                    <span className="fw-normal text-muted">
                      – We handle compliance, payroll, and HR for your remote
                      teams.
                    </span>
                  </p>
                </li>

                <li className="d-flex align-items-start mb-3">
                  <span className="text-success h5 me-3 mt-1">
                    <i className="mdi mdi-check-circle-outline"></i>
                  </span>
                  <p className="mb-0 fw-bold" style={{ lineHeight: "1.6" }}>
                    End-to-End Workforce Management{" "}
                    <span className="fw-normal text-muted">
                      – From talent acquisition to ongoing employee support.
                    </span>
                  </p>
                </li>

                <li className="d-flex align-items-start mb-3">
                  <span className="text-success h5 me-3 mt-1">
                    <i className="mdi mdi-check-circle-outline"></i>
                  </span>
                  <p className="mb-0 fw-bold" style={{ lineHeight: "1.6" }}>
                    Faster, Cost-Effective Scaling{" "}
                    <span className="fw-normal text-muted">
                      – Expand your workforce without setting up foreign
                      entities.
                    </span>
                  </p>
                </li>

                <li className="d-flex align-items-start mb-3">
                  <span className="text-success h5 me-3 mt-1">
                    <i className="mdi mdi-check-circle-outline"></i>
                  </span>
                  <p className="mb-0 fw-bold" style={{ lineHeight: "1.6" }}>
                    Risk-Free Employment Solutions{" "}
                    <span className="fw-normal text-muted">
                      – Ensure 100% legal and tax compliance in every country.
                    </span>
                  </p>
                </li>
              </ul>

              <div className="mt-4">
                <Link to="/aboutus" className="btn btn-primary">
                  About Us <i className="mdi mdi-arrow-right align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
