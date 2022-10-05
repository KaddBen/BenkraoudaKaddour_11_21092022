import React from "react";
import StarRating from '../StarRating/StarsRating.js'
import  './UserInfo.css';


const UserInfo = ({name, picture, rating}) => {


return (
<div className='user_container'>
        <div className='name_container'>
          <div className='name'>{name}</div>
          <img className='circle' src={picture}></img>
        </div>
        <div className='rating_container'>
        <StarRating 
       count={5}
       size={40}
       value={rating}
       activeColor ={'#FF6060'}
       inactiveColor={'#ddd'}
       onChange  />
       </div>
    </div>
)

}

export default UserInfo ;