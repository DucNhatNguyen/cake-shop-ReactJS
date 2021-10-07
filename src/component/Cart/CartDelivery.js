import React, { useState, useEffect } from 'react'
import { Grid, Breadcrumbs, Typography, Button, makeStyles, Divider, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { TextField, TextareaAutosize } from '@mui/material'

import Alert from 'component/Commons/AlertSave'
import { Link as LinkRoute } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  button: {
    background: '#1abc9c',
    borderColor: '#16a085',
    color: '#FFF',
    marginRight: '25px'
  },
  input: {
    width: '325px'
  },
  divider: {
    margin: '16px 0'
  }
}))

const hidden = {
  visibility: 'hidden'
}
const show = {
  visibility: 'visible'
}

const dataUser = {
  fullname: 'Nguyễn Văn A',
  phonenumber: '0888 888 888',
  email: 'babylucky@gmail.com',
  address: 'Bành Văn Trân, p7, quận Tân Bình, Tp.HCM'
}

function CartDelivery(props) {
  const [isLogin, setIsLogin] = useState(false)
  const [login, setLogin] = useState({})
  const [toggle, setToggle] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const classes = useStyles()
  const { register, handleSubmit } = useForm()
  const [open, setOpen] = React.useState({
    open: false,
    alertTitle: '',
    alertType: ''
  })

  useEffect(() => {
    setUserInfo(dataUser)
  }, [])

  const toggleShowAddressChange = () => {
    setToggle(true)
  }

  const onSubmit = (data) => {
    const user = {
      ...userInfo,
      address: data.address === undefined ? userInfo.address : data.address
    }
    setUserInfo(user)
    setOpen({
      ...open,
      open: true,
      alertTitle: 'Lưu thông tin thành công',
      alertType: 'success'
    })
    handleClose()
  }

  const handleSubmitLogin = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    setIsLogin(true)
    setOpen({
      ...open,
      open: true,
      alertTitle: 'Đăng nhập thành công',
      alertType: 'success'
    })
    handleClose()
  }

  const onClickOrder = () => {
    console.log(userInfo)
  }

  let resetTimeout
  const handleClose = () => {
    clearTimeout(resetTimeout)
    resetTimeout = setTimeout(() => {
      setOpen(false)
    }, 5000)
  }

  return (
    <>
      <Grid item xs></Grid>
      <Grid item xs={10}>
        <div className='breadcrumb' style={{ marginBottom: 30 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/" >
                Trang chủ
            </Link>
            <Link color="inherit" to="/" >
                Bánh trái cây
            </Link>
            <Typography color="textPrimary">Bánh Chocolate Trái cây</Typography>
          </Breadcrumbs>
        </div>
        <div className='container-delivery'>
          <div className='delivery-signin' hidden={isLogin}>
            <p>Đăng nhập để mua hàng</p>
            <Box className='delivery-form-signin' component="form" onSubmit={handleSubmitLogin} noValidate sx={{ mt: 1 }}>
              <div className='form-block'>
                <label>Email</label>
                <TextField
                  id="outlined-size-small"
                  required
                  size="small"
                  className={classes.input}
                  placeholder='Nhập email của bạn'
                  type='email'
                  name="email"
                />
              </div>
              <div className='form-block'>
                <label>Mật khẩu</label>
                <TextField
                  id="outlined-size-small"
                  required
                  placeholder="Nhập mật khẩu"
                  size="small"
                  type='password'
                  name="password"
                  className={classes.input}
                />
              </div>
              <div className='form-block'>
                <label></label>
                <Button variant="contained" disableElevation className={classes.button} type='submit'>
                    Đăng nhập
                </Button>
                <Button variant="contained" disableElevation className={classes.button} type='reset'>
                    Nhập lại
                </Button>
              </div>
              <div className='form-block'>
                <label></label>
                <span>Chưa có tài khoản? Hãy <Link to='/signup'>đăng kí</Link>  ngay.</span>
              </div>
            </Box>
          </div>

          <div className='delivery-user-info' hidden={!isLogin}>
            <p>Thông tin giao hàng</p>
            <form className='delivery-form-signin' onSubmit={handleSubmit(onSubmit)}>
              <div className='form-block'>
                <label>Tên khách hàng</label>
                <TextField
                  id="outlined-size-small"
                  size="small"
                  className={classes.input}
                  defaultValue='Nguyễn Văn A'
                  disabled
                  {...register('fullname')}
                />
              </div>
              <div className='form-block'>
                <label>Số điện thoại</label>
                <TextField
                  id="outlined-size-small"
                  size="small"
                  className={classes.input}
                  defaultValue='0888 888 8888'
                  disabled
                  {...register('phonenumber')}
                />
              </div>
              <div className='form-block'>
                <label>Email</label>
                <TextField
                  id="outlined-size-small"
                  size="small"
                  className={classes.input}
                  defaultValue='babylacky@gmail.com'
                  disabled
                  {...register('email')}
                />
              </div>
              <div className='form-block'>
                <label>Địa chỉ giao hàng</label>
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Empty"
                  style={{ width: 318, font: 'inherit', resize: 'none' }}
                  minRows={4}
                  defaultValue='Bành Văn Trân, p7, quận Tân Bình, Tp.HCM'
                  disabled={!toggle}
                  name="address"
                  {...register('address')}
                  className='textarea-input'
                />
                <span style={ !toggle ? show : hidden} onClick={toggleShowAddressChange}>Thay đổi</span>
              </div>
              <div className='form-block'>
                <label></label>
                <Button
                  variant="contained"
                  disableElevation
                  className={classes.button}
                  style={ toggle ? show : hidden}
                  type='submit'
                >
                    Lưu thông tin
                </Button>
                <Button
                  variant="contained"
                  disableElevation
                  className={classes.button}
                  //onClick={onClickOrder}
                  component={LinkRoute} to='/order-summary'
                >
                    Đặt hàng
                </Button>
              </div>

              <Alert open={open.open} AlertTitle={open.alertTitle} AlterType={open.alertType}/>
            </form>
          </div>

          <div className='delivery-products'>
            <p>Đơn hàng của bạn</p>
            <div className='delivery-product-item'>
              <img src='https://cf.shopee.vn/file/14dc9aa98ab3f723c3003542633c5442' />
              <div className='delivery-product-item-info'>
                <span>Bánh bông lan trứng muối</span>
                <span>Số lượng: <strong>1 cái</strong></span>
                <span>Thành tiền: <strong>300.000vnđ</strong></span>
              </div>
            </div>
            <Divider className={classes.divider}/>
            <div className='delivery-product-item'>
              <img src='https://cf.shopee.vn/file/14dc9aa98ab3f723c3003542633c5442' />
              <div className='delivery-product-item-info'>
                <span>Bánh bông lan trứng muối</span>
                <span>Số lượng: <strong>1 cái</strong></span>
                <span>Thành tiền: <strong>300.000vnđ</strong></span>
              </div>
            </div>
            <Divider className={classes.divider}/>
            <div className='delivery-cart-total'>
              <div className='delivery-cart-total-title'>
                <span>Tổng tiền: </span>
              </div>
              <div className='delivery-cart-total-amount'>
                <span>300.000 vnđ</span>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs></Grid>
    </>
  )
}

export default CartDelivery