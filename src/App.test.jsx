/* eslint-env jest */
/* eslint no-unused-expressions: 0 */ // allows to use aliasses like .to.exist

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
