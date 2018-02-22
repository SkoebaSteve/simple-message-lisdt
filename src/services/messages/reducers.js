const messages = (state = [], action) => {
  switch (action.type) {
    case 'MESSAGES_FETCH_SUCCEEDED':
      return action.messages
    case 'MESSAGES_SET_LIKED_SUCCEEDED':
      return state.map(message =>
        ((message.id === action.message.id)
          ? { ...message, liked: action.message.liked }
          : message
        ))
    default:
      return state
  }
}

export default messages
