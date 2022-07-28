import axios from 'axios'

export const getList = async (query) => {
    return await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&${query}`)
}

