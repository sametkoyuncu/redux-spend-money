import React from 'react'
import Grid from '@mui/material/Grid'
import Product from './Product'

const products = [
  {
    id: 1,
    title: 'Big Mac',
    price: 2,
    image: 'https://neal.fun/spend/images/big-mac.jpg',
  },
  {
    id: 2,
    title: 'Flip Flops',
    price: 3,
    image: 'https://neal.fun/spend/images/flip-flops.jpg',
  },
  {
    id: 3,
    title: 'Coca-Cola Pack',
    price: 5,
    image: 'https://neal.fun/spend/images/coca-cola-pack.jpg',
  },
  {
    id: 4,
    title: 'Movie Ticket',
    price: 12,
    image: 'https://neal.fun/spend/images/movie-ticket.jpg',
  },
  {
    id: 5,
    title: 'Book',
    price: 15,
    image: 'https://neal.fun/spend/images/book.jpg',
  },
  {
    id: 6,
    title: 'Lobster Dinner',
    price: 45,
    image: 'https://neal.fun/spend/images/lobster-dinner.jpg',
  },
  {
    id: 7,
    title: 'Video Game',
    price: 60,
    image: 'https://neal.fun/spend/images/video-game.jpg',
  },
  {
    id: 8,
    title: 'Amazon Echo',
    price: 99,
    image: 'https://neal.fun/spend/images/amazon-echo.jpg',
  },
  {
    id: 9,
    title: 'Year of Netflix',
    price: 100,
    image: 'https://neal.fun/spend/images/year-of-netflix.jpg',
  },
  {
    id: 10,
    title: 'Air Jordans',
    price: 125,
    image: 'https://neal.fun/spend/images/air-jordans.jpg',
  },
  {
    id: 11,
    title: 'Air Pods',
    price: 199,
    image: 'https://neal.fun/spend/images/airpods.jpg',
  },
  {
    id: 12,
    title: 'Gaming Console',
    price: 299,
    image: 'https://neal.fun/spend/images/gaming-console.jpg',
  },
  {
    id: 13,
    title: 'Drone',
    price: 350,
    image: 'https://neal.fun/spend/images/drone.jpg',
  },
  {
    id: 14,
    title: 'Smart Phone',
    price: 699,
    image: 'https://neal.fun/spend/images/smartphone.jpg',
  },
]

const Products = () => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={4} key={product.id}>
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Products
