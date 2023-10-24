import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.photo} />
      <p>
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
          {title.slice(0, 21)} ...
        </Link>
      </p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
