import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies);
  const movieDiv = movies.map((d, i) => {
    return (
      <div key={i}>
        <h2>{d.title}</h2>
        <span>Time: {d.time}</span>
        <ul>
          {d.genres.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movie Page</h1>
      {movieDiv}
    </div>
  );
}

export default Movies;
