import React from 'react';
import { MdArrowBackIosNew }  from 'react-icons/md';
import { IoIosArrowForward }  from 'react-icons/io';
import  './Header.css';

const Header = ({classdiv, classimg, classArrowLeft,classArrowRight, img, content, count,functionarrowLeft,functionArrowRight, array}) => {
   if(array === 1) {
    classArrowLeft = "hidden";
    classArrowRight = "hidden";
   }
   return (
< div className={classdiv}>
<img src={img} className={classimg}></img>
<div>{content}</div>  
<IoIosArrowForward className= {classArrowLeft} onClick= {functionarrowLeft} />
      <MdArrowBackIosNew className= {classArrowRight} onClick= {functionArrowRight} />
      <span>{count}/{array} </span> 
</div>
    )
}

export default Header