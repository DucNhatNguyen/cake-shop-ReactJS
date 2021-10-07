import React, { useState, useEffect, useRef } from 'react'
import { Grid,
  Box,
  List,
  ListItemText,
  Collapse,
  ListItemButton,
  Breadcrumbs,
  Typography,
  Pagination
} from '@mui/material'
import { ExpandLess,
  ExpandMore,
  ArrowRight
} from '@mui/icons-material'
import Carousel from 'react-elastic-carousel'
import './Content.css'
import { useParams, Link } from 'react-router-dom'
import { getProductById, GetProductSales } from 'api/productAPI'

const dataCategory = [
  {
    categoryId: 'CA-01',
    categoryName: 'Bánh',
    totalChild: 6,
    categoryChild: [
      { categoryId: 'CA-02', categoryParentId: 'CA-01', categoryName: 'Bánh mặn' },
      { categoryId: 'CA-03', categoryParentId: 'CA-01', categoryName: 'Bánh ngọt' },
      { categoryId: 'CA-04', categoryParentId: 'CA-01', categoryName: 'Bánh trái cây' },
      { categoryId: 'CA-05', categoryParentId: 'CA-01', categoryName: 'Bánh kem' },
      { categoryId: 'CA-06', categoryParentId: 'CA-01', categoryName: 'Bánh crepe' },
      { categoryId: 'CA-07', categoryParentId: 'CA-01', categoryName: 'Đồ ăn kèm' }
    ]
  },
  { categoryId: 'CA-08', categoryName: 'Trái cây', totalChild: 2, categoryChild: [
    { categoryId: 'CA-10', categoryParentId: 'CA-08', categoryName: 'Trái cây Việt Nam' },
    { categoryId: 'CA-11', categoryParentId: 'CA-08', categoryName: 'Trái cây nhập khẩu' }
  ] },
  { categoryId: 'CA-09', categoryName: 'Phụ kiện', totalChild: 0, categoryChild: [] }
]

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3, itemsToScroll: 2 },
  { width: 850, itemsToShow: 4 },
  { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 6 },
  { width: 1750, itemsToShow: 7 }
]

function formatAmount(n) {
  return n.toFixed().replace(/./g, function(c, i, a) {
    return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c
  })
}
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function ListProduct(props) {
  const [open, setOpen] = useState(true)
  const [category, setCategory] = useState([])
  const [listData, setListData] = useState([])
  const [page, setPage] = useState(1)
  const [sales, setSales] = useState()

  const itemsPerPage = 3
  const hotCarouselRef = useRef(null)
  let resetTimeoutHot

  let { id } = useParams()

  useEffect(() => {
    setCategory(dataCategory)

    GetProductSales().then(res => {
      setSales(res)
    })

    getProductById(id, page, 6).then(res => {
      setListData(res)
    })
    setPage(1)
  }, [id])

  useEffect(() => {
    getProductById(id, page, 6).then(res => {
      setListData(res)
    })
  }, [page])

  function handleClick(event) {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  const handleChange = (event, value) => {
    setPage(value)
  }

  const handleClickCategory = (categoryId) => {
    console.log(categoryId)
  }
  return (
    <>
      <Grid item xs></Grid>
      <Grid item xs={10}>
        <div className='breadcrumb'>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                Trang chủ
            </Link>
            <Typography color="textPrimary">{listData.categoryName}</Typography>
          </Breadcrumbs>
        </div>
        <div className='category-list-pro'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4} style={{ maxWidth: '24.333%' }}>
                <section className='panel'>
                  <h1>Category</h1>
                  <div className='panel-body'>
                    <List
                      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                    >
                      {category.map((item) =>
                        <>
                          <ListItemButton
                            key={item.categoryId}
                            // onClick={() => {
                            //   if (item.totalChild > 0) {
                            //     setOpen(!open)
                            //   }
                            // }}
                            style={{ background: '#FAEBD7' }}>
                            <ListItemText primary={item.categoryName} />
                            {item.totalChild > 0 ? (open ? <ExpandLess /> : <ExpandMore />) : ''}
                          </ListItemButton>

                          <Collapse in={open} timeout="auto" unmountOnExit >
                            <List component="div" disablePadding>
                              {item.categoryChild.map((item) =>
                                <Link to={`/list-product/${item.categoryId}`} key={item.categoryId}>
                                  <ListItemButton sx={{ pl: 4 }} onClick={() => {handleClickCategory(item.categoryId)}}>
                                    <ArrowRight />
                                    <ListItemText primary={item.categoryName} />
                                  </ListItemButton>
                                </Link>
                              )}
                            </List>
                          </Collapse>
                        </>
                      )}
                    </List>
                  </div>
                </section>
              </Grid>
              <Grid item xs={6} md={8} >
                <div className='title-category-product'>
                  <span>{listData.categoryName}</span>
                  <p>Có: <strong>{listData.total}</strong> sản phẩm</p>
                </div>
                <div className='row category-list-pro-flex'>
                  {listData.data && listData.data.map((item) =>
                    <div className="col-md-3 col-sm-6 product-card category-list-item" key={item.ProductId}>
                      <div className="product-grid">
                        <div className='ribbon-wrapper'>
                          <div className='ribbon-sale'>
                            SAle
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
                </div>
                <div className='category-list-pagination'>
                  <Pagination count={Math.ceil(parseInt(listData.total)/6)} page={page} onChange={handleChange} />
                </div>

                <div className='carousel-product-relative'>
                  <div className='title-new-product'>
                    <span>Sản Phẩm khuyến mãi </span>
                    <p>Có: <strong>12</strong> sản phẩm</p>
                  </div>
                  <div className="styling-example">
                    <Carousel
                      ref={hotCarouselRef}
                      enableAutoPlay
                      autoPlaySpeed={3500}
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
              </Grid>
            </Grid>
          </Box>
        </div>
      </Grid>
      <Grid item xs></Grid>
    </>
  )
}

export default ListProduct