import React from 'react'

const Button = ({ productId, text, action, type = '' }) => {
  return (
    <button className={`btn ${type}`} onClick={() => action(productId)}>
      {text}
    </button>
  )
}

export default Button
