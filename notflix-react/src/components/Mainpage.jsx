import { useEffect, useState } from "react"
import requests from "../requests"
import axios from 'axios'


const Mainpage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data)
    })
  }, [])
  console.log(movies);

  return (
    <div>Mainpage</div>
  )
}

export default Mainpage