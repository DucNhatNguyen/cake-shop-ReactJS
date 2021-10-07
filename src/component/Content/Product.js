/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Carousel from 'react-elastic-carousel'
import Carousell from 'component/Content/Carousel'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Content.css'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { GetProductSales, GetProductNews } from 'api/productAPI'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  root: {
    marginTop:'85px',
    marginBottom: '60px'
  }
}))

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3, itemsToScroll: 2 },
  { width: 850, itemsToShow: 4 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 6 },
  { width: 1750, itemsToShow: 7 }
]

function formatAmount(n) {
  return n.toFixed().replace(/./g, function(c, i, a) {
    return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c
  })
}

function Product(props) {
  const [sales, setSales] = useState()
  const [news, setNews] = useState()

  useEffect(() => {
    GetProductSales().then(res => {
      setSales(res)
    })

    GetProductNews().then(res => {
      setNews(res)
    })
  }, [])

  window.scrollTo(0, 0)

  const itemsPerPage = 4
  const hotCarouselRef = useRef(null)
  let resetTimeoutHot

  const classes = useStyles()

  return (
    <>
      <Carousell />
      <Grid item xs></Grid>
      <Grid item xs={10} className={classes.root}>
        <div className='content-hot-product'>
          <div className='title-new-product'>
            <span>Sản Phẩm SALE </span>
            <p>Đang hiển thị: <strong>12</strong> sản phẩm</p>
          </div>
          <div className="styling-example">
            <Carousel
              ref={hotCarouselRef}
              enableAutoPlay
              autoPlaySpeed={4500}
              onNextEnd={({ index }) => {
                clearTimeout(resetTimeoutHot)
                if (index + itemsPerPage === sales.length) {
                  resetTimeoutHot = setTimeout(() => {
                    hotCarouselRef.current.goTo(0)
                  }, 3500) // same time
                }
              }}
              itemsToShow={itemsPerPage}
              breakPoints={breakPoints}
            >
              {sales && sales.map((item) =>
                <div className="col-md-3 col-sm-6 product-card" key={item.ProductId}>
                  <div className="product-grid">
                    <div className='ribbon-wrapper'>
                      <div className='ribbon-new'>
                            Sale
                      </div>
                    </div>
                    <div className="product-image">
                      <Link to='/detail' className="image">
                        <img className="pic-1" src={item.imgLink}/>
                      </Link>
                      <ul className="product-links">
                        <li><a href="#"><i className="fa fa-shopping-bag"></i> Add to cart</a></li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h3 className="title"><Link to={`/detail/${item.ProductId}`}>{item.ProductName}</Link></h3>
                      <div className="price">
                        <span className='own-price'>{formatAmount(item.OwnPrice)}</span>
                        <span> - {formatAmount(item.SalePrice || 0)} vnđ</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </Carousel>
          </div>
        </div>

        <div className='content-sale-product'>
          <div className='title-new-product'>
            <span>Sản Phẩm MỚI </span>
            <p>Đang hiển thị: <strong>12</strong> sản phẩm</p>
          </div>
          <div className='row sale-list-product'>
            {news && news.map((item) =>
              <div className="col-md-3 col-sm-6 product-card-sale" key={item.ProductId}>
                <div className="product-grid">
                  <div className='ribbon-wrapper'>
                    <div className='ribbon-sale'>
                            new
                    </div>
                  </div>
                  <div className="product-image">
                    <a href="#" className="image">
                      <img className="pic-1" src={item.imgLink}/>
                    </a>
                    <ul className="product-links">
                      <li><a href="#"><i className="fa fa-shopping-bag"></i> Add to cart</a></li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to={`/detail/${item.ProductId}`}>{item.ProductName}</Link></h3>
                    <div className="price">
                      <span>{formatAmount(item.OwnPrice || 0)} vnđ</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Grid>
      <Grid item xs></Grid>
    </>
  )
}

export default Product