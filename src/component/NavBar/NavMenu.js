import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  useScrollTrigger,
  Grid
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

function NavMenu(props) {
  const classes = useStyles()
  const [showNar, setShowNar] = React.useState(false)

  const controlNavBar = () => {
    if (window.scrollY >= 226) {
      setShowNar(true)
    } else {
      setShowNar(false)
    }
  }

  window.addEventListener('scroll', controlNavBar)

  return (
    <div className= { showNar ? 'fixNav' : 'sticky'}>
      <Grid item xs={12} style={{ marginTop: -28 }}>
        <div className="wrapper">
          <nav className="menu">
            <ul className="clearfix">
              <li /*className="current-item"*/><Link to='/'>Trang chủ</Link></li>
              <li>
                <a href="#">Danh mục Bánh <span className="arrow">&#9660;</span></a>
                <ul className="sub-menu">
                  <li><Link to='/list-product/CA-02'>Bánh mặn</Link></li>
                  <li><Link to='/list-product/CA-03'>Bánh ngọt</Link></li>
                  <li><Link to='/list-product/CA-04'>Bánh trái cây</Link></li>
                  <li><Link to='/list-product/CA-05'>Bánh kem</Link></li>
                  <li><Link to='/list-product/CA-06'>Bánh crepe</Link></li>
                  <li><Link to='/list-product/CA-07'>Đồ ăn kèm</Link></li>
                </ul>
              </li>
              <li><a href="#">Danh mục phụ kiện <span className="arrow">&#9660;</span></a>
                <ul className="sub-menu">
                  <li><Link to='/list-product/'>Hộp đựng bánh</Link></li>
                  <li><Link to='/list-product/'>Dụng cụ ăn</Link></li>
                  <li><Link to='/list-product/'>Đồ trang trí</Link></li>
                </ul>
              </li>
              <li><Link to='#'>Giới thiệu</Link></li>
              <li><Link to='#'>Liên hệ</Link></li>
              <li className={ showNar ? 'visible' : 'hidden' }><Link to='/cart-detail'><span><FontAwesomeIcon icon={faShoppingCart}/></span> (3)</Link></li>
            </ul>
          </nav>
        </div>
      </Grid>
    </div>

  )
}

export default NavMenu