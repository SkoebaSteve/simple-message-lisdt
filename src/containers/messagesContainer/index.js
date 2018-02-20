import { connect } from 'react-redux'
import MessagesList from '../../components/messagesList'

const mapStateToProps = state => ({ messages: state.messages })

export const mapDispatchToProps = dispatch => (
  {
    changeLiked: (id, liked) => {
      dispatch({ type: 'MESSAGES_SET_LIKE_REQUESTED', payload: { id, liked } })
    },
    getMessages: () => { dispatch({ type: 'MESSAGES_FETCH_REQUESTED' }) },
  }
)

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesList)

export default MessagesContainer
