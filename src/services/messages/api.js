import Api from '../api'

const fetchMessages = () => Api.fetchFromAPI('messages')
const postLiked = payload => Api.postToAPI('messages', payload)

export { fetchMessages, postLiked }
