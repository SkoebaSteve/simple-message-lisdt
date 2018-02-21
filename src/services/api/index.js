import env from '../../env'

const Api = {
  fetchFromAPI: async (path) => {
    try {
      const response = await fetch(env.apiEndpoint + path)
      if (!response.ok) {
        throw (new Error('API ERROR'))
      }
      return response.json()
    } catch (e) {
      throw (new Error(e))
    }
  },
  postToAPI: async (path, data) => {
    try {
      const response = await fetch(env.apiEndpoint + path)
      if (!response.ok) {
        throw (new Error('API ERROR'))
      }
      return data
    } catch (e) {
      throw (new Error(e))
    }
  }
}

export default Api
