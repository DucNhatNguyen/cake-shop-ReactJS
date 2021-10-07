import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import logo from './BAKERYwith_love-removebg-preview.png'

import FaceBook from '@material-ui/icons/Facebook'
import Youtube from '@material-ui/icons/YouTube'
import Instagram from '@material-ui/icons/Instagram'
import './Footer.css'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#172431',
    position: 'relative',
    color: '#fff',
    paddingTop: '45px',
    fontSize: '16px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

function Footer(props) {
  const classes = useStyles()
  return (
    <>
      <Grid item xs={12} className={classes.root} style={{ padding: '0 12px' }}>
        <div className='container'>
          <div className='footer-top flex flex-wrap'>
            <a href='#' className='fs-logo'>
              <img src={logo} alt='logo footer' />
            </a>
            <div className='fs-right flex'>
              <div className='hotline font-semibold'>
                <div className='text-hotline'>
                  <h2 className='hotline-title'>Hotline</h2>
                </div>
                <a href='#' className='phone-number'>085.332.6180</a>
              </div>
              <div className='social'>
                <ul className='social-ul flex item-center'>
                  <li>
                    <a href='#' className='item-social' target='_blank'><FaceBook style={{ fontSize: 'inherit', marginTop: 7 }}/></a>
                  </li>
                  <li>
                    <a href='#' className='item-social' target='_blank'><Youtube style={{ fontSize: 'inherit', marginTop: 7 }}/></a>
                  </li>
                  <li>
                    <a href='#' className='item-social' target='_blank'><Instagram style={{ fontSize: 'inherit', marginTop: 7 }}/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer-content flex flex-wrap'>
            <ul className='primary-links flex flex-wrap'>
              <li className='list-item'>
                <h2 className='text-lg'><span>Chính sách</span></h2>
                <ul className='list-item-child'>
                  <li><a href='#' className='text-white'>Giao hàng</a></li>
                  <li><a href='#' className='text-white'>Bảo hàng, đổi trả</a></li>
                  <li><a href='#' className='text-white'>Thanh toán</a></li>
                </ul>
              </li>
              <li className='list-item'>
                <h2 className='text-lg'><span>Sản phẩm</span></h2>
                <ul className='list-item-child'>
                  <li><a href='#' className='text-white'>Bánh ngọt</a></li>
                  <li><a href='#' className='text-white'>Bánh mặn</a></li>
                  <li><a href='#' className='text-white'>Bánh trái cây</a></li>
                  <li><a href='#' className='text-white'>Bánh kem</a></li>
                </ul>
              </li>
              <li className='list-item'>
                <h2 className='text-lg' style={{ visibility: 'hidden' }}><span>Sản phẩm dịch vụ</span></h2>
                <ul className='list-item-child'>
                  <li><a href='#' className='text-white'>Bánh crepe</a></li>
                  <li><a href='#' className='text-white'>Phụ kiện bánh</a></li>
                  <li><a href='#' className='text-white'>Đồ trang trí</a></li>
                </ul>
              </li>
              <li className='list-item' style={{ visibility: 'hidden' }}>
                <h2 className='text-lg'><span>Sản phẩm dịch vụ</span></h2>
                <ul>
                  <li><a href='#' className='text-white'>Bánh</a></li>
                  <li><a href='#' className='text-white'>Bánh</a></li>
                  <li><a href='#' className='text-white'>Bánh</a></li>
                  <li><a href='#' className='text-white'>Bánh</a></li>
                </ul>
              </li>
            </ul>
            <div className='blog-content'>
              <h2 className='shops-address'><span>Hệ thống cửa hàng</span></h2>
              <ul className='flex primary-list-address'>
                <li>
                  <div className='city'>TP. Hồ Chí Minh</div>
                  <div>
                    <div className='address'>149/23 Bành Văn Trân, phường 7, Quận Tân Bình</div>
                    <a className='map' href='https://goo.gl/maps/6yA6yJG3zFeEWNim7' target='_blank' rel="noreferrer">Chỉ đường</a>
                  </div>
                </li>
                <li>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2901998858206!2d106.65341331480182!3d10.789071261910372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecafe3249b1%3A0x5f696344f67d3bfa!2zMTQ5LzIzIELDoG5oIFbEg24gVHLDom4sIFBoxrDhu51uZyA3LCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1631721836103!5m2!1svi!2s" width="450" height="269" style={{ border: 0, marginTop: '-45px' }} allowFullScreen="" loading="lazy"></iframe>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container-footer-bottom'>
            <p className='pull-left'>Copyright (©) 2021 - Nhật Nguyễn</p> &nbsp;** &nbsp;
            <span style={{ color: '#7FFF00', fontWeight: 600 }}>Đây là dự án phục vụ cho mục đích học tập và thực hành, không vì mục đích lợi nhuận.</span>&nbsp;** &nbsp;
          </div>
        </div>
        <div className='clearfix'></div>
      </Grid>
    </>
  )
}

export default Footer