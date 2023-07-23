import { useEffect, useState } from "react"
import requests from "../requests"
import axios from 'axios'


const Mainpage = () => {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results)
    })
  }, [])
  console.log(movies);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
      </div>
    </div>
  )
}

export default Mainpage