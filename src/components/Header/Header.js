import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import "./Header.css";
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
  count,
  functionarrowLeft,
  functionArrowRight,
  array,
}) => {
  const [classArrowLeft, setClassArrowLeft] = useState("");
  const [classArrowRight, setClassArrowRight] = useState("");
  var toggleClass;
  var locationImg;
  useEffect(() => {
    setClassArrowLeft("arrow_left");
    setClassArrowRight("arrow_right");
    if (bgImg === "landscape_home" || (bgImg === "landscape_about" && !imgLocation)) {
      setClassArrowLeft("hidden");
      setClassArrowRight("hidden");
    }
    if (array === 1) {
      setClassArrowLeft("hidden");
      setClassArrowRight("hidden");
    }
   
  }, [array]);


  array > 1 ? (toggleClass = "visible") : (toggleClass = "hidden");
  array

  ? (locationImg = <img src={imgLocation} className="location_img" alt=""></img>)
  : (locationImg = "");
  return (
    <div className={`landscape ${bgImg}`}>
      {locationImg}
      <div>{content}</div>

      <IoIosArrowForward
        className={classArrowRight}
        onClick={functionarrowLeft}
      />

      <MdArrowBackIosNew
        className={classArrowLeft}
        onClick={functionArrowRight}
      />
      <span className={toggleClass}>
        {count}/{array}
      </span>
    </div>
  );
};

export default Header;
