import React from 'react'
import HeaderNav from 'component/NavBar/HeadBar'
import NavLogo from 'component/NavBar/NavLogo'
import NavMenu from 'component/NavBar/NavMenu'
import Carousell from 'component/Content/Carousel'
import Product from 'component/Content/Product'
import Footer from 'component/Footer/Footer'


function ExportProduct() {
  return (
    <>
      <HeaderNav />
      <NavLogo />
      <NavMenu />
      <Carousell />
      <Product />
      <Footer />
    </>
  )
}

export default ExportProduct