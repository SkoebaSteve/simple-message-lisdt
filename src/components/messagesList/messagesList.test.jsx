/* eslint-env jest */
/* eslint no-unused-expressions: 0 */ // allows to use aliasses like .to.exist
import React from 'react'
import chai, { expect } from 'chai'
import { mount } from 'enzyme'
import sinon from 'sinon'
import chaiEnzyme from 'chai-enzyme' // using beta: https://github.com/producthunt/chai-enzyme/issues/199
import MessageList from './'

chai.use(chaiEnzyme())

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
  const wrapper = mount(<MessageList messages={messages} getMessages={didMount} />)
  expect(wrapper.find('ul')).to.have.length(1)
  expect(wrapper.find('li')).to.have.length(2)
  expect(didMount.callCount).to.equal(1)
})

