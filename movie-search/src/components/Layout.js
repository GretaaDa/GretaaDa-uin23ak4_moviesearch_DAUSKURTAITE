import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div id="layout">
            <header>
                <h1>Movie search</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <h3>API used:</h3>
                <a href="https://www.omdbapi.com/">OMDb API</a>
            </footer>
        </div>
    )
}