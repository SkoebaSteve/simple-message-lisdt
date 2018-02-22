const messagesFetchRequested = getMessages => ({
  type: 'MESSAGES_FETCH_REQUESTED',
  getMessages,
})

const messagesFetchSucceeded = messages => ({
  type: 'MESSAGES_FETCH_SUCCEEDED',
  messages,
})

const messagesFetchFailed = error => ({
  type: 'MESSAGES_FETCH_FAILED',
  error,
})

const messagesChangeLikedRequested = payload => ({
  type: 'MESSAGES_SET_LIKE_REQUESTED',
  payload,
})

const messagesSetLikedSucceeded = message => ({
  type: 'MESSAGES_SET_LIKED_SUCCEEDED',
  message,
})

const messagesSetLikedFailed = error => ({
  type: 'MESSAGES_SET_LIKED_FAILED',
  error,
})

export {
  messagesFetchRequested,
  messagesFetchSucceeded,
  messagesFetchFailed,
  messagesChangeLikedRequested,
  messagesSetLikedSucceeded,
  messagesSetLikedFailed,
}
