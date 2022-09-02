import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTk0MmE2YTcyOTlmY2VkOGRjYTIxNmQ4ODZlYzQ4OCIsInN1YiI6IjYzMGZlY2E3MTI2ZWMzMDA5MmEwODJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IXqj9K5KXxOrulL-UlBOlovyODtRKxcOY5Vezmtw83I'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {'Authorization': `bearer ${token}`}
})

export const getNewMovies = async(url: string, setMovies: any) =>{
  const response = await api.get(url)
  setMovies(response.data.results)
}

export const getAllGenres = async(url: string, setGenres: any) => {
  const response = await api.get(url)
  setGenres(response.data.genres)  
}

export const postFavMovie = async(url: string, favMovie: any, setFavMovie: any) => {
  const response = await api.post(url, favMovie)
  setFavMovie(response.data.results)
}

export const getFavMovies = async(url: string, setFavs:any) => {
  const response = await api.get(url)
  setFavs(response.data.results)
}

export const getChartMovies = async(url: string, setChart: any) => {
  const response = await api.get(url)
  setChart(response.data.items)
}

export const postChartMovies = async(url: string, movie: any, setMovie: any) => {
  const response = await api.post(url, movie)
  setMovie(response.data)
  console.log("🚀 ~ file: Service.ts ~ line 39 ~ postChartMovies ~ response.data", response.data)
}

export const clearChart = async(url: string) => {
  const response = await api.post(url)
}
