import { creditsFilmGetAPI } from "components/RequestApi/RequestApi"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const Cast = () => {
  const { id } = useParams()
  const [cast, setCast] = useState([])
 

  useEffect(() => {
    if (cast.length === 0) {
      creditsFilmGetAPI(id).then(resp => {
        setCast(resp.data.cast)
      }).catch((error)=>{console.log(error);})
    }

  })

  return (
    <div>
      <ul>
        {cast.map(({ id, original_name, profile_path, character }) => (
          <li key={id}>
            <img src={profile_path ? `https://image.tmdb.org/t/p/w200/${profile_path}` :"http://dummyimage.com/150x150/99cccc.gif&text=The+image!"} alt="this Face actor" width={200} />
            <h3>{original_name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
