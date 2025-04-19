import React from "react";
import { Link } from "react-router-dom";

import bg1 from "../assets/images/hero/bg.jpg";

import Navbar from "../componants/navbar";
import Faq from "../componants/faq";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import { jobData } from "../data/data";

import { FiMapPin } from "../assets/icons/vander";

export default function Employers() {
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
                  Borderless Talent
                  <br /> Limitless Possibilities
                </h1>
                <p className="text-muted para-desc mx-auto mb-0">
                  At Verk Pro, we help{" "}
                  <span className="fw-bold">
                    businesses scale across borders
                  </span>{" "}
                  and{" "}
                  <span className="fw-bold">
                    professionals unlock global careers.
                  </span>{" "}
                  Whether you’re hiring remote talent or looking for your next
                  opportunity—we make the process easy, compliant, and
                  people-first.
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
                    Work with us
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
        <div className="container">
          <div className="row gy-5 align-items-stretch">
            {/* EMPLOYERS */}
            <div className="col-lg-6">
              <div className="p-4 p-md-5 rounded shadow-sm bg-white h-100">
                <h5 className="fw-bold mb-3">👔 For Employers</h5>
                <p className="text-muted">
                  <strong>Build Your Global Team, Hassle-Free</strong>
                  <br />
                  Growing your team across countries? We handle the
                  complexities—so you don’t have to. From onboarding and payroll
                  to compliance and contracts, we’re your partner in global
                  workforce management.
                </p>
                <h6 className="fw-semibold mt-4 mb-2">Our Solutions:</h6>
                <ul className="list-unstyled text-muted mb-3">
                  <li>🌍 Hire in 100+ countries (no local entity needed)</li>
                  <li>📋 Fully managed Employer of Record (EOR)</li>
                  <li>🔎 Scalable Recruitment Process Outsourcing (RPO)</li>
                  <li>⚙️ Contract & project-based staffing</li>
                  <li>💼 Global payroll, benefits & compliance</li>
                </ul>
                <h6 className="fw-semibold mt-4 mb-2">Why Choose Verk Pro:</h6>
                <ul className="list-unstyled text-muted">
                  <li>✔ Hire top talent fast, anywhere in the world</li>
                  <li>✔ Reduce risk with 100% compliance support</li>
                  <li>✔ Simplify HR operations and workforce planning</li>
                  <li>✔ Scale your team without scaling admin headaches</li>
                </ul>
                <div className="mt-4">
                  <Link to="/contactus" className="btn btn-outline-primary">
                    🔹 Talk to a Hiring Expert
                  </Link>
                </div>
              </div>
            </div>

            {/* JOB SEEKERS */}
            <div className="col-lg-6">
              <div className="p-4 p-md-5 rounded shadow-sm bg-white h-100">
                <h5 className="fw-bold mb-3">💼 For Job Seekers</h5>
                <p className="text-muted">
                  <strong>Work Without Borders</strong>
                  <br />
                  Looking for your next remote role? We connect top talent with
                  companies that embrace flexibility, innovation, and a global
                  mindset. Let us help you find your fit—and get paid on time,
                  in your currency.
                </p>
                <h6 className="fw-semibold mt-4 mb-2">What You’ll Get:</h6>
                <ul className="list-unstyled text-muted mb-3">
                  <li>🌐 Remote opportunities with global employers</li>
                  <li>📈 KPI management & career growth</li>
                  <li>📄 Localized contracts & onboarding</li>
                  <li>💰 Reliable payroll in your local currency</li>
                  <li>🛡 Compliance & support in your region</li>
                </ul>

                <h6 className="fw-semibold mt-4 mb-2">Industries We Serve:</h6>
                <ul className="list-unstyled text-muted">
                  <li>💻 Tech & IT – Developers, Data, DevOps</li>
                  <li>📊 Finance – CPAs, Analysts, Controllers</li>
                  <li>🏥 Healthcare – RNs, Coders, Researchers</li>
                  <li>🛠 Engineering – Mechanical, Civil, Electrical</li>
                  <li>👩‍💼 Corporate – Admins, PMs, HR, VAs</li>
                  <li>✨ And many more</li>
                </ul>
                <div className="mt-4">
                  <Link to="/jobs" className="btn btn-outline-primary">
                    🔹 Explore Remote Opportunities
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA FINAL ROW */}
          <div className="row justify-content-center text-center mt-5 pt-4">
            <div className="col-lg-8">
              <h4 className="fw-bold mb-3">🤝 Ready to Partner with Us?</h4>
              <p className="text-muted">
                Whether you're building a borderless team or ready to join
                one—Verk Pro is your bridge to the future of work.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                <Link to="/contactus" className="btn btn-primary">
                  🔹 Start Hiring Now
                </Link>
                <Link to="/contactus" className="btn btn-outline-primary">
                  🔹 Find a Remote Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <div className="row g-4 gy-5">
            {jobData.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                  <div className="employer-card position-relative bg-white rounded shadow p-4 mt-3">
                    <div className="employer-img d-flex justify-content-center align-items-center bg-white shadow-md rounded">
                      <img
                        src={item.image}
                        className="avatar avatar-ex-small"
                        alt=""
                      />
                    </div>

                    <div className="content mt-3">
                      <Link
                        to={`/employer-profile/${item.id}`}
                        className="title text-dark h5"
                      >
                        {item.name}
                      </Link>

                      <p className="text-muted mt-2 mb-0">
                        Digital Marketing Solutions for Tomorrow
                      </p>
                    </div>

                    <ul className="list-unstyled d-flex justify-content-between align-items-center border-top mt-3 pt-3 mb-0">
                      <li className="text-muted d-inline-flex align-items-center">
                        <FiMapPin className="fea icon-sm me-1 align-middle" />
                        {item.country}
                      </li>
                      <li className="list-inline-item text-primary fw-medium">
                        {item.vacancy} Jobs
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            <div className="col-12 mt-4 pt-2">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item">
                  <Link className="page-link" to="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="mdi mdi-chevron-left fs-6"></i>
                    </span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="mdi mdi-chevron-right fs-6"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-100 mt-60">
          <Faq />
        </div>
      </section> */}
      <Footer top={true} />
      <ScrollTop />
    </>
  );
}
