import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CartProduct(props) {
  const { item, updateTotalCartAmount } = props
  const [quantity, setQuantity] = useState(item.quantity)
  function formatMoney(n, currency) {
    const money = n * 1
    return money.toFixed(0).replace(/./g, function(c, i, a) {
      return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c
    }) + currency
  }

  function onlyNumberKey(e) {
    if (e.target.validity.valid) {
      if (e.target.value <= 10) {
        setQuantity(e.target.value)
        updateTotalCartAmount(e.target.value, item.unitPrice, quantity * item.unitPrice)
      }

    }
  }

  return (
    <div className="basket-product">
      <div className="item">
        <div className="product-cart-image">
          <img src={item.imageLink} alt="Product" className="product-frame" />
        </div>
        <div className="product-details">
          <h1><strong><span className="item-quantity">{quantity}</span> x </strong>{item.productName}</h1>
          <p><strong>Loại: </strong>{item.categoryName}</p>
          <p>Product Code - {item.productCode}</p>
        </div>
      </div>
      <div className="unit-price-cart">{formatMoney(item.unitPrice, ' vnđ')}</div>
      <div className="quantity">
        {/* <input type="number" value={item.quantity} min="1" className="quantity-field" /> */}
        <input
          type="number"
          name='quantity'
          placeholder="1"
          pattern="[0-9]*"
          value={quantity}
          max='10'
          min='1'
          className="quantity-field"
          onChange={onlyNumberKey}
        />
      </div>
      <div className="subtotal">{formatMoney(quantity * item.unitPrice, ' vnđ')}</div>
      <div className="remove">
        <button>Xóa</button>
      </div>
    </div>
  )
}

export default CartProduct