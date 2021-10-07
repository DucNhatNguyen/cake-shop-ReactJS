/* eslint-disable no-console */
import React from 'react'
import HeaderNav from 'component/NavBar/HeadBar'
import NavLogo from 'component/NavBar/NavLogo'
import NavMenu from 'component/NavBar/NavMenu'
import Product from 'component/Content/Product'
import ProducrDetail from 'component/Content/ProductDetail'
import Footer from 'component/Footer/Footer'
import SignIn from 'component/Auth/SignIn'
import SignUp from 'component/Auth/SignUp'
import errorPage from 'component/Error/ErrorPage'
import CartDetail from 'component/Cart/CartDetail'
import CartDelivery from 'component/Cart/CartDelivery'
import OrderSumary from 'component/Cart/OrderSumary'
import ListProduct from 'component/Content/ListProduct'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import './App.css'

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


function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Router>
          <HeaderNav />
          <NavLogo />
          <NavMenu />
          <Switch>
            <Route path="/" exact component={Product} />
            <Route path="/detail/:id" component={ProducrDetail} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/cart-detail" component={CartDetail} />
            <Route path='/cart-delivery' component={CartDelivery} />
            <Route path='/order-summary' component={OrderSumary} />
            <Route path='/list-product/:id' component={ListProduct} />
            <Route path="/:sometring" component={errorPage} />
          </Switch>
          <Footer />
        </Router>
      </Grid>
    </div>
  )
}

export default App
