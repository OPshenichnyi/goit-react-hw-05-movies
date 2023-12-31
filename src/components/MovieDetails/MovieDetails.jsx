import { detailsFilmGetAPI } from "components/RequestApi/RequestApi";
import { useEffect, useState, useRef } from "react";
import {  NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { CardInfoFilms, Container, Link, LinkContainer } from "./MovieDetails.styled";
import NotFound from "components/Error/NotFound";

const MovieDetails = () => {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [backdrop, setBackdrop] = useState('')
  const [average, setAverage] = useState(0)
  const [genres, setGenres] = useState(null)
  const location = useLocation()
  const memoryLocation = useRef(location)
  const navigate = useNavigate();
  const [error, setError] = useState(false)
  
  useEffect(() => {
    detailsFilmGetAPI(id).then(resp => {
      setTitle(resp.data.original_title)
      setOverview(resp.data.overview)
      setBackdrop(`https://image.tmdb.org/t/p/w500/${resp.data.backdrop_path}`)
      setAverage(resp.data.vote_average * 10)
      setGenres(resp.data.genres.map(item => item.name).join(' '))
      setError(false)
    }).catch(error => {
      setError(true)
    })
  }, [id, navigate])


  return (
    <Container>
      {error && <NotFound></NotFound>}
    <CardInfoFilms>
     
      <h2>{title}</h2>
        <img src={backdrop || "http://dummyimage.com/500x500/99cccc.gif&text=The+image!"} alt="" />
        <p>User score: <span>{Math.round(average)}%</span></p>
      <p>Overview: <span>{overview}</span></p>
        <p>Genres: <span>{genres}</span></p>
        <NavLink to={memoryLocation.current.state?.from ?? "/"}>Back</NavLink>
    </CardInfoFilms>
    <LinkContainer>
      <Link to="cast" state={location}>Cast</Link>
      <Link to="reviews">Reviews</Link>
      </LinkContainer>
      <Outlet></Outlet>
    </Container>
  )
}

export default MovieDetails;