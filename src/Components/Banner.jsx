import {useState, useEffect} from "react";
import {client} from "./Api/Client";
import requests from "./Config/RequestUrls";

import "../Styles/Components/Banner.scss";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      await client.get(requests.fetchNetflixOriginals, {}).then((res) => {
        console.log(res.data.results);
        const rndMovie =
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ];

        setMovie(rndMovie);
      });
    }
    fetchData();
  }, []);

  const truncate = (str, num) => {
    return str?.length > num ? str.slice(0, num - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="content">
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <button>Play</button>
        <button>My List</button>

        <h1 className="description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="fadeBottom" />
    </header>
  );
};

export default Banner;
