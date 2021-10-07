import axios from 'axios'
import { API_ROOT_URL } from 'utils/constants'

export const GetProductSales = async () => {
  const req = await axios.get(`${API_ROOT_URL}/v1/products/sales`)
  return req.data
}

export const GetProductNews = async () => {
  const req = await axios.get(`${API_ROOT_URL}/v1/products/news`)
  return req.data
}

export const GetProductDetail = async (id) => {
  const req = await axios.get(`${API_ROOT_URL}/v1/products/detail/${id}`)
  return req.data
}

export const getProductRelative = async (id) => {
  const req = await axios.get(`${API_ROOT_URL}/v1/products/getProductRelative/${id}`)
  return req.data
}

export const getProductById = async (id, page, pageSize) => {
  const req = await axios.get(`${API_ROOT_URL}/v1/products/getProductByCategoryId?id=${id}&limit=${pageSize}&skip=${page}`)
  return req.data
}