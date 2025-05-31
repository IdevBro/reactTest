import React, { useState } from "react";
import "./style.css";

const filterItems = ["Status", "Price", "Collections", "Chains", "Categories"];

const Filter = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="filter-wrapper">
      <div className="filter-container">
        <div className="filter-header">
          <span className="filter-icon">☰</span>
          <h2>Filters</h2>
        </div>

        {filterItems.map((item) => (
          <div key={item} className="filter-section">
            <button
              type="button"
              className="filter-title"
              onClick={() => toggleSection(item)}
            >
              {item}
              <span className="arrow">{openSections[item] ? "▲" : "▼"}</span>
            </button>
            {openSections[item] && (
              <div className="filter-content">
                <p>{item} options go here...</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
