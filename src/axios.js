import axios from 'axios'

const Axios = axios.create({
    baseURL:"https://api.giphy.com/v1/gifs"
})

export default Axios