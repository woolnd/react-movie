import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MovieDetail from '../components/MovieDetail';

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieinfo, setMovieInfo] = useState([]);
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovieInfo(json.data.movie);
        setLoading(false);
    };

    let nowUrl = window.location.pathname;

    useEffect(() => {
        setLoading(true);
        getMovie();
    }, [nowUrl]);
    return (
        loading
            ? <div className='loadingWrapper'><h1 className="loading">Loading....</h1></div>
            : <MovieDetail
                url={movieinfo.url}
                year={movieinfo.year}
                coverImg={movieinfo.medium_cover_image}
                title={movieinfo.title}
                summary={movieinfo.description_full}
                genres={movieinfo.genres}/>
    )
}

export default Detail;