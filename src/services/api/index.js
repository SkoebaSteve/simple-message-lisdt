import env from '../../env'

const Api = {
  fetchFromAPI: async (path) => {
    try {
      const response = await fetch(env.apiEndpoint + path)
      return response.json()
    } catch (e) {
      throw (new Error(e))
    }
  },
  postToAPI: async (path, data) => {
    try {
      const response = await fetch(env.apiEndpoint + path)
      return data
    } catch (e) {
      throw (new Error(e))
    }
  }
}

export default Api
