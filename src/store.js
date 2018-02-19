import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import riportSagas from './services/sagas'
import riportReducers from './services/reducers'

const sagaMiddleware = createSagaMiddleware()

/* eslint-disable no-underscore-dangle */
const store = createStore(
  riportReducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)
/* eslint-enable */

sagaMiddleware.run(riportSagas)

export default store
