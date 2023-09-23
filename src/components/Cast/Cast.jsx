import { creditsFilmGetAPI } from "components/RequestApi/RequestApi"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NotFound from "components/Error/NotFound"


export const Cast = () => {
  const { id } = useParams()
  const [cast, setCast] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    if (cast.length === 0) {
      creditsFilmGetAPI(id).then(resp => {
        setCast(resp.data.cast)
      }).catch((error) => {
        setError(true)
      })
    }

  })

  return (
    
    <div>
      {error && <NotFound></NotFound>}
      <ul>
        {cast.map(({ id, original_name, profile_path, character }) => (
          <li key={id}>
            <img src={profile_path ?
              `https://image.tmdb.org/t/p/w200/${profile_path}` :
              "http://dummyimage.com/150x150/99cccc.gif&text=The+image!"}
              alt="this Face actor" width={200} />
            <h3>{original_name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cast