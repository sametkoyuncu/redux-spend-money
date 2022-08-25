import React from 'react'
import { useDispatch } from 'react-redux'
import { buyProduct, sellProduct } from '../redux/products/productsSlice'

const Button = ({ id, text, type = '' }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    if (text === 'sell') {
      dispatch(sellProduct(id))
    } else if (text === 'buy') {
      dispatch(buyProduct(id))
    }
  }
  return (
    <button className={`btn ${type}`} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
