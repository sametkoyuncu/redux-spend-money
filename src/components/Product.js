import React from 'react'
import Button from './Button'

import Card from './Card'

const handleClick = ({ id }) => {
  console.log(`product id: ${id}`)
}

const Product = ({ id, title, price, image }) => {
  return (
    <Card>
      <div className="productCard">
        <img src={`${image}`} className="productImage" alt="Bill Gates" />
        <p className="productTitle">{title}</p>
        <p className="productPrice">{`$ ${price}`}</p>
        <div>
          <Button productId={id} text="sell" action={handleClick} />
          <input className="productInput" value={0} />
          <Button
            productId={id}
            text="buy"
            action={handleClick}
            type="btn-primary"
          />
        </div>
      </div>
    </Card>
  )
}

export default Product
