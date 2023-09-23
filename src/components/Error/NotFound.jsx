import { Wraperr, Center, Comback } from "./NotFound.styled"

const NotFound = () => {
  return (
    <Wraperr>
      <div id="stars">
        <span className="star"></span>
      </div>
      <Center>
        <h1>404</h1>
        <h2>Info not found</h2>
        <Comback to="/">Comback to page Home</Comback>
      </Center>
    </Wraperr>
  )
}

export default NotFound;