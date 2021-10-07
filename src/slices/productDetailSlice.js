import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetProductDetail } from 'api/productAPI'

export const Getdetail = createAsyncThunk('products/GetProductDetail', async (id) => {
  //thunkAPI.dispatch(...action) => use just Action
  const data = await GetProductDetail(id)
  return data
})

const productDetailSlice = createSlice({
  name: 'detailProduct',
  initialState: {
    detail: {},
    status: null
  },
  reducers: {},
  extraReducers: {
    [Getdetail.pending]: (state, action) => {
      state.status = 'loadding'
    },
    [Getdetail.fulfilled]: (state, action) => {
      state.sales = action.payload,
      state.status = 'success'
    },
    [Getdetail.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})

//const { reducer: salesReducer } = productSlice
export default productDetailSlice.reducer