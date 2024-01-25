import { useParams } from "react-router"
import { SearchMovies } from "../../components/forms"
import useMovies from "../../hooks/use-movies"
import Movie from "./movie"

const Movies = () => {
  const { searchTerm } = useParams()

  console.log('Search term...', searchTerm)
  
  const { movies, isLoading } = useMovies()

  return (
    <div className="h-screen w-screen">
      <div className="p-6" />
      <SearchMovies />
      <div className="p-6" />
      {(() => {
        if (isLoading) {
          return (
            <div className="grid grid-cols-4 gap-4 animate-pulse flex place-content-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((placeHolder) => {
                return (
                  <div key={placeHolder} className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto cursor-progress">
                    <h1>Loading movie...</h1>
                  </div>
                )
              })}
            </div>
          )
        }
        return (
          <div className="grid grid-cols-4 gap-4">
            {movies.map((movie) => <Movie key={movie?.id} movie={movie} />)}
          </div>
        )
      })()}
    </div>
  )
}
export default Movies