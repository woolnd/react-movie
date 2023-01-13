import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import "../css/Home.css"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMoives] = useState([]);
    const getMoives = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`))
            .json();
        setMoives(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMoives();
    }, []);

    return (
        <section className="container">
            {loading
                ? <div className="loadingWrapper"><h1 className="loading">Loading....</h1></div>
                : <div className="movies">
                        {movies.map((movie) => (
                            <Movie key={movie.id} id={movie.id} year={movie.year} coverImg={movie.medium_cover_image}
                                   title={movie.title} summary={movie.summary} genres={movie.genres}/>
                        ))}
                    </div>
            }
        </section>
    );
}

export default Home;