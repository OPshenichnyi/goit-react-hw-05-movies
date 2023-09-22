import { Outlet } from "react-router-dom"
import { Container, Header, Link} from "./Layout.styled"


export const Layout = () => {
    return (
        <>   
            <Header>
                <Container>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies" >Movies</Link>
                    </nav>
                </Container>
                </Header>
            <Outlet></Outlet>
      </>
  )
}
