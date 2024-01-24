import useMovies from "../../hooks/use-movies"
import Movie from "./movie"

const Movies = () => {
  const { movies, isLoading } = useMovies()

  return isLoading ? (
    <div class="grid grid-cols-4 gap-4 animate-pulse flex">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((placeHolder) => {
        return (
          <div key={placeHolder} class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto cursor-progress">
            <h1>Loading movie...</h1>
          </div>
        )
      })}
    </div>
  ) : (
    <div class="grid grid-cols-4 gap-4">
      {movies.map((movie) => {
        return <Movie key={movie?.id} movie={movie} />
      })}
    </div>
  )
}
export default Movies