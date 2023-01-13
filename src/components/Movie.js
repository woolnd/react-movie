import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "../css/Movie.css"

function Movie({id, year, coverImg, title, genres, summary}) {
    let summaryText = summary;
    let titleText = title;
    if (summaryText > 150) {
        summaryText = summaryText.substring(0, 145) + "...";
    }
    if (titleText > 20) {
        titleText = titleText.substring(0, 17) + "...";
    }
    return(
        <Link to={`/movie/${id}`}>
            <div className="movie">
                <img src={coverImg} alt="cover img" className="coverImg"/>
                <div>
                    <h2 className="title">Title: {titleText}</h2>
                    <u1 className="genres info">
                        {genres ? genres.map((g)=>(<li className="genre" key={g}>{g}</li>)) : null}
                    </u1>
                    <span className="info year">Year: {year}</span>
                    <span className="summary info">Summary: {summaryText}</span>
                </div>
            </div>
        </Link>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}
export default Movie;