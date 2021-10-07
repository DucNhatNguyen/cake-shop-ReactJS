import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import logo from 'Images/Logo/BAKERYwith love.png'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  popperPaper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper
  },
  popper: {
    padding: 8,
    width: 420
  }
}))

function NavLogo(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClickCart = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'transitions-popper' : undefined

  return (
    <>
      <Grid item xs={4}>
        <div className='logo-cake' style={{ marginRight: '-153px' }}>
          <div className='logo-cake-img'>
            <img src={ logo }/>
          </div>
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className='box-logo-right'>
          <div className='input-search'>
            <div className='search-box'>
              <input className="search__input" type="text" placeholder="Tìm kiếm" />
            </div>
          </div>
          <div className='cart-box'>
            <div className='cart-box-text' onClick={handleClickCart}>
              <p><FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: 5 }}/>  Giỏ hàng (3) <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 13, marginLeft: 10 }}/></p>
            </div>
            <Popper id={id} open={open} anchorEl={anchorEl} transition className={classes.popper}>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <div className='cart-body'>
                    <div className='cart-item'>
                      <div className='media'>
                        <div className='media-image'>
                          <a href='#' className='pull-left'>
                            <img src='https://cf.shopee.vn/file/14dc9aa98ab3f723c3003542633c5442' alt='' style={{ maxWidth: '100%', height: 50 }}/>
                          </a>
                        </div>
                        <div className='media-body'>
                          <span className='cart-item-title'><strong>Bánh Crepe Trà Xanh</strong></span>
                          <span className='cart-item-options'>Số Lượng: 1</span>
                          <span className='cart-item-amount'>Thành tiền: 123.000đ</span>
                        </div>
                      </div>
                    </div>
                    <div className='cart-item'>
                      <div className='media'>
                        <div className='media-image'>
                          <a href='#' className='pull-left'>
                            <img src='https://cf.shopee.vn/file/14dc9aa98ab3f723c3003542633c5442' alt='' style={{ maxWidth: '100%', height: 50 }}/>
                          </a>
                        </div>
                        <div className='media-body'>
                          <span className='cart-item-title'><strong>Bánh Crepe Trà Xanh</strong></span>
                          <span className='cart-item-options'>Số Lượng: 1</span>
                          <span className='cart-item-amount'>Thành tiền: 123.000đ</span>
                        </div>
                      </div>
                    </div>
                    <div className='cart-caption'>
                      <div className='cart-total'>
                        <div className='cart-total-amount'>
                          <span>Tổng tiền: <strong>300.000đ</strong></span>
                        </div>
                        <div className='cart-total-view-detail'>
                          <Link to='/cart-detail'>
                            <span className='cart-total-view-detail-button'>Chi tiết <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 13 }}/></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              )}
            </Popper>
          </div>
        </div>
      </Grid>
    </>
  )
}

export default NavLogo