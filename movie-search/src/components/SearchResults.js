export default function SearchResults({ getMovies, setSearch }) {

    const submitHandler = (event) => {
        event.preventDefault()
    }

    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="search" placeholder="Search title here.." onChange={searchHandler} minLength={3} />
            <button type="submit" onClick={getMovies} className="searchBtn">Search</button>
        </form>
    )
}