import { useForm } from "react-hook-form"
import { generatePath, useNavigate } from "react-router"
import { routes } from "../../../routes"

const SearchMovies = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSearch = (data) => {
    const { search } = data
    if (search) {
      navigate(generatePath(routes.searchMovies, { searchTerm: search }))
    }
  }

  const onClear = () => {
    reset()
    navigate(routes.movies)
  }

  return (
    <div className="flex place-content-center">
      <form onSubmit={handleSubmit(onSearch)} className="w-1/4">
        <div className="w-full">
          <div>
            <label>
              Search movie:
            </label>
          </div>

          <div className="flex justify-center">
            <input 
              className="p-2 border border-blue-400 rounded-md w-full"
              placeholder="Type movie title"
              {...register("search", { required: true })}
            />
            <div className="p-1" />
            <button type="submit" className="border border-blue-200 rounded-md w-1/6 p-2">
              Search
            </button>
            <div className="p-1" />
            <button
              type="button"
              onClick={onClear}
              className="text-red-600 p-2 border border-red-400 rounded-md w-1/6"
            >
              Clear
            </button>
          </div>
          {errors?.search && <span className="text-red-600 text-base">Search term is required!</span>}
        </div>
        <div className="p-2" />
      </form>
    </div>
  )
}
export default SearchMovies