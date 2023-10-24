import { useState, useEffect } from "react";
import Movie from "../components/Movie.js";
import styles from "./Home.module.css";
import createHeader from "../components/header.js";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count")
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return ( 
    <div className={styles.movie_box}>
      <div className={styles.movie_list}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            genres={movie.genres}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
