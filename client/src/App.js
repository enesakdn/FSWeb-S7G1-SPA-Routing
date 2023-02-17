import React, { useState, useEffect } from "react";
import Film from "./Filmler/Film";
import axios from "axios";
import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import FilmListesi from "./Filmler/FilmListesi";
import FilmCard from "./Filmler/FilmCard";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler") // Burayı Postman'le çalışın
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, []);

  let history = useHistory;

  function handleGerial() {}

  const KaydedilenlerListesineEkle = (movie) => {
    if (saved.some((a) => a.id === movie.id)) {
      return;
    }
    const newList = [...saved, movie];
    setSaved(newList);
  };

  return (
    <div>
      <KaydedilenlerListesi list={saved} />
      <Route exact path="/">
        <FilmListesi movies={movieList} />
      </Route>
      <Route path="/filmler/:id">
        <Film
          KaydedilenlerListesineEkle={KaydedilenlerListesineEkle}
          saved={saved}
        />
      </Route>
    </div>
  );
}
