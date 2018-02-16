const Api = {
  fetchFromAPI: async (endpoint) => {
    const response = await fetch(`http://localhost:3223/${endpoint}`)
    return response.json()
  },
  postToAPI: async (endpoint, data) => {
    const response = await fetch(`http://localhost:3223/${endpoint}`)
    return response.json()
  }
}

export default Api
