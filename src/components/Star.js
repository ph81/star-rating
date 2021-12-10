import React from 'react';

const Star = ({ marked, starId }) => {
  //checking if starId is marked
  console.log(marked, starId);

  //using unicode to display the stars
   return (
      <span data-star-id={starId} className="star" role="button" aria-label="button-star">
        {marked ? '\u2605' : '\u2606'}
      </span>
   );
 };

 export default Star;