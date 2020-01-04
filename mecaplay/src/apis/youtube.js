import axios from 'axios'

const KEY = 'AIzaSyAjkmiA9X-8qElti4cB83_B0x1_ULI2bCw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});