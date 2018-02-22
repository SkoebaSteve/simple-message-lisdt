/* eslint-env jest */
import { call, put } from 'redux-saga/effects'
import messages from './reducers'
import {
  messagesFetchSucceeded,
  messagesFetchFailed,
  messagesSetLikedSucceeded,
  messagesSetLikedFailed,
} from './actions'
import { getMessages, setLiked } from './sagas'
import { fetchMessages, postLiked } from './api'

const testMessages = [{
  id: '1',
  liked: true,
}, {
  id: '2',
  liked: false,
}]

/* TESTING REDUCERS */

describe('message reducers', () => {
  it('should return an empty state', () => {
    expect(messages(undefined, {})).toEqual([])
  })

  it('should return messages on MESSAGES_FETCH_SUCCEEDED', () => {
    expect(messages([], messagesFetchSucceeded(testMessages))).toEqual(testMessages)
  })

  it('should return messages on MESSAGES_FETCH_FAILED', () => {
    expect(messages(testMessages, messagesFetchFailed('error'))).toEqual(testMessages)
  })

  it('should return the liked message on MESSAGES_SET_LIKED_SUCCEEDED', () => {
    expect(messages(
      testMessages,
      messagesSetLikedSucceeded(testMessages[0]),
    )).toEqual(testMessages)
  })

  it('should return messages on MESSAGES_SET_LIKED_FAILED', () => {
    expect(messages(testMessages, messagesSetLikedFailed('error'))).toEqual(testMessages)
  })

  it('should change the state whe changing a like on MESSAGES_SET_LIKED_SUCCEEDED', () => {
    expect(messages(
      testMessages,
      messagesSetLikedSucceeded({ id: '1', liked: false }),
    )).not.toEqual(testMessages)
  })
})

/* TESTING SAGAS */

describe('message saga', () => {
  const messageGen = getMessages()
  it('should fire the message fetch function', () => {
    expect(messageGen.next().value)
      .toEqual(call(fetchMessages))
  })
  it('should dispatch the fetched messages success action', () => {
    expect(messageGen.next(testMessages).value)
      .toEqual(put(messagesFetchSucceeded(testMessages)))
  })

  const likedGen = setLiked({ payload: testMessages[0] })
  it('should fire the message fetch function', () => {
    expect(likedGen.next().value)
      .toEqual(call(postLiked, testMessages[0]))
  })
  it('should dispatch the post liked success action', () => {
    expect(likedGen.next(testMessages[0]).value)
      .toEqual(put(messagesSetLikedSucceeded(testMessages[0])))
  })
})


/* TESTING API */
