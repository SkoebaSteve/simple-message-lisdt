import { fork } from 'redux-saga/effects'
import messagesSaga from './messages/sagas'

function* riportSaga() {
  yield fork(messagesSaga)
}

export default riportSaga
