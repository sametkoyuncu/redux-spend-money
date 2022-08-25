import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import Product from './Product'

const Products = () => {
  const products = useSelector((state) => state.products.productList)
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={4} key={product.id}>
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Products
