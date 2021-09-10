import Row from "../Components/Row";
import Banner from "../Components/Banner";
import NavBar from "../Components/NavBar";
import requests from "../Components/Config/RequestUrls";

import "../Styles/Pages/HomeScreen.scss";

const HomeScreen = () => {
  return (
    <div className="netflix">
      <NavBar />

      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
    </div>
  );
};

export default HomeScreen;
