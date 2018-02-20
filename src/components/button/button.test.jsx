/* eslint-env jest */
/* eslint no-unused-expressions: 0 */ // allows to use aliasses like .to.exist
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import chaiEnzyme from 'chai-enzyme' // using beta: https://github.com/producthunt/chai-enzyme/issues/199
import Button from './'

chai.use(chaiEnzyme())

const button = {
  label: 'important',
  className: 'special',
}

it('Has the default values.', () => {
  const wrapper = shallow(<Button {...button} />)
  expect(wrapper.find('button')).to.have.length(1)
  expect(wrapper.find('button')).to.have.className('button special')
})

it('Fires a click event', () => {
  const onButtonClick = sinon.spy()
  const wrapper = shallow(<Button {...button} onClick={onButtonClick} />)
  wrapper.find('button').simulate('click')
  expect(onButtonClick).to.have.property('callCount', 1)
})
