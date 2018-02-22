import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchMessages, postLiked } from './api'
import {
  messagesFetchSucceeded,
  messagesFetchFailed,
  messagesSetLikedSucceeded,
  messagesSetLikedFailed,
} from './actions'

// worker Saga: will be fired on MESSAGES_FETCH_REQUESTED actions
export function* getMessages() {
  try {
    const messages = yield call(fetchMessages)
    yield put(messagesFetchSucceeded(messages))
  } catch (e) {
    yield put(messagesFetchFailed(e.message))
  }
}

export function* setLiked(action) {
  try {
    const message = yield call(postLiked, action.payload)
    yield put(messagesSetLikedSucceeded(message))
  } catch (e) {
    yield put(messagesSetLikedFailed(e.message))
  }
}

export default function* messagesSaga() {
  yield takeLatest('MESSAGES_FETCH_REQUESTED', getMessages)
  yield takeLatest('MESSAGES_SET_LIKE_REQUESTED', setLiked)
}
