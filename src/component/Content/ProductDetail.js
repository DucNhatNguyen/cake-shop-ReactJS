import React, { useState, useRef, useEffect } from 'react'
import { Breadcrumbs,
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  ListItem,
  List,
  Grid,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Box
} from '@material-ui/core'
import Carousel from 'react-elastic-carousel'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Content.css'
import Carousell from 'component/Content/Carousel'
import { useParams, Link } from 'react-router-dom'
import { GetProductDetail, getProductRelative } from 'api/productAPI'
import { isEmpty } from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    marginTop: '72px'
  },
  inline: {
    display: 'grid'
  },
  margin: {
    margin: theme.spacing(1)
  },
  avatar: {
    width: '70px',
    height: '70px',
    marginRight: '8px'
  },
  divider: {
    marginLeft: '15px'
  },
  tab: {
    border: '1px solid #7FFFD4',
    borderBottom: 'none'
    //backgroundColor: '#7FFFD4'
  },
  tabpanel: {
    border: '1px solid #7FFFD4'
  }
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3, itemsToScroll: 2 },
  { width: 850, itemsToShow: 4 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 6 },
  { width: 1750, itemsToShow: 7 }
]

const hidden = {
  display: 'none'
}

function formatAmount(n) {
  return n.toFixed().replace(/./g, function(c, i, a) {
    return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c
  })
}

function ProductDetail(props) {
  const classes = useStyles()
  const [quantity, setQuantity] = useState(1)
  const [value, setValue] = useState(0)
  const [dataDetail, setDataDetail] = useState(null)
  const [productRelative, setProductRelative] = useState(null)

  const itemsPerPage = 4
  const sameProRef = useRef(null)
  let resetTimeoutHot

  let { id } = useParams()
  useEffect(() => {
    GetProductDetail(id).then(res => {
      setDataDetail(res)
    })

    getProductRelative(id).then(res => {
      setProductRelative(res)
    })
  }, [id])

  window.scrollTo({
    top: 700,
    left: 0,
    behavior: 'smooth'
  })

  if (isEmpty(dataDetail)) {
    return <h2>Detail not found</h2>
  }

  const handleChangeTab = (event, newValue) => {
    setValue(newValue)
  }

  function onChangeValueQuantity(e) {
    if (e.target.validity.valid) {
      if (e.target.value <= e.target.max * 1) {
        setQuantity(e.target.value)
      }
    }
  }
  function notAllowInput(e) {
    e.preventDefault()
  }
  function handleClick(event) {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }
  return (
    <>
      <Carousell />
      <Grid item xs></Grid>
      <Grid item xs={10}>
        <div className='breadcrumb'>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                Trang chủ
            </Link>
            <Link color="inherit" href="#" onClick={handleClick}>
              {dataDetail.detail.CategoryName}
            </Link>
            <Typography color="textPrimary">fffff</Typography>
          </Breadcrumbs>
        </div>
        <div className="bootdey">
          <div className="col-md-12">
            <section className="panel">
              <div className="panel-body">
                <div className="pro-img-preview">
                  <div className="pro-img-details">
                    <img src={dataDetail.detail.imgLink} alt="" style={{ width: '525px', height: '380px', borderRadius: '30px 0 30px 0' }}/>
                  </div>
                  <div className="pro-img-list">
                    {dataDetail.detail.listImages && dataDetail.detail.listImages.map((item) =>
                      <a href="#" key={item.productId}>
                        <img src={dataDetail.detail.imgLink} alt="" width='115px' height='100px'/>
                      </a>
                    )}
                  </div>
                </div>
                <div className="pro-info">
                  <h1 className="pro-d-title">
                    {dataDetail.detail.ProductName}
                  </h1>
                  <div className="product_meta">
                    <span className="posted_in"> <strong>Loại: </strong> <a rel="tag" href="#">{dataDetail.detail.CategoryName}</a></span>
                  </div>
                  <div className="m-bot15"> <strong>Giá : </strong> <span className="amount-old" style={ dataDetail.detail.IsSale === true ? { display: 'inline' } : hidden}>{formatAmount(dataDetail.detail.UnitPrice)} vnđ</span>  <span className="pro-price"> {formatAmount(dataDetail.detail.SalePrice)} vnđ</span></div>
                  <div className="form-group">
                    <label>Số lượng ({dataDetail.detail.Quantity})</label>
                    <input
                      type="number"
                      name='quantity'
                      placeholder="1"
                      pattern="[0-9]*"
                      value={quantity}
                      max={dataDetail.detail.Quantity}
                      min='1'
                      className="form-control quantity"
                      onChange={onChangeValueQuantity}
                      onKeyDown={notAllowInput}
                    />
                  </div>
                  <div className='form-group'>
                    <Button variant="contained" disableElevation color='secondary'><FontAwesomeIcon icon={faCartPlus} style={{ fontSize: 16, marginRight: 10 }}/> Giỏ hàng </Button>
                  </div>
                </div>
                <div className='accessories'>
                  <List className={classes.root}>
                    {dataDetail.sideDishes && dataDetail.sideDishes.map((item) =>
                      <>
                        <ListItem alignItems="flex-start" key={item.ProductId}>
                          <ListItemAvatar>
                            <Avatar alt="Travis Howard" src={item.imgLink} variant="square" className={classes.avatar}/>
                          </ListItemAvatar>
                          <ListItemText
                            primary={item.ProductName}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  className={classes.inline}
                                  color="textPrimary"
                                >
                                  {formatAmount(item.UnitPrice)} vnđ
                                  <Button variant="contained" size="small" color="primary" className={classes.margin}>Thêm</Button>
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" className={classes.divider}/>
                      </>
                    )}
                  </List>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Grid item xs={10}>
          <div className='tab'>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChangeTab} aria-label="basic tabs example" >
                  <Tab label="Mô tả sản phẩm" {...a11yProps(0)} className={classes.tab}/>
                  <Tab label="Đánh giá" {...a11yProps(1)} className={classes.tab}/>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0} className={classes.tabpanel}>
                <h3>Nguyên liệu:</h3>
                <p>Bánh bông lan trứng vịt muối được làm từ bột mì, trứng gà, đường cát, muối iốt, lòng đỏ trứng muối,phô mai,bơ thực vật, sữa tươi, nước cam tươi. Hạn dùng được 5 ngày kể từ ngày sản suất nên rất tiện lợi cho quý khách mua về làm quà cho người thân và bạn bè của mình.</p>
                <h3>Quy trình chế biến</h3>
                <p>Bánh bông lan trứng vịt muối được làm từ bột mì, trứng gà, đường cát, muối iốt, lòng đỏ trứng muối,phô mai,bơ thực vật, sữa tươi, nước cam tươi. Hạn dùng được 5 ngày kể từ ngày sản suất nên rất tiện lợi cho quý khách mua về làm quà cho người thân và bạn bè của mình.</p>
                <div className='img-des'><img src={dataDetail.detail.imgLink} style={{ width: '400px' }}/></div>
              </TabPanel>
              <TabPanel value={value} index={1} className={classes.tabpanel}>
                <a href=''>Đăng nhập</a> để có thể bình luận cho sản phẩm này.
              </TabPanel>
            </Box>
          </div>
        </Grid>

        <div className='content-same-product'>
          <div className='title-new-product'>
            <span style={{ fontSize: '30px' }}>Sản Phẩm Tương Tự </span>
            <p>Đang hiển thị: <strong>12</strong> sản phẩm</p>
          </div>
          <div className="styling-example">
            <Carousel
              ref={sameProRef}
              enableAutoPlay
              autoPlaySpeed={4500}
              onNextEnd={({ index }) => {
                clearTimeout(resetTimeoutHot)
                if (index + itemsPerPage === productRelative.length) {
                  resetTimeoutHot = setTimeout(() => {
                    sameProRef.current.goTo(0)
                  }, 4500) // same time
                }
              }}
              itemsToShow={itemsPerPage}
              breakPoints={breakPoints}
            >
              {productRelative && productRelative.map((item) =>
                <div className="col-md-3 col-sm-6 product-card" key={item.productId}>
                  <div className="product-grid">
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
      <Grid item xs></Grid>
    </>
  )
}

export default ProductDetail