import React from "react";

import { useState, useEffect } from "react";
import "./Header.css";
import leftArrow from "../../assets/left_arrow.svg";
import rightArrow from "../../assets/right_arrow.svg";

/* 
Component made to display all the images from all the different pages at the header position.
Because so,the number of props might be a little bit confusing.Here's an explanation down below.

bgImg: prop used to display the background image of the home and about page.
img: prop used to display the specific image of the location page
content: if specified,add a message in the middle of the header (used in the home page)
The four last props are used for the system of incrementation in order to display the location
images properly
*/
const Header = ({
  bgImg,
  imgLocation,
  content,
  array,
}) => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(1);

  const decrease = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
    if (count1 === parseInt(imgLocation.length - 1)) {
      setCount1(count1 - (imgLocation.length - 1));
      setCount2(count2 - (imgLocation.length - 1));
    }
  };

  const increase = () => {
    setCount1(count1 - 1);
    setCount2(count2 - 1);
    if (count1 === 0) {
      setCount1(count1 + (imgLocation.length - 1));
      setCount2(count2 + (imgLocation.length - 1));
    }
  };
  let [classArrowLeft, setClassArrowLeft] = useState("hidden");
  let [classArrowRight, setClassArrowRight] = useState("hidden");

  useEffect(() => {

    setClassArrowLeft("arrow_left");
    setClassArrowRight("arrow_right");
    if (
      bgImg === "landscape_home" ||
      (bgImg === "landscape_about" && !imgLocation)
    ) {
      setClassArrowLeft("hidden");
      setClassArrowRight("hidden");
    }
    if (array === 1) {
      setClassArrowLeft("hidden");
      setClassArrowRight("hidden");
    }
  }, [bgImg,imgLocation, array]);
  let toggleClass;
  let locationImg;

  array > 1 ? (toggleClass = "visible") : (toggleClass = "hidden");
  array
    ? (locationImg = (
        <img src={imgLocation[count1]} className="location_img" alt=""></img>
      ))
    : (locationImg = "");
  return (
    <div className={`landscape ${bgImg}`}>
      {locationImg}
      <div>{content}</div>
      <img
        src={leftArrow}
        alt="left_arrow"
        className={classArrowRight}
        onClick={decrease}
        loading="eager"
      ></img>
      <img
        src={rightArrow}
        alt="right_arrow"
        className={classArrowLeft}
        onClick={increase}
        loading="eager"
      ></img>

      <span className={toggleClass}>
        {count2}/{array}
      </span>
     
    </div>
  );
};

export default Header;
