import React from "react";
import { actors } from "../data";

function Actors() {
  const actorDiv = actors.map((a, i) => {
    return (
      <div key={i}>
        <h3>a.name</h3>
        <ul>
          {a.movies.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {actorDiv}
    </div>
  );
}

export default Actors;
