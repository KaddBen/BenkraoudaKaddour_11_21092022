import React from "react";
import "./StarsRating.css";

const StarRating = ({
  maxStars,
  activeStars,
  inactiveColor = "#ddd",
  size = 64,
  activeColor = "#f00",
}) => {
  const stars = Array.from({ length: maxStars }, () => "🟊");

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < activeStars) {
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
