/* eslint-env jest */
/* eslint no-unused-expressions: 0 */ // allows to use aliasses like .to.exist
import React from 'react'
import chai, { expect } from 'chai'
import { mount } from 'enzyme'
import sinon from 'sinon'
import chaiEnzyme from 'chai-enzyme' // using beta: https://github.com/producthunt/chai-enzyme/issues/199
import Message from './'

chai.use(chaiEnzyme())

const message = {
  id: '1',
  type: 'important',
  date: '2018-02-16',
  content: 'this is a very important message',
}

it('Has the default values.', () => {
  const wrapper = mount(<Message {...message} />)
  expect(wrapper.find('time')).to.have.length(1)
  expect(wrapper.find('time')).to.have.text('February 16')
  expect(wrapper.find('p')).to.have.text(message.content)
  expect(wrapper.find('button')).to.have.length(2)
  expect(wrapper.find('button').at(0)).to.not.have.className('active')
  expect(wrapper.find('button').at(1)).to.not.have.className('active')
})

it('Has the liked button active.', () => {
  const wrapper = mount(<Message {...message} liked />)
  expect(wrapper.find('button').at(0)).to.have.className('active')
  expect(wrapper.find('button').at(1)).to.not.have.className('active')
})

it('Has the disliked button active.', () => {
  const wrapper = mount(<Message {...message} liked={false} />)
  expect(wrapper.find('button').at(0)).to.not.have.className('active')
  expect(wrapper.find('button').at(1)).to.have.className('active')
})

it('throws a click event', () => {
  const onButtonClick = sinon.spy()
  const wrapper = mount(<Message {...message} changeLiked={onButtonClick} />)
  wrapper.find('button').at(0).simulate('click')
  expect(onButtonClick).to.have.property('callCount', 1)
  wrapper.find('button').at(1).simulate('click')
  expect(onButtonClick).to.have.property('callCount', 2)
})
