import React from "react";
import { Link } from "react-router-dom";

import bg1 from "../assets/images/hero/bg3.jpg";

import Navbar from "../componants/navbar";
import Faq from "../componants/faq";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import { servicesData } from "../data/data";

export default function Services() {
  return (
    <>
      <Navbar navClass="defaultscroll sticky" navLight={true} />
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: `url(${bg1})`, backgroundPosition: "top" }}
      >
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-10">
              <div className="title-heading text-center">
                <h1 className="heading text-white fw-bold">
                  Helping You Hire and Manage Talent
                  <br /> Anywhere in the World
                </h1>
                <p className="text-muted para-desc mx-auto mb-0">
                  Building a global team doesn’t have to be complicated. At Verk
                  Pro, we take care of the legal, administrative, and compliance
                  side of international hiring—so you can focus on finding great
                  people and growing your business. Whether you need help
                  employing someone abroad, filling roles quickly, or managing
                  payroll across multiple countries, we’ve got you covered.
                </p>
              </div>
            </div>
            <div className="position-middle-bottom">
              <nav aria-label="breadcrumb" className="d-block">
                <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">VerkPro</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="section">
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <h4 className="title mb-3">Our Core Services</h4>
              <p className="text-muted para-desc mx-auto">
                From global hiring to full-service payroll, Verk Pro handles the
                heavy lifting so you can scale smarter.
              </p>
            </div>
          </div>

          <div className="row gy-4">
            {/* 🌍 EOR */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-2">🌍 Employer of Record (EOR)</h5>
                <p className="text-muted mb-3">
                  Hire in new countries—without setting up local entities. Verk
                  Pro takes on full legal responsibility and ensures full
                  compliance.
                </p>
                <ul className="list-unstyled text-muted mb-3">
                  <li>✔ Local employment contracts</li>
                  <li>✔ Payroll & tax filings</li>
                  <li>✔ Benefits setup</li>
                  <li>✔ Offboarding support</li>
                  <li>✔ Compliance management</li>
                </ul>
                <p className="text-muted small">
                  <em>
                    Ideal for companies expanding into new markets or hiring
                    globally.
                  </em>
                </p>
              </div>
            </div>

            {/* 🔎 RPO */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-2">
                  🔎 Recruitment Process Outsourcing (RPO)
                </h5>
                <p className="text-muted mb-3">
                  We act as an extension of your team to manage the entire
                  hiring process—fast, flexible, and reliable.
                </p>
                <ul className="list-unstyled text-muted mb-3">
                  <li>✔ Talent sourcing & screening</li>
                  <li>✔ Interview coordination</li>
                  <li>✔ Offer & onboarding</li>
                  <li>✔ Employer branding</li>
                  <li>✔ Hiring strategy support</li>
                </ul>
                <p className="text-muted small">
                  <em>
                    Ideal for teams scaling fast or outsourcing recruitment.
                  </em>
                </p>
              </div>
            </div>

            {/* ⚙️ Contract Staffing */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-2">⚙️ Remote & Contract Staffing</h5>
                <p className="text-muted mb-3">
                  Access pre-vetted global talent for short- or long-term
                  needs—without the overhead.
                </p>
                <ul className="list-unstyled text-muted mb-3">
                  <li>✔ Flexible engagements</li>
                  <li>✔ Fast onboarding</li>
                  <li>✔ Managed compliance</li>
                  <li>✔ Global availability</li>
                </ul>
                <p className="text-muted small">
                  <em>
                    Ideal for startups and teams needing on-demand skills.
                  </em>
                </p>
              </div>
            </div>

            {/* 💼 Global Payroll */}
            <div className="col-md-6 col-lg-6 mx-auto">
              <div className="card h-100 border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-2">💼 Global Payroll & HR Support</h5>
                <p className="text-muted mb-3">
                  One unified platform to manage payroll, benefits, and HR
                  across multiple countries with ease.
                </p>
                <ul className="list-unstyled text-muted mb-3">
                  <li>✔ Multi-country payroll</li>
                  <li>✔ Local tax compliance</li>
                  <li>✔ Benefit management</li>
                  <li>✔ PTO tracking & portals</li>
                  <li>✔ Ongoing HR support</li>
                </ul>
                <p className="text-muted small">
                  <em>Ideal for global teams operating across regions.</em>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 mx-auto">
              <div className="card h-100 border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-2">
                  ⭐ Why Companies Choose Verk Pro
                </h5>

                <ul className="list-unstyled text-muted mb-3">
                  <li>✅ No Local Entity Needed – Hire in 100+ countries</li>
                  <li>✅ Faster Time to Hire – Streamlined onboarding</li>
                  <li>✅ Full Compliance, Always – Stay legally secure</li>
                  <li>✅ End-to-End Support – From contracts to payroll</li>
                  <li>✅ Scalable & Flexible – We grow with your team</li>
                </ul>
                <p className="text-muted small">
                  <em>Ideal for global teams operating across regions.</em>
                </p>
                <Link to="/contactus" className="btn btn-primary mt-3">
                  Let’s Build Your Global Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section">
        <div className="container">
          <div className="row g-4">
            {servicesData.map((item, index) => {
              let Icon = item.icon;
              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2"
                  key={index}
                >
                  <div className="position-relative features text-center p-4 rounded shadow bg-white">
                    <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                      <Icon className="fea icon-ex-md" />
                    </div>

                    <div className="mt-4">
                      <Link to="" className="title h5 text-dark">
                        {item.title}
                      </Link>
                      <p className="text-muted mt-3 mb-0">
                        Many desktop publishing now use and a search for job.
                      </p>
                      <div className="mt-3">
                        <Link to="" className="btn btn-link primary text-dark">
                          Read More <i className="mdi mdi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container mt-100 mt-60">
                <Faq/>
            </div>
      </section> */}
      <Footer />
      <ScrollTop />
    </>
  );
}
