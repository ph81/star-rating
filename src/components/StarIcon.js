import React from 'react';
import {AiFillStar, AiOutlineStar } from 'react-icons/ai'

const StarIcon = ({ marked, starId }) => {
  //checking if starId is marked
  console.log(marked, starId);

  //using icons to display the stars
   return (
     <>
      <span data-star-id={starId} className="star" role="button">
      {marked ? 
        <AiFillStar color='orange' /> : 
        <AiOutlineStar color='gray' />
      }
      </span>
    </>
   );
 };

 export default StarIcon;