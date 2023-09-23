import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";


const Home = lazy(() => import('./Page/Home'))
const Movies = lazy(() => import('./Page/Movies'))
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'))
const NotFound = lazy(() => import('./Error/NotFound'))

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>

        <Route path="/movies/:id" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};
