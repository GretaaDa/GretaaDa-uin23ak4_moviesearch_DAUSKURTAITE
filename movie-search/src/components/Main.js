import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchResults from "./SearchResults";

export default function Main() {
    const [movies, setMovies] = useState([])
    //Used Harry Potter instead of James Bond, due to it being an old movie and some information was proper from the API. Harry Potter had better results and a better movie to be on the front page :)
    const [search, setSearch] = useState("Harry Potter")

    const getMovies = async () => {
        const response = await fetch(`http://www.omdbapi.com/?s=${search}&type=movie&page=1&r=json&apikey=25b47ed2`)
        const data = await response.json()
        console.log(data)
        console.log(data.Search)
        if (data.Response === "True") {
            setMovies(data.Search.splice(0, 10))
        } else {
            alert("Too many results to load!")
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <SearchResults getMovies={getMovies} setSearch={setSearch} />
            <div className="cardContainer">
                {movies.map((movie, index) =>
                    (<MovieCard key={index} title={movie?.Title} img={movie?.Poster} year={movie?.Year} id={movie?.imdbID} movies={movies} />))}
            </div>
        </>
    )
}