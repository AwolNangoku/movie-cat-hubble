import { Suspense } from "react"
import { PublicRoute } from "../navigation"
import { publicRoutes } from "../routes"
import { PageNotFound } from "../pages"
import { BrowserRouter, useRoutes } from "react-router-dom";

const AppNavigation = () =>
  useRoutes([
    {
      element: <PublicRoute />,
      children: publicRoutes.map((route) => ({ path: route.path, element: <route.component /> }))
    },
    {
      element: <PageNotFound />,
      path: '*'
    }
  ])

const Router = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <AppNavigation />
      </BrowserRouter>
    </Suspense>
  )
}

export default Router
