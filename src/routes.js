import { lazy } from "react"

// Pages
const Movies = lazy(() => import("../src/pages/movies"))
const Movie = lazy(() => import("../src/pages/movie"))

const routes = {
  home: "/",
  movies: "/movies",
  movie: "/movies/:id"
}

const publicRoutes = [
  {
    exact: true,
    title: 'Movies',
    path: routes.home,
    component: Movies
  },
  {
    exact: true,
    title: 'Movies',
    path: routes.movies,
    component: Movies
  },
  {
    exact: true,
    title: 'Watch Movie',
    path: routes.movie,
    component: Movie
  },
]

export { publicRoutes, routes }
