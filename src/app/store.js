import { configureStore } from '@reduxjs/toolkit'
import salesReducer from 'slices/productSlice'
import resDetail from 'slices/productDetailSlice'

const rootReducer = {
  // listSale: salesReducer,
  // detail: resDetail
}

const store = configureStore({
  reducer: rootReducer
})

export default store