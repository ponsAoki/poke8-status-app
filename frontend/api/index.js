/* eslint-disable eol-last */
/* eslint-disable indent */
import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://localhost:3005/`
    })
}