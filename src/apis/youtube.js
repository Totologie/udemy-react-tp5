import axios from 'axios'

const KEY = 'AIzaSyAXksCDAlN5ecpE2cEtLHw5KQu2UaX4ZAc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { // Params redefined in caller because of axios change.
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})