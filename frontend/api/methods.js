/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import Api from './index'

export default {
    getPokesData() {
        return Api().post('/list')
    }
    // eslint-disable-next-line eol-last
}