import React from "react";
import { render, screen } from "@testing-library/react";
import StarRating from './StarRating'

const renderRating = () => {
   render(
      <StarRating />
   )
}

test('Renders star rating', () => {
   renderRating();
   const ratingElement = screen.getAllByRole('button');
   expect(ratingElement[0]).toBeInTheDocument();
   expect(ratingElement[1]).toBeInTheDocument();
   expect(ratingElement[2]).toBeInTheDocument();
   expect(ratingElement[3]).toBeInTheDocument();
   expect(ratingElement[4]).toBeInTheDocument();
});