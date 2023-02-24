import React from "react";
import "./StarsRating.css";

const StarRating = ({
  count,
  value,
  inactiveColor = "#ddd",
  size = 24,
  activeColor = "#f00",
}) => {
  const stars = Array.from({ length: count }, () => "🟊");

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span
            className={"star"}
            key={index}
            style={{ color: style, width: size, height: size, fontSize: size }}
          >
            {s}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
