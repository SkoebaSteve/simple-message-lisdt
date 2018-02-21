/* eslint-env jest */
import fetchMock from 'fetch-mock'
import env from '../../env'
import API from './'

const data = { test: true }
const error = { message: 'network error' }

describe('succesful fetch requests', () => {
  beforeEach(() => {
    fetchMock
      .get(env.apiEndpoint, data)
      .catch(error)
  })
  afterEach(() => {
    fetchMock.restore()
  })

  it('returns results on a successful fetch request', async () => {
    expect.assertions(1)
    const results = await API.fetchFromAPI('')
    expect(results).toEqual(data)
  })

  it('returns results on a successful post request', async () => {
    expect.assertions(1)
    const results = await API.postToAPI('', data)
    expect(results).toEqual(data)
  })
})
