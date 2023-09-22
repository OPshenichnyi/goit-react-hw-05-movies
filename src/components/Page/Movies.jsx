import { SearchMovies } from "components/SearchMovies/SearchMovies"

import { searchGetAPI } from "components/RequestApi/RequestApi";
import { Formik, Form, Field } from "formik";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";


export const Movies = () => {
  
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get("query") ?? ""
  const [listFilmsSearch, setListFilmsSearch] = useState([])

  useEffect(() => {
    if (listFilmsSearch.length === 0) {
      if (search) {
        searchGetAPI(search).then(resp => {
          setListFilmsSearch(resp.data.results)
        })
      }
  
    }
  }, [listFilmsSearch, search])

  

  return (
    <>
      <Formik
          initialValues={{
              query: `${search}`,
          }}
          onSubmit={(query) => {
              const nextParams = query !== "" ? query  : "";
            setSearchParams(nextParams)
            setListFilmsSearch([])
          }}
      >
          <Form>
              {/* <label htmlFor="querySearch">Enter name film </label> */}
              <Field id="query" name="query" placeholder="Battman" />
              <button type="submit">Submit</button>
          </Form>
      </Formik>
      {listFilmsSearch && <SearchMovies films={listFilmsSearch}></SearchMovies> }

    </>
  )
}
