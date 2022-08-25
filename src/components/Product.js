import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { updateQuantity } from '../redux/products/productsSlice'

import Button from './Button'
import Card from './Card'

const Product = ({ id, title, price, image, quantity }) => {
  const [productQuantity, setProductQuantity] = useState(quantity)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateQuantity({ id: id, quantity: productQuantity }))
    console.log('id', id)
  }, [productQuantity, dispatch, id])

  //
  const handleChange = (e) => {
    setProductQuantity(e.target.value)
  }

  // productQuantity state update
  const increaseQuantity = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1)
    }
  }

  const decreaseQuantity = () => setProductQuantity(productQuantity + 1)

  return (
    <Card>
      <div className="productCard">
        <img src={`${image}`} className="productImage" alt="Bill Gates" />
        <p className="productTitle">{title}</p>
        <p className="productPrice">{`$ ${price}`}</p>
        <div>
          <Button
            id={id}
            text="sell"
            action={increaseQuantity}
            type={quantity > 0 ? 'btn-danger' : ''}
          />
          <input
            className="productInput"
            value={productQuantity}
            onChange={handleChange}
          />
          <Button
            id={id}
            text="buy"
            action={decreaseQuantity}
            type="btn-primary"
          />
        </div>
      </div>
    </Card>
  )
}

export default Product
