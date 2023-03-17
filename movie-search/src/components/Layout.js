export default function Layout() {
    return (
        <div id="layout">
            <header>
                <h1>Movie search</h1>
                <form>
                    <input placeholder="Search title here.." />
                    <button>Search</button>
                </form>
            </header>
            <main>
                <article>
                    <img src="#" />
                    <h2>Movie title</h2>
                    <p>Producer, date and genre</p>
                    <p>Star actors</p>
                    <p>Price</p>
                    <button>More about the movie</button>
                </article>
            </main>
            <footer>
                <h3>API used:</h3>
                <a href="https://www.omdbapi.com/">OMDb API</a>
            </footer>
        </div>
    )
}