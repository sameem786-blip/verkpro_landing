import React from "react";
import { Link, useLocation } from "react-router-dom";

import bg1 from "../assets/images/hero/bg.jpg";

import Navbar from "../componants/navbar";
import AboutTwo from "../componants/aboutTwo";
import FormSelect from "../componants/formSelect";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import { FiClock, FiMapPin, FiBookmark } from "../assets/icons/vander";
import { jobData } from "../data/data";

export default function JobListOne() {
  const location = useLocation();
  const {
    keyword = "",
    type = "",
    location: jobLocation = "",
  } = location.state || {};

  const filteredJobs = jobData.filter((job) => {
    const matchesKeyword = keyword
      ? job.title.toLowerCase().includes(keyword.toLowerCase())
      : true;

    const matchesLocation = jobLocation
      ? job.country.toLowerCase() === jobLocation.toLowerCase()
      : true;

    const matchesType = type
      ? job.jobTime.toLowerCase() === type.toLowerCase()
      : true;

    return matchesKeyword && matchesLocation && matchesType;
  });

  const [currentPage, setCurrentPage] = React.useState(1);
  const jobsPerPage = 5;

  // Calculate range
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Total pages for pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [location.state]);
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
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                  Job Vacancis
                </h5>
              </div>
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
          <div className="row justify-content-center">
            <div className="col-12 mt-4">
              <div className="features-absolute">
                <div className="d-md-flex justify-content-between align-items-center bg-white shadow rounded p-4">
                  <FormSelect
                    initialKeyword={keyword}
                    initialLocation={location}
                    initialType={type}
                    redirect
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-60">
          <div className="row g-4">
            {currentJobs.map((item, index) => {
              return (
                <div className="col-12" key={index}>
                  <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex align-items-center w-310px">
                      <img
                        src={item.image}
                        className="avatar avatar-small rounded shadow p-3 bg-white"
                        alt=""
                      />

                      <div className="ms-3">
                        <Link
                          to={`/job-detail-one/${item.id}`}
                          className="h5 title text-dark"
                        >
                          {item.title}
                        </Link>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                      <span className="badge bg-soft-primary rounded-pill">
                        {item.jobTime}
                      </span>
                      <span className="text-muted d-flex align-items-center fw-medium mt-md-2">
                        <FiClock className="fea icon-sm me-1 align-middle" />
                        {item.posted} days ago
                      </span>
                    </div>

                    <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                      <span className="text-muted d-flex align-items-center">
                        <FiMapPin className="fea icon-sm me-1 align-middle" />
                        {item.country}
                      </span>
                      <span className="d-flex fw-medium mt-md-2">
                        $950 - $1100/mo
                      </span>
                    </div>

                    <div className="mt-3 mt-md-0">
                      <Link
                        to=""
                        className="btn btn-sm btn-icon btn-pills btn-soft-primary bookmark"
                      >
                        <FiBookmark className="icons" />
                      </Link>
                      <Link
                        to={`/job-detail-one/${item.id}`}
                        className="btn btn-sm btn-primary w-full ms-md-1"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            <div className="col-12 mt-4 pt-2">
              {totalPages > 1 && (
                <ul className="pagination justify-content-center mb-0">
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                      <li
                        className={`page-item ${
                          currentPage === page ? "active" : ""
                        }`}
                        key={page}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>

        <AboutTwo />
      </section>
      <Footer top={true} />
      <ScrollTop />
    </>
  );
}
