import axios from 'axios'

export const getList = async (query) => {
    const url = `http://www.omdbapi.com/?apikey=faf7e5bb&${query}`
    return await axios.get(url)
}

export const getDetails = async (query) => {
    const url = `http://www.omdbapi.com/?apikey=faf7e5bb&${query}`
    return await axios.get(url)
}

