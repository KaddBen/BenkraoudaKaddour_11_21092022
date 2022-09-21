import React,{useState} from 'react';
import {Collapse} from "react-collapse"
import housings from "./logements.json"
import { Link, useParams } from 'react-router-dom';
import { IoStarSharp }  from 'react-icons/io5';
import { MdArrowBackIosNew }  from 'react-icons/md';
import { IoIosArrowForward }  from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import Error from './Error.js'
import Navbar from './Navbar.js'


const Location = () => {
   
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(1);
    const { locationId } = useParams();
      const housing = housings.find((housing) => housing.id === locationId)
      if(housing) {
    const {title, description, rating, location} = housing
    const host = housing.host
    const {name, picture} = host
    const tags = housing.tags
   const tagMap = tags.map((tag) => {
    return (
    <div className='tag'>{tag}</div>
    )
   })
    const pictures = housing.pictures
    const equipments = housing.equipments
   const equipmentsMap = equipments.map((equipment) => {
    return (
      <li>{equipment}</li>
    )
   })

   const increase = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
    if (count1 === parseInt(pictures.length  - 1)) {
 setCount1(count1 - (pictures.length - 1))
 setCount2(count2 - (pictures.length - 1))
     }   
   }

   const decrease = () => {
    setCount1(count1 - 1);
    setCount2(count2 - 1);
    if (count1 === 0) {
 setCount1(count1 + (pictures.length - 1))
 setCount2(count2 + (pictures.length - 1))
     }   
   }

   function StarRating({count, value, 
    inactiveColor='#ddd',
    size=24,
    activeColor='#f00', onChange}) {

  // short trick 
  const stars = Array.from({length: count}, () => '🟊')

  // Internal handle change function
  const handleChange = (value) => {
    onChange(value + 1);
  }

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style=activeColor;
        }
        return (
          <span className={"star"}  
            key={index}
            style={{color: style, width:size, height:size, fontSize: size}}
            onClick={()=>handleChange(index)}>{s}</span>
        )
      })}
    </div>
  )
}

   
    return (
        <div>
      <div className='background_location'>
      <img src={pictures[count1]}> 
      </img>
      <IoIosArrowForward className='arrow_right' onClick= {increase} />
      <MdArrowBackIosNew className='arrow_left' onClick= {decrease} />
      <span>{count2}/{equipments.length} </span>
      </div>
      <div className='container'>
       <div className='location_container'>
        <span className='location_title'>{title}</span>
        <span className='exact_location'>{location}</span>
        <div className='tag_container'>
        {tagMap}
        </div>
       </div>

       <div className='user_container'>
        <div className='name_container'>
          <div className='name'>{name}</div>
          <img className='circle' src={picture}></img>
        </div>
        <div className='rating_container'>
        <StarRating 
       count={5}
       size={40}
       value={housing.rating}
       activeColor ={'#FF6060'}
       inactiveColor={'#ddd'}
       onChange  />
</div>
        </div>
      </div>
      <div className='dropdown_container'>
        <div className='dropdown'>
        <button  onClick={() => setOpen1(!open1)}
        aria-controls="Description"
        aria-expanded={open1} className="blue">
             <span>Description</span>
            <MdArrowBackIosNew className={' ' + (open1 ? 'arrow_icon rotate':'arrow_icon')} />
        </button>  
        <Collapse  isOpened={open1}>
        <p id ="Description">
     {  description }
        </p> 
        </Collapse>
        </div>
        <div className='dropdown'>
        <button  onClick={() => setOpen2(!open2)}
        aria-controls="Equipements"
        aria-expanded={open2} className="blue">
             <span>Equipements</span>
            <MdArrowBackIosNew className={' ' + (open2 ? 'arrow_icon rotate':'arrow_icon')} />
        </button>  
        <Collapse  isOpened={open2}>
       <ul id='Equipements'>
         {equipmentsMap}

       </ul>
        </Collapse>
        </div>
      </div>
       </div>
    )
    
   }
   else {
  return(
  <div>
     {<Error />}
  </div>
  )
   }      
}
export default Location; 

