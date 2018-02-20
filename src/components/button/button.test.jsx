/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import toJson from 'enzyme-to-json'
import Button from './'

const button = {
  label: 'important',
  className: 'special',
}

it('Has the default values.', () => {
  const wrapper = shallow(<Button {...button} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('Fires a click event', () => {
  const onButtonClick = sinon.spy()
  const wrapper = shallow(<Button {...button} onClick={onButtonClick} />)
  wrapper.find('button').simulate('click')
  expect(onButtonClick).toHaveProperty('callCount', 1)
})
