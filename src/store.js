import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import riportSagas from './services/sagas.js'
import riportReducers from './services/reducers.js'

const initialStore = {
  messages: []
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  riportReducers,
  initialStore,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

sagaMiddleware.run(riportSagas)

export default store
