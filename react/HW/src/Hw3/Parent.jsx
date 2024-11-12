import React, { useState } from "react";

import Child from "./Child";

function Parent() {
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Under the Dome",
      pic: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    },
    {
      id: 2,
      name: "Person of Interest",
      pic: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
    },
    {
      id: 3,
      name: "Bitten",
      pic: "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
    },
  ]);

  const handleChange = (e) => {
    const selected = movies.find((movie) => movie.id === +e.target.value);
    console.log("selected", selected);
    setSelectedMovie(selected);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid red",
      }}
    >
      <h2>Pick a Movie</h2>

      <select style={{ width: "fit-content" }} onChange={handleChange}>
        {movies.map((movie) => {
          // Setting a value to any input will make it a STRING and therefore we need to convert it back to a number when collecting the  data
          return (
            <option key={movie.id} value={movie.id}>
              {movie.name}
            </option>
          );
        })}
      </select>

      <hr />

      <Child selectedMovie={selectedMovie} />
    </div>
  );
}
export default Parent;
