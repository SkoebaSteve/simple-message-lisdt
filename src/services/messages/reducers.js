const messages = (state = [], action) => {
  switch (action.type) {
    case 'MESSAGES_FETCH_SUCCEEDED':
      return action.messages
    case 'MESSAGES_FETCH_FAILED':
      return state
    case 'MESSAGES_SET_LIKED_SUCCEEDED':
      return state.map(message =>
        ((message.id === action.message.id)
          ? { ...message, liked: action.message.liked }
          : message
        ))
    case 'MESSAGES_SET_LIKED_FAILED':
      return state
    default:
      return state
  }
}

export default messages
