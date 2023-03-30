import { StarIcon, TrophyIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react"

export default function MovieCard({ title, img, year, id }) {
    const [details, setDatails] = useState({})


    const getDetails = async () => {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&type=movie&r=json&apikey=25b47ed2`)
        const data = await response.json()
        console.log(data)
        setDatails(data)
    }

    useEffect(() => {
        getDetails()
    }, [id])

    //References used: https://www.positronx.io/how-to-handle-images-onload-and-onerror-events-in-react-js/, https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
    return (
        <article className="movieCard">
            <img src={img} alt={title} onError={({ currentTarget }) => {
                currentTarget.src = "https://placehold.jp/300x400.png";
            }} />
            <h2>{title}</h2>
            <p>Produced by {details.Director}, {year} </p>
            <p>Genres: {details.Genre}</p>
            <p><StarIcon className='star' /> Actors: {details.Actors}</p>
            <p><TrophyIcon className='trophy' /> {details.Awards}</p>
        </article>
    )
}