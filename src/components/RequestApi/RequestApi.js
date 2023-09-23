import axios from "axios";

const api_key = '90ae104277ae6d98152a93ab1cd40893'

// Function return a list trend films one day
export async function trendingGetAPI() {
    const controllerTrend = new AbortController();

    const API_URL = 'https://api.themoviedb.org/3/trending/all/day?';
    return await axios.get(
        API_URL, {
            params: {
                api_key,
            },
            signal: controllerTrend.signal
        }
    )
}

// Function returns a list of movies by request  
export function searchGetAPI(TegSearch) {
    const API_URL = 'https://api.themoviedb.org/3/search/movie';
    return axios.get(
        API_URL, {
        params: {
                api_key,
                query: `${TegSearch}`

        }
    }
    )
}

// Function returns information about the movie    
export   function detailsFilmGetAPI (id) {
    const API_URL = `https://api.themoviedb.org/3/movie/${id}`;
    return  axios.get(
        API_URL, {
        params: {
            api_key,
        }
    }
    )
    
}

// Function returns information about the cast and crew    
export function creditsFilmGetAPI(movie_id) {
    const API_URL = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;
    return axios.get(
        API_URL, {
        params: {
            api_key,
        }
    }
    )
}

// Function returns reviews for the movie page

export function reviewsFilmGetAPI(movie_id) {
    const API_URL = `https://api.themoviedb.org/3/movie/${movie_id}/reviews`;
    return axios.get(
        API_URL, {
        params: {
            api_key,
        }
    }
    )
}