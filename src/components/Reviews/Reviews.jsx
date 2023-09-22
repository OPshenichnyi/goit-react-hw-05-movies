import { reviewsFilmGetAPI } from "components/RequestApi/RequestApi"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const Reviews = () => {
  const { id } = useParams()
  const [reviwes, setReviwes] = useState([])

  useEffect(() => {
    reviewsFilmGetAPI(id).then(resp => {
      if (reviwes.length === 0) {
        if (resp.data.results.length === 0) {
          return
        }
        setReviwes(resp.data.results)
      }
    })

  }, [id, reviwes])

  return (
    <div>
      <ul>
        {reviwes.map(({id, author, content }) => (
          <li key={id}><h3>Autho{author}</h3><p>{content}</p></li> 
        ))}
        {reviwes.length === 0 &&<p>We don't have any reviews for this movie</p>}
      </ul>
    </div>
  )
}
