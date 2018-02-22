/* eslint-env jest */
import fetchMock from 'fetch-mock'
import env from '../../env'
import API from './'

const data = { test: true }

describe('succesful fetch requests', () => {
  beforeEach(() => {
    fetchMock.get(env.apiEndpoint, data)
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

describe('unsuccesful fetch requests', () => {
  it('returns an error on an usuccessful fetch request', async () => {
    let message
    try {
      await API.fetchFromAPI()
    } catch (error) {
      ({ message } = error)
    }
    expect(message).toBeTruthy()
  })

  it('returns an error on an usuccessful post request', async () => {
    let message
    try {
      await API.postToAPI()
    } catch (error) {
      ({ message } = error)
    }
    expect(message).toBeTruthy()
  })
})
