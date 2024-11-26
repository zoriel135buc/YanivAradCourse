import React, { useState, useEffect } from "react";
import MoviesChild from "./MoviesChild";
import { Get10Movies } from "./utils";

const MoviesParent = () => {
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await Get10Movies();
        setMovie(data.slice(0, 10));
        console.log(Movie);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {Movie.map((item) => (
        <MoviesChild key={item.id} movie={item} />
      ))}
    </div>
  );
};

export default MoviesParent;
