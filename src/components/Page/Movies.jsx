import { SearchMovies } from "components/SearchMovies/SearchMovies"

import { searchGetAPI } from "components/RequestApi/RequestApi";
import { Formik, Form, Field } from "formik";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NotFound } from "components/Error/NotFound";

export const Movies = () => {
  
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get("query") ?? ""
  const [listFilmsSearch, setListFilmsSearch] = useState([])
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (listFilmsSearch.length === 0) {
      if (search) {
        searchGetAPI(search).then(resp => {
          if (resp.data.results.length < 1) {
            setError(true)
            return
          }
          setError(false)
          setListFilmsSearch(resp.data.results)
        }).catch(err => {
          setError(true)
        })
      }
    }
  }, [listFilmsSearch, search, navigate])


  return (
    <>
      <Formik
          initialValues={{
          query: `${search}`,
          
        }}

        onSubmit={(query) => {
          if (query.query === '') {
            setListFilmsSearch([])
              return setSearchParams("")
          }
          setSearchParams(query)
            setListFilmsSearch([])
          }}
      >
          <Form>
              <Field id="query" name="query" placeholder="Battman" />
              <button type="submit">Submit</button>
          </Form>
      </Formik>
      {listFilmsSearch && <SearchMovies films={listFilmsSearch}></SearchMovies>}
      {error && <NotFound></NotFound>}

    </>
  )
}
