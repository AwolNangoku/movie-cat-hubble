import useMovies from "../../hooks/use-movies"

const Movies = () => {
  const { movies } = useMovies()

  console.log('Fetched movies...', movies)
  return (
    <div class="md:container md:mx-auto">
      <div class="flex flex-col">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
    </div>
  )
}
export default Movies