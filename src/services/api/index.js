const Api = {
  fetchFromAPI: async (endpoint) => {
    try {
      const response = await fetch(`http://localhost:3223/${endpoint}`)
      return response.json()
    } catch (e) {
      throw (new Error(e))
    }
  },
  postToAPI: async (endpoint, data) => {
    try {
      const response = await fetch(`http://localhost:3223/${endpoint}`)
      return data
    } catch (e) {
      throw (new Error(e))
    }
  }
}

export default Api
