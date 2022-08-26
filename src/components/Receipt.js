import React from 'react'
import Card from './Card'

import { addCommaToMoney } from '../functions/addCommaToMoney'

const Receipt = ({ products }) => {
  const initialValue = 0
  const total = products.reduce(
    (prevValue, currValue) => prevValue + currValue.price * currValue.quantity,
    initialValue
  )

  return (
    <Card>
      <div id="receipt" className="receiptCard">
        <h3>Your Receipt</h3>
        {products.map((product) => (
          <div key={product.id} className="receiptCard-row">
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
