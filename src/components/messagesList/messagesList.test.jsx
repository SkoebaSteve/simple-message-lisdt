/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import toJson from 'enzyme-to-json'
import MessageList from './'

const messages = [{
  id: '1',
  type: 'important',
  date: '2018-02-16',
  content: 'this is a very important message',
}, {
  id: '2',
  type: 'less important',
  date: '2018-02-14',
  content: 'this is a less important message',
}]

it('Has the default values.', () => {
  const didMount = sinon.spy()
  // shallow has access to the lifecycle from enzyme 3: https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
  const wrapper = shallow(<MessageList messages={messages} getMessages={didMount} />)
  expect(toJson(wrapper)).toMatchSnapshot()
  expect(didMount.callCount).toEqual(1)
})

