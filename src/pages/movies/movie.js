import { generatePath, useNavigate } from "react-router"
import { routes } from "../../routes"

const Movie = ({ movie }) => {
  const navigate = useNavigate()
  const { id, title, overview, release_date } = movie

  return (
    <div
      onClick={() => navigate(generatePath(routes.movie, { id }))}
      className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto cursor-pointer"
    >
      <div className="flex justify-center">
        <h3 className="italic underline">{title}</h3>
      </div>
      <div className="p-2" />
      <div className="grid grid-cols-4">
        <h1 className="col-span-2">
          Brief Overview:
        </h1>
        <p className="col-span-2 truncate">
          {overview}
        </p>

        <h1 className="col-span-2">
          Release Date:
        </h1>
        <p className="col-span-2">
          {release_date}
        </p>
      </div>
    </div>
  )
}

export default Movie