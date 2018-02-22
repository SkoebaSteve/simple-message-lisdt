/* eslint-env jest */
import { take } from 'redux-saga/effects'
import messages from './reducers'
import {
  messagesFetchSucceeded,
  messagesFetchFailed,
  messagesSetLikedSucceeded,
  messagesSetLikedFailed,
} from './actions'
import { getMessages, setLiked } from './sagas'

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
  it('should fire the messages succeeded', () => {
  })
})


/* TESTING API */
