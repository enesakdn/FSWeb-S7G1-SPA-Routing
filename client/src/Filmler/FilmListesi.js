import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import movie from "./Film";

export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <FilmDetayları key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function FilmDetayları(props) {
  const { title, director, metascore, id } = props.movie;

  return (
    <div className="movie-card">
      <h2>
        <Link to={`/filmler/${id}`}>{title}</Link>
      </h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
