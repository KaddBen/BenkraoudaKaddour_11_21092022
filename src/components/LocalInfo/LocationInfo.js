import React from "react";
import "./LocalInfo.css";

const LocationInfo = ({ title, location, tag }) => {
  return (
    <div className="location_container">
      <span className="location_title">{title}</span>
      <span className="exact_location">{location}</span>
      <div className="tag_container">{tag}</div>
    </div>
  );
};

export default LocationInfo;
