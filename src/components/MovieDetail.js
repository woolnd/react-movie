import PropTypes from "prop-types";
import "../css/MovieDetail.css"

function MovieDetail({url, year, coverImg, title, summary, genres}){
    let summaryText = summary;
    if(summaryText > 1204){
        summaryText = summaryText.substring(0, 1200+"...");
    }
    return (
        <div className="detailContainer">
            <div>
                <img src ={coverImg} className="coverImg" alt="coverImg" />
                <a href={url} className="btnGoSite">Go To Site</a>
            </div>
            <div className="detailInfo">
                <h2 className="detailTitle">Title: {title}</h2>
                <ul className="detailGenres detail">
                    {
                        genres ? genres.map((g)=>(<li key={g}>{g}</li>)) : null
                    }
                </ul>
                <p className="detailYear detail">Year: {year}</p>
                <p className="detailSummary">Summary: {summaryText}</p>
            </div>
        </div>
    );
};

MovieDetail.propTypes = {
    url: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default MovieDetail;