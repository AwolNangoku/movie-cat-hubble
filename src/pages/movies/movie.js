
const Movie = ({ movie }) => {
  const { id, title } = movie
  return (
    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto cursor-pointer">
      <h1>{title}</h1>
    </div>
  )
}

export default Movie