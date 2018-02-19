import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchMessages, postLiked } from './api'

// worker Saga: will be fired on MESSAGES_FETCH_REQUESTED actions
function* getMessages() {
  try {
    const messages = yield call(fetchMessages)
    yield put({ type: 'MESSAGES_FETCH_SUCCEEDED', messages })
  } catch (e) {
    yield put({ type: 'MESSAGES_FETCH_FAILED', error: e.message })
  }
}

function* setLiked(action) {
  try {
    const message = yield call(postLiked, action.payload)
    yield put({ type: 'MESSAGES_SET_LIKE_SUCCEEDED', message })
  } catch (e) {
    yield put({ type: 'MESSAGES_SET_LIKE_FAILED', error: e.message })
  }
}

function* messagesSaga() {
  yield takeLatest('MESSAGES_FETCH_REQUESTED', getMessages)
  yield takeLatest('MESSAGES_SET_LIKE_REQUESTED', setLiked)
}

export default messagesSaga
