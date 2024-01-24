import useSWR from "swr"
import { requestGET } from "../utils/fetch-api"

const useMovies = (page) => {
  const dicoverKey = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page ?? 1}&sort_by=popularity.desc`
  const { data, isLoading } = useSWR(dicoverKey, (url) => requestGET({ url }))

  if (data) {
    return {
      isLoading,
      movies: data.results,
      page: data.page
    }
  }

  return {
    isLoading: !data,
    movies: data?.results,
    page: data?.page
  }
}
export default useMovies