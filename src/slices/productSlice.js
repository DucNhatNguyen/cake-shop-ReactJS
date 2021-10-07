import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetProductSales } from 'api/productAPI'

export const getSales = createAsyncThunk('products/getSales', async () => {
  //thunkAPI.dispatch(...action) => use just Action
  const sales = await GetProductSales()
  console.log('haha ', sales)
  return sales
})

const productSlice = createSlice({
  name: 'productSales',
  initialState: {
    sales: {},
    status: null
  },
  reducers: {},
  extraReducers: {
    [getSales.pending]: (state, action) => {
      state.status = 'loadding'
    },
    [getSales.fulfilled]: (state, action) => {
      state.sales = action.payload,
      state.status = 'success'
    },
    [getSales.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})

//const { reducer: salesReducer } = productSlice
export default productSlice.reducer