/* eslint-env jest */
/* eslint no-unused-expressions: 0 */ // allows to use aliasses like .to.exist
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import chaiEnzyme from 'chai-enzyme' // using beta: https://github.com/producthunt/chai-enzyme/issues/199
import Moment from 'react-moment'
import Message from './'
import Button from '../button'

chai.use(chaiEnzyme())

const message = {
  id: '1',
  type: 'important',
  date: '2018-02-16',
  content: 'this is a very important message',
}

it('Has the default values.', () => {
  const wrapper = shallow(<Message {...message} />)
  expect(wrapper.find(Moment)).to.have.length(1)
  expect(wrapper.find(Moment)).to.contain('2018-02-16')
  expect(wrapper.find('p')).to.have.text(message.content)
  expect(wrapper.find(Button)).to.have.length(2)
  expect(wrapper.find(Button).at(0)).to.not.have.className('active')
  expect(wrapper.find(Button).at(1)).to.not.have.className('active')
})

it('Has the liked button active.', () => {
  const wrapper = shallow(<Message {...message} liked />)
  expect(wrapper.find(Button).at(0)).to.have.className('active')
  expect(wrapper.find(Button).at(1)).to.not.have.className('active')
})

it('Has the disliked button active.', () => {
  const wrapper = shallow(<Message {...message} liked={false} />)
  expect(wrapper.find(Button).at(0)).to.not.have.className('active')
  expect(wrapper.find(Button).at(1)).to.have.className('active')
})

it('throws a click event', () => {
  const onButtonClick = sinon.spy()
  const wrapper = shallow(<Message {...message} changeLiked={onButtonClick} />)
  wrapper.find(Button).at(0).simulate('click')
  expect(onButtonClick).to.have.property('callCount', 1)
  wrapper.find(Button).at(1).simulate('click')
  expect(onButtonClick).to.have.property('callCount', 2)
})
