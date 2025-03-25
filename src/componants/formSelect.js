import React, { useState } from "react";
import Select from "react-select";
import { FiBriefcase, FiMapPin, FiSearch } from "../assets/icons/vander";
import { useNavigate } from "react-router-dom";

const selectStyles = {
  control: (provided) => ({
    ...provided,
    paddingLeft: "30px", // Matches icon space
    minHeight: "60px", // Align height with input
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#aaa",
  }),
};

export default function FormSelect({
  redirect,
  initialKeyword = "",
  initialLocation = null,
  initialType = null,
}) {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(initialKeyword);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [selectedType, setSelectedType] = useState(initialType);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      keyword,
      location: selectedLocation?.value || "",
      type: selectedType?.value || "",
    };

    if (redirect) {
      navigate("/job-list-one", { state: formData }); // Pass state
    }
  };

  let location = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Canada", label: "Canada" },
    { value: "Cape Verde", label: "Cape Verde" },
    { value: "Denmark", label: "Denmark" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "Eritrea", label: "Eritrea" },
    { value: "Estonia", label: "Estonia" },
    { value: "Gambia", label: "Gambia" },
    { value: "Gambia", label: "Gambia" },
  ];
  let type = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Freelancer", label: "Freelancer" },
    { value: "Remote", label: "Remote Work" },
    { value: "Office Work", label: "Office Work" },
  ];
  return (
    <>
      <form className="card-body text-start" onSubmit={handleFormSubmit}>
        <div className="registration-form text-dark text-start">
          <div className="row g-lg-0">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="mb-3 mb-sm-0">
                <label className="form-label d-none fs-6">Search :</label>
                <div className="filter-search-form position-relative filter-border">
                  <FiSearch className="fea icon-20 icons" />
                  <input
                    name="name"
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    id="job-keyword"
                    className="form-control filter-input-box bg-light border-0"
                    placeholder="Search your keaywords"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="mb-3 mb-sm-0">
                <label className="form-label d-none fs-6">Location:</label>
                <div className="filter-search-form position-relative filter-border">
                  <FiMapPin className="fea icon-20 icons" />
                  <Select
                    styles={selectStyles}
                    options={location}
                    value={selectedLocation}
                    onChange={(val) => setSelectedLocation(val)}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="mb-3 mb-sm-0">
                <label className="form-label d-none fs-6">Type :</label>
                <div className="filter-search-form relative filter-border">
                  <FiBriefcase className="fea icon-20 icons" />
                  <Select
                    styles={selectStyles}
                    options={type}
                    value={selectedType}
                    onChange={(val) => setSelectedType(val)}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <input
                type="submit"
                id="search"
                name="search"
                style={{ height: "60px" }}
                className="btn btn-primary searchbtn w-100"
                value="Search"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
