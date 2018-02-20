/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import MessagesContainer, { mapDispatchToProps } from './'
import MessagesList from '../../components/messagesList'

const mockStore = configureMockStore()

const initialStore = {
  messages: [{
    id: '1',
    type: 'important',
    date: '2018-02-16',
    content: 'this is a very important message',
  }, {
    id: '2',
    type: 'less important',
    date: '2018-02-14',
    content: 'this is a less important message',
  }],
}

it('should render with a mocked store', () => {
  const store = mockStore(initialStore)
  const wrapper = shallow(<MessagesContainer store={store} />)
  expect(wrapper.type()).toEqual(MessagesList)
  expect(wrapper.props().messages).toEqual(initialStore.messages)
})

it('should return the correct object on fetching the messages', () => {
  const dispatch = jest.fn()
  mapDispatchToProps(dispatch).getMessages()
  expect(dispatch.mock.calls[0][0]).toEqual({ type: 'MESSAGES_FETCH_REQUESTED' })
})

it('should return the correct object on a like change', () => {
  const dispatch = jest.fn()
  mapDispatchToProps(dispatch).changeLiked('1', true)
  expect(dispatch.mock.calls[0][0]).toEqual({
    type: 'MESSAGES_SET_LIKE_REQUESTED',
    payload: { id: '1', liked: true },
  })
})
