import React from 'react'
import Message from '../message'

class MessagesList extends React.Component {

  componentDidMount() {
    this.props.getMessages()
  }
  render() {
    const { messages, changeLiked } = this.props
    return (
      <ul>
        { messages.map(message => (
          <li key={message.id}>
            <Message {...message} changeLiked={changeLiked} />
          </li>
          ))
        }
      </ul>
    )
  }
}

// const MessagesList = ({ messages, changeLiked }) => (
//   <ul>
//     { messages.map(message => (
//       <li key={message.id}>
//         <Message {...message} changeLiked={changeLiked} />
//       </li>
//       ))
//     }
//   </ul>
// )

export default MessagesList
