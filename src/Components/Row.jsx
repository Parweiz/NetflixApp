import React, {useState, useEffect} from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import {client} from "./Api/Client";

import "../Styles/Components/Row.scss";

const Row = (props) => {
  const {title, fetchUrl, isLargeRow = false} = props;

  const [state, setState] = useState({
    movies: [],
    trailerUrl: "",
  });

  const baseImageUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      await client.get(fetchUrl, {}).then((res) => {
        console.log("DATAAAA FROM REQUEST", res.data);

        setState({...state, movies: res.data.results});
      });
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (state.trailerUrl) {
      setState({...state, trailerUrl: ""});
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          setState({...state, trailerUrl: urlParams.get("v")});
        })
        .catch((err) => console.log(err));
    }
  };

  const movieContainer = (
    <div className="movieContainer">
      {state.movies.map(
        (movie) =>
          // Getting rid of dead links
          ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
            <div
              className={`movieItemContainer ${
                isLargeRow && "movieItemContainerLarge"
              }`}
              key={movie.id}
              onClick={() => handleClick(movie)}
            >
              <img
                src={`${baseImageUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              <p>{movie?.title || movie?.name || movie?.original_name}</p>
            </div>
          )
      )}
    </div>
  );

  return (
    <div className="row">
      <h2>{title}</h2>

      {movieContainer}

      {state.trailerUrl && <YouTube videoId={state.trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
