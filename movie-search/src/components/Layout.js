import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div id="layout">
            <header>
                <h1 className="pageTitle">Movie search</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <h3>API used:</h3>
                <p><a href="https://www.omdbapi.com/">OMDb API</a></p>
            </footer>
        </div>
    )
}