import axios from 'axios'

const KEY = ''

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { // Params redefined in caller because of axios change.
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
