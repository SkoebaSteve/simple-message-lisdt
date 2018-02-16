import React from 'react'
import cx from 'classnames'
import './style.css'

const Button = ({ label, className, onClick }) => (
  <button
    onClick={onClick}
    className={cx('button', className)}
  >
    { label }
  </button>
)

export default Button
