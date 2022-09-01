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
  console.log("🚀 ~ file: Service.ts ~ line 18 ~ getAllGenres ~ response.data.genres", response.data.genres)
  
}

export const getFavMovies = async(url: string, setFavs:any) => {
  const response = await api.get(url)
  setFavs(response.data.results)
}

export const getChartMovies = async(url: string, setChart: any) => {
  const response = await api.get(url)
  setChart(response.data.results)
  // get list/{list_id}
}