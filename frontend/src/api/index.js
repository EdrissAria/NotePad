import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

// getting data 
export const getNotes = () => api.get('notes').then(res=> console.log(res)).catch(er=> console.log(er))
