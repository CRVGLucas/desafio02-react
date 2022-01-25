import { useEffect, useState } from "react"
import { MovieCard } from "./MovieCard"

interface Movie {
    Genre_id: number,
    Title: string,
    Poster: string,
    imdbID: string,
    Runtime: string,
    Ratings: number
}

export function Content(props) {
  // Complete aqui
  const [movies, setMovies] = useState([])
  useEffect(() => {
    console.log("filmes: ", props.movies)

  }, [])

  return (
    <>
      {props.movies.map((movie: Movie) => (
        <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </>
  )
}