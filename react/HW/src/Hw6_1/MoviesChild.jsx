import React from "react";

const MoviesChild = ({ movie }) => {
  return (
    <div>
      <p>{movie.name}</p>
      <img src={movie.image.medium} alt={movie.name} />
    </div>
  );
};

export default MoviesChild;
