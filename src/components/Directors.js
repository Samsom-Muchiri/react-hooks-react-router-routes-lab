import React from "react";
import { directors } from "../data";

function Directors() {
  const div = directors.map((d, i) => {
    return (
      <div key={i}>
        <h3>{d.name}</h3>
        <ul>
          {d.movies.map((m) => {
            return <li>{m}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {div}
    </div>
  );
}

export default Directors;
