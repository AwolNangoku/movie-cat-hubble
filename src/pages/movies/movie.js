import { generatePath, useNavigate } from "react-router"
import { routes } from "../../routes"

const Movie = ({ movie }) => {
  const navigate = useNavigate()
  const { id, title } = movie

  return (
    <div
      onClick={() => navigate(generatePath(routes.movie, { id }))}
      className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto cursor-pointer"
    >
      <h1>{title}</h1>
    </div>
  )
}

export default Movie