import React from 'react'

import Button from './Button'

import Card from './Card'

const Product = ({ id, title, price, image, quantity }) => {
  return (
    <Card>
      <div className="productCard">
        <img src={`${image}`} className="productImage" alt="Bill Gates" />
        <p className="productTitle">{title}</p>
        <p className="productPrice">{`$ ${price}`}</p>
        <div>
          <Button id={id} text="sell" type={quantity > 0 ? 'btn-danger' : ''} />
          <input className="productInput" value={quantity} disabled />
          <Button id={id} text="buy" type="btn-primary" />
        </div>
      </div>
    </Card>
  )
}

export default Product
