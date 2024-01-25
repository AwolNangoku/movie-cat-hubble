import { useNavigate, useParams } from "react-router"
import { useMovie } from "../../hooks"
import { routes } from "../../routes"

const Movie = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { movie, isLoading } = useMovie(id)

  return (
    <>
      <div className="p-6"/>
      {(() => {
        if (!isLoading) {
          const { title, status, release_date, overview, tagline} = movie
          return (
            <>
              <div
                className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto cursor-pointer"
              >
              <div className="flex justify-center">
                  <h3 className="italic underline">{title}</h3>
                </div>
                <div className="p-2" />
                <div className="grid grid-cols-4">
                  <h1 className="col-span-2">
                    Status:
                  </h1>

                  <p className="col-span-2">
                    {status}
                  </p>

                  <h1 className="col-span-2">
                    Release Date:
                  </h1>
                  <h2 className="col-span-2">
                    {release_date}
                  </h2>

                  <h1 className="col-span-2">
                    Tagline:
                  </h1>

                  <p className="col-span-2">
                    {tagline}
                  </p>

                  <h1 className="col-span-2">
                    Description:
                  </h1>

                  <p className="col-span-2">
                    {overview}
                  </p>
                </div>
              </div>
              <div className="p-4" />
              <div
                className="border border-green-800 shadow rounded-md p-4 max-w-sm mx-auto cursor-pointer"
                onClick={() => navigate(routes.home)}
              >
                <h2 className="text-center">
                  Back to movies
                </h2>
              </div>
            </>
          )
        }
        return (
          <div className="animate-pulse flex place-content-center">
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto cursor-progress">
              <h1>Loading movie...</h1>
            </div>
          </div>
          )
      })()}

    </>
  )
}
export default Movie