import { useState } from 'react';
import Star from './Star';


const StarRating = ({ value }) => {
   //initial values
   const [rating, setRating] = useState(parseInt(value) || 0);
   const [selection, setSelection] = useState(0);
 
   //updating selected star according to hover
   const hoverStar = event => {
     let val = 0;
     if (event && event.target && event.target.getAttribute('data-star-id')) {
      val = event.target.getAttribute('data-star-id');
      console.log(val);
     }
     setSelection(val);
   };


   return (
     <div
       onMouseOut={() => hoverStar(null)}
       onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
       onMouseOver={hoverStar}
       className='star-rating'
     >
       {Array.from({ length: 5 }, (item, idx) => (
         <Star
           starId={idx + 1}
           key={`star_${idx + 1}`}
           marked={selection ? selection >= idx + 1 : rating >= idx + 1}
         />
       ))}
     </div>
   );
 };

export default StarRating;