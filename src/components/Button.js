import React from 'react'

const Button = ({ id, text, action, disabled = false, type = '' }) => {
  return (
    <button className={`btn ${type}`} onClick={action} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
