import Api from '../api.js'

const fetchMessages = () => Api.fetchFromAPI('messages')
const postLiked = payload => Api.postToAPI('messages', payload)

export { fetchMessages, postLiked }
