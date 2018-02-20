/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import toJson from 'enzyme-to-json'
import Message from './'
import Button from '../button'

const message = {
  id: '1',
  type: 'important',
  date: '2018-02-16',
  content: 'this is a very important message',
}

it('Has the default values.', () => {
  const wrapper = shallow(<Message {...message} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('Has the liked but ton active.', () => {
  const wrapper = shallow(<Message {...message} liked />)
  expect(wrapper.find(Button).at(0).hasClass('active')).toEqual(true)
  expect(wrapper.find(Button).at(1).hasClass('active')).toEqual(false)
})

it('Has the disliked button active.', () => {
  const wrapper = shallow(<Message {...message} liked={false} />)
  expect(wrapper.find(Button).at(0).hasClass('active')).toEqual(false)
  expect(wrapper.find(Button).at(1).hasClass('active')).toEqual(true)
})

it('throws a click event', () => {
  const onButtonClick = sinon.spy()
  const wrapper = shallow(<Message {...message} changeLiked={onButtonClick} />)
  wrapper.find(Button).at(0).simulate('click')
  expect(onButtonClick).toHaveProperty('callCount', 1)
  wrapper.find(Button).at(1).simulate('click')
  expect(onButtonClick).toHaveProperty('callCount', 2)
})
