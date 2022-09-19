import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
// getting data from api
export const getUpcoming = () => api.get(``).then(res => res.data)
 