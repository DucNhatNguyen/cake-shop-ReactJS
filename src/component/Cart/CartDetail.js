import React, { useEffect, useState } from 'react'
import { Grid, Breadcrumbs, Link, Typography, Button, makeStyles } from '@material-ui/core'
import CartProduct from './CartProduct'
import { Link as LinkRoute } from 'react-router-dom'

import './Cart.css'

const cartData = {
  cartId: 'cart1',
  totalCart: '300000',
  list: [
    {
      productName: 'Bánh bông lan trứng muối',
      productCode: '4444444',
      quantity: 4,
      categoryName: 'CA2',
      categoryId: 'CA1',
      unitPrice: '50000',
      imageLink: 'http://amthucvungtau.net/vnt_upload/product/02_2017/trung_muoi_copy.jpg'
    },
    {
      productName: 'Bánh Chocola',
      productCode: '4343434',
      quantity: 2,
      categoryName: 'CA2',
      unitPrice: '50000',
      imageLink: 'http://amthucvungtau.net/vnt_upload/product/02_2017/trung_muoi_copy.jpg'
    }
  ]
}

const shipData = [
  { code: 'GRAB', fee: 10000 },
  { code: 'HAHAMOVE', fee: 5000 },
  { code: 'BEAMIN', fee: 12000 },
  { code: 'SHOP', fee: 0 },
  { code: 'null', fee: 0 }
]

const useStyles = makeStyles((theme) => ({
  checkoutEnable: {
    display: 'block',
    float: 'none',
    fontSize: '0.75rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: '0.625rem 0',
    width: '100%',
    backgroundColor: '#A9A9A9',
    border: '0 none',
    outline: '0 none'
  },
  checkoutDisabled: {
    display: 'block',
    float: 'none',
    fontSize: '0.75rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: '0.625rem 0',
    width: '100%',
    backgroundColor: '#A9A9A9',
    border: '0 none',
    outline: '0 none'
  }
}))

function CartDetail(props) {
  const [data, setData] = useState({})
  const [productsCart, setProductsCart] = useState([])
  const [total, setTotal] = useState('')
  const [ship, setShip] = useState({ code: 'null', fee: 0 })
  const [promoCode, setpromoCode] = useState('')
  const [toggle, setToggle] = useState(false)

  const classes = useStyles()

  useEffect(() => {
    setData(cartData)
    setProductsCart(cartData.list)
    setTotal(cartData.totalCart)
  }, [])


  function handleClick(event) {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  const handleSubmit = () => {
    // const sumary = {
    //   total: total,
    //   shipCode: shipCode,
    //   promoCode: promoCode
    // }
    // setTotal(data.totalCart)
    console.log('data: ', data)
  }

  function formatMoney(n, currency) {
    const money = n * 1
    return money.toFixed(0).replace(/./g, function(c, i, a) {
      return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c
    }) + currency
  }
  const updateTotalCartAmount = (newQuantity, unitPrice, ownPrice) => {
    // tổng hiện tại - tổng giá cũ của sản phẩm mà update số lượng
    const a = total - ownPrice
    // tổng tiền mới của sản phẩm = số lượng mới * đơn giá
    const b = newQuantity * unitPrice

    const newTotal = a + b
    setTotal(newTotal)
  }

  const onChangeFeeShip = (e) => {
    const select = shipData.find(i => i.code == e.target.value)
    setShip(select)

    const demoId = document.querySelector('#demo-id')
    if (e.target.value === 'null') {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }

  return (
    <>
      <Grid item xs></Grid>
      <Grid item xs={10} style={{ fontSize: '0.75rem' }}>
        <div className='breadcrumb' style={{ marginBottom: 30 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                Trang chủ
            </Link>
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                Bánh trái cây
            </Link>
            <Typography color="textPrimary">Bánh Chocolate Trái cây</Typography>
          </Breadcrumbs>
        </div>
        <div className="basket">
          <div className="basket-labels">
            <ul>
              <li className="item item-heading">Sản phẩm</li>
              <li className="unit-price-cart">Đơn giá</li>
              <li className="quantity">Số lượng</li>
              <li className="subtotal">Tổng giá</li>
            </ul>
          </div>
          {productsCart.map((item, index) => (
            <CartProduct
              item={item}
              key={index}
              updateTotalCartAmount={updateTotalCartAmount}
            />
          ))}
        </div>
        <aside>
          <div className="summary">
            <div className="summary-total-items"><span className="total-items"></span> Giỏ hàng</div>
            <div className="summary-subtotal">
              <div className="subtotal-title">Tạm tính</div>
              <div className="subtotal-value final-value" id="basket-subtotal">{formatMoney(total, ' vnđ')}</div>
              <div className="summary-promo hide">
                <div className="promo-title">Khuyến mãi</div>
                <div className="promo-value final-value" id="basket-promo"></div>
              </div>
            </div>
            <div className="summary-delivery">
              <select name="delivery-collection" className="summary-delivery-selection" onChange={onChangeFeeShip}>
                <option value="null" selected="selected">Chọn đơn vị vận chuyển</option>
                <option value="GRAB">Grab giao hàng </option>
                <option value="HAHAMOVE">HahaMove</option>
                <option value="BEAMIN">BEAMIN</option>
                <option value="SHOP">Nhận tại cửa hàng</option>
              </select>
            </div>
            <div className="ship-fee-title">Phí vận chuyển</div>
            <div className="ship-fee-value" id="basket-subtotal">{formatMoney(ship.fee, ' vnđ')}</div>
            <div className="basket-module">
              <label htmlFor="promo-code">Nhập mã khuyến mãi của bạn</label>
              <input id="promo-code" type="text" name="promo-code" maxLength="8" className="promo-code-field" onChange={e => setpromoCode(e.target.value)} />
              <button className="promo-code-cta">Nhập</button>
            </div>
            <div className="summary-total">
              <div className="total-title">Tổng đơn hàng</div>
              <div className="total-value final-value" id="basket-total">{formatMoney(parseInt(total) + parseInt(ship.fee), ' vnđ')}</div>
            </div>
            <div className="summary-checkout">
              <Button
                id='btn-next'
                //className={ toggle ? 'checkout-cta-hover' : 'checkout-cta' }
                onClick={handleSubmit}
                component={LinkRoute} to='/cart-delivery'
                disabled={!toggle}
                className={ toggle ? classes.checkoutEnable : classes.checkoutDisabled}
              >Tiếp tục</Button>
            </div>
          </div>
        </aside>
      </Grid>
      <Grid item xs></Grid>
    </>
  )
}

export default CartDetail
