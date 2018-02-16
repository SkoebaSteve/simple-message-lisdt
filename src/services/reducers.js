import { combineReducers } from 'redux'
import messages from './messages/reducers'

const riportApp = combineReducers({
  messages,
})

export default riportApp
