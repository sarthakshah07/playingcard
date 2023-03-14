import axios from "axios"

 const api2 = axios.create({
    baseURL: 'https://reqres.in/',
    // baseURL: 'https://reqres.in/api/users?page=2',
    headers: {
        'Content-Type': 'application/json'
    },
})
export default api2