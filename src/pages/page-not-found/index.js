
import { useNavigate } from "react-router-dom"
import { routes } from "../../routes"

const PageNotFound = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate(routes.movies)
  }
  return (
    <div>
    <h4>404 error</h4>
    <h2>Page not found</h2>
    <p>
      Sorry, the page you are looking for doesn't exist. <br></br> Here are some helpful links:
    </p>
    <div>
      <button onClick={goHome}>
      Home
      </button>
    </div>
    </div>
  )
}

export default PageNotFound
