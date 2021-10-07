import React, { useState, useEffect } from 'react'
import { Grid, Button } from '@mui/material'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

import './Cart.css'

const orderData = {
  orderId: 'DH09090',
  total: '300000',
  orderProduct: [
    {
      id: '1',
      imgUrl: 'https://bakeryshopdemo.trungquandev.com/images/product/crepe-traxanh.jpg',
      productName: 'Bánh bông lan trứng muối',
      unitPrice: '30000',
      quantity: 2,
      subTotal: '60000'
    },
    {
      id: '2',
      imgUrl: 'https://bakeryshopdemo.trungquandev.com/images/product/crepe-traxanh.jpg',
      productName: 'Bánh bông lan trứng muối',
      unitPrice: '30000',
      quantity: 2,
      subTotal: '60000'
    },
    {
      id: '3',
      imgUrl: 'https://bakeryshopdemo.trungquandev.com/images/product/crepe-traxanh.jpg',
      productName: 'Bánh bông lan trứng muối',
      unitPrice: '30000',
      quantity: 2,
      subTotal: '60000'
    }
  ]
}
function OrderSumary(props) {
  const [data, setData] = useState({})


  useEffect(() => {
    setData(orderData)
    console.log('ádasdsad ', data)
  }, [])

  function formatMoney(n, currency) {
    const money = n * 1
    return money.toFixed(0).replace(/./g, function(c, i, a) {
      return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c
    }) + currency
  }

  const downloaInvoice = (invoideCode) => {
    const input = document.getElementById('invoice')
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('Images')
      const pdf = new jsPDF()
      pdf.addImage(imgData, 'JPEG', 0, 0)
      pdf.save(`invoice-${invoideCode}.pdf`)
    })
  }

  return (
    <>
      <Grid item xs></Grid>
      <Grid item xs={10}>
        <div id='invoice' className='container-order-summary'>
          <h1>Cảm ơn bạn đã mua hàng tại shop</h1>
          <h4>Mã đơn hàng của bạn: <strong className='order-code'>DH03939</strong></h4>
          <div className='order-info'>
            <div className='order-pro-block'>
              <span>Họ và Tên: <strong>Nguyễn Văn A</strong></span>
              <span>Email: <strong>example@gmail.com</strong></span>
              <span>Số điện thoại: <strong>0888 888 88</strong></span>
              <span>Địa chỉ giao hàng: <strong>149/23 Bành Văn Trân, p7, Q.Tân Bình, Tp.HCM</strong></span>
            </div>
            <div className='order-pro-block order-right'>
              <span>Phí giao hàng: <strong>300.000 vnđ</strong></span>
              <span>Phương thức thanh toán: <strong>Nhận khi giao hàng</strong></span>
              <span>Đơn vị giao hàng: <strong>GRAB</strong></span>
            </div>
          </div>
          <div className='grid'>
            <span><strong></strong></span>
            <span><strong>Tên sản phẩm</strong></span>
            <span><strong>Đơn giá</strong></span>
            <span><strong>Số lượng</strong></span>
            <span><strong>Tạm tính</strong></span>

            {orderData.orderProduct.map((item, index) =>
              <>
                <span key={index} ><img src={item.imgUrl} width='200' height='auto'/></span>
                <span className='line-height'>{item.productName}</span>
                <span className='line-height'>{item.unitPrice}</span>
                <span className='line-height'>{item.quantity}</span>
                <span className='line-height'>{item.subTotal}</span>
              </>
            )}
          </div>
          <div className="summary-total">
            <div className="total-title order-total-title">Tổng đơn hàng</div>
            <div className="total-value final-value order-total-value" id="basket-total">{formatMoney(parseInt(orderData.total), ' vnđ')}</div>
          </div>
          <div className='order-action'>
            <Button
              variant="contained"
              disableElevation
              color="success"
              style={{ marginRight: 30 }}
            >
              Export invoice
            </Button>
            <Button variant="contained" disableElevation color="secondary">
              Tiếp tục mua hàng
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs></Grid>
    </>
  )
}

export default OrderSumary