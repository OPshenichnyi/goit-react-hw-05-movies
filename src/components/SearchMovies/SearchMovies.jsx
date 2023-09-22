import { Link, useLocation } from "react-router-dom"




export const SearchMovies = ({films}) => {
    const location = useLocation()
  return (
      
      <ul>
          {films.map(({ id, title }) => (
              <li key={id}><Link to={`${id}`} state={{ from: location }}>{title}>{title}</Link></li>
          ))}
      </ul>

  )
}
