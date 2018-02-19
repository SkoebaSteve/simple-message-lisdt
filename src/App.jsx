import React from 'react'
import store from './store'
import MessagesContainer from './containers/messagesContainer'

const App = () => (
  <MessagesContainer store={store} />
)

export default App
