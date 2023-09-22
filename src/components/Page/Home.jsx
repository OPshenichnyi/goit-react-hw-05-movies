import { trendingGetAPI } from "components/RequestApi/RequestApi"
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Home = () => {
  const [trendFilm, setTrendFilm] = useState([])
  const location = useLocation()

  

  useEffect(() => {
    if (trendFilm.length === 0) {
      trendingGetAPI().then(response => { setTrendFilm(response.data.results) })
    }
   return

  }, [trendFilm])
  
  return (
    <ul>
      {trendFilm.map(({ id, title}) => (
        <li key={id}><Link to={`movies/${id}`} state={{from: location}}>{title}</Link></li>
      ))}
    </ul>
  )
}