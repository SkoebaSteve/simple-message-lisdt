import React from 'react'
import Moment from 'react-moment'
import cx from 'classnames'
import Button from '../button'

const Message = ({ id, type, date, content, liked, changeLiked }) => (
  <div>
    <div>
      { type } | <Moment format="MMMM DD">{ date }</Moment>
    </div>
    <p>{ content }</p>
    <Button
      label="like this"
      className={liked !== undefined && cx({ active: liked })}
      onClick={() => changeLiked(id, true)}
    />
    <Button
      label="dislike this"
      className={liked !== undefined && cx({ active: !liked })}
      onClick={() => changeLiked(id, false)}
    />
  </div>
)

export default Message
