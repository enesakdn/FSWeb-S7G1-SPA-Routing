import React from "react";
import { useHistory } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  let history = useHistory();

  function handleGerial() {
    history.push("/");
  }

  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" onClick={handleGerial}>
        Anasayfa
      </div>
    </div>
  );
}
