import useSWR from "swr"
import { requestGET } from "../utils/fetch-api"

const useMovie = (id) => {
  const movieKey = id ? `/movie/${id}?language=en-US` : null
  const { data: movie, isLoading } = useSWR(movieKey, (url) => requestGET({ url }))

  if (movie) {
    return {
      isLoading,
      movie
    }
  }

  return {
    isLoading: !movie,
    movie
  }
}
export default useMovie