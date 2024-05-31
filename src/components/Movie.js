import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, mediumCoverImage, title, summary, genres}) {
    return (
    <div>
        <img src={mediumCoverImage} alt={title}/>
            <h2><Link to={`/movie/${id}`}>
                {title}
            </Link></h2>
        <p>{summary}</p>
        <ul>
          {genres.map((cate) => (<li key={cate}>{cate}</li>))}
        </ul>
    </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    mediumCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;