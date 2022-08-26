import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { updateQuantity } from '../redux/products/productsSlice'

import Button from './Button'
import Card from './Card'

// toplam para - istenilen adet * price, yeterli bakiye kontrolü
const haveEnoughMoneyCalculator = (totalMoney, quantity, price) => {
  return totalMoney - quantity * price >= 0
}

const Product = ({ id, title, price, image, quantity }) => {
  const totalMoney = useSelector((state) => state.products.money)

  const [productQuantity, setProductQuantity] = useState(parseInt(quantity))
  const [haveEnoughMoney, setHaveEnoughMoney] = useState(
    haveEnoughMoneyCalculator(totalMoney, productQuantity + 1, price)
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateQuantity({ id: id, quantity: productQuantity }))
  }, [productQuantity, dispatch, id, haveEnoughMoney])

  // do you have enough money to buy product
  useEffect(() => {
    setHaveEnoughMoney(
      haveEnoughMoneyCalculator(
        totalMoney,
        quantity - productQuantity + 1,
        price
      )
    )
  }, [totalMoney, productQuantity, price, quantity])

  // yeterli bakiye varsa alabilir,
  // yoksa alabileceği en yüksek miktarda alabilir.
  const handleChange = (e) => {
    if (haveEnoughMoneyCalculator(totalMoney, e.target.value, price)) {
      setProductQuantity(e.target.value)
    } else {
      const maxQuantity = parseInt(totalMoney / price)
      console.log(maxQuantity)
      setProductQuantity(maxQuantity)
    }
  }

  // productQuantity state update methods
  const increaseQuantity = () => {
    if (productQuantity > 0) {
      setProductQuantity(parseInt(productQuantity) - 1)
    }
  }

  const decreaseQuantity = () => {
    if (haveEnoughMoney) {
      setProductQuantity(parseInt(productQuantity) + 1)
    }
  }

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
            type="number"
            min="0"
            className="productInput"
            value={productQuantity}
            onChange={handleChange}
          />
          <Button
            id={id}
            text="buy"
            action={decreaseQuantity}
            disabled={!haveEnoughMoney}
            type="btn-primary"
          />
        </div>
      </div>
    </Card>
  )
}

export default Product
