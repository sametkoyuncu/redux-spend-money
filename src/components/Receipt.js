import React from 'react'
import Card from './Card'

import { useSelector } from 'react-redux'
import { addCommaToMoney } from '../functions/addCommaToMoney'

const Receipt = () => {
  const productList = useSelector((state) =>
    state.products.productList.filter((product) => product.quantity > 0)
  )
  const initialValue = 0
  const total = productList.reduce(
    (prevValue, currValue) => prevValue + currValue.price * currValue.quantity,
    initialValue
  )

  productList.length === 0 && <Card></Card>

  return (
    <Card>
      <div className="receiptCard">
        <h3>Your Receipt</h3>
        {productList.map((product) => (
          <div className="receiptCard-row">
            <div className="receiptCard-cell">{`${product.title} (${product.quantity}x):`}</div>
            <div className="receiptCard-cell receiptCard-price">{`$${
              product.quantity * product.price
            }`}</div>
          </div>
        ))}
        <div className="receiptCard-row receiptCard-total">
          <span>TOTAL:</span>
          <span className="receiptCard-price">{`$${addCommaToMoney(
            total
          )}`}</span>
        </div>
      </div>
    </Card>
  )
}

export default Receipt
