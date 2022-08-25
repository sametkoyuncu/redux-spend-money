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
    updateQuantity: {
      reducer: (state, action) => {
        state.productList = state.productList.map((product) => {
          if (product.id !== action.payload.id) {
            return product
          }

          const differency = action.payload.quantity - product.quantity
          // check for quantity is changed
          if (differency > 0) {
            state.money -= differency * product.price
            product.quantity += differency
            console.log('diff büyük')
          } else if (differency < 0) {
            state.money -= differency * product.price
            product.quantity += differency
            console.log('diff küçük')
          }

          return product
        })
      },
    },
  },
  extraReducers: {},
})
export const { buyProduct, sellProduct, updateQuantity } = productsSlice.actions
export default productsSlice.reducer
