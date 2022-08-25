import { createSlice } from '@reduxjs/toolkit'
import { productList } from '../../data/productList'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    money: 100000000000,
    productList: productList,
    orderList: null,
    error: null,
  },
  reducers: {
    buyProduct: {
      reducer: (state, action) => {
        state.productList = state.productList.map((product) => {
          if (product.id === action.payload) {
            product.quantity += 1
            state.money -= product.price
          }
          return product
        })
      },
    },
    sellProduct: {
      reducer: (state, action) => {
        state.productList = state.productList.map((product) => {
          if (product.id === action.payload && product.quantity > 0) {
            product.quantity -= 1
            state.money += product.price
          }
          return product
        })
      },
    },
  },
  extraReducers: {},
})
export const { buyProduct, sellProduct } = productsSlice.actions
export default productsSlice.reducer
