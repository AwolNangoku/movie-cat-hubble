import useSWR from "swr"
import { requestGET } from "../utils/fetch-api"

const useMovies = (searchTerm) => {
  const dicoverKey = !searchTerm ? `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc` : null
  const searchKey = searchTerm?.length > 0 ? `/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1` : null
  let moviesKey = dicoverKey
  if (searchKey) {
    moviesKey = searchKey
  }

  const { data, isLoading } = useSWR(moviesKey, (url) => requestGET({ url }))

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