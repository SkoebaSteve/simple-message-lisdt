import { connect } from 'react-redux'
import MessagesList from '../../components/messagesList'
import { messagesFetchRequested, messagesChangeLikedRequested } from '../../services/actions'

const mapStateToProps = state => ({ messages: state.messages })

// export for easy testing: https://github.com/reactjs/react-redux/issues/325
export const mapDispatchToProps = dispatch => (
  {
    changeLiked: (id, liked) => {
      dispatch(messagesChangeLikedRequested({ id, liked }))
    },
    getMessages: () => { dispatch(messagesFetchRequested()) },
  }
)

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesList)

export default MessagesContainer
