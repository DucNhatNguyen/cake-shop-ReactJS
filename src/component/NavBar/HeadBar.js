import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './NavBar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#7FFFD4'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

function HeadBar(props) {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={6} style={{ padding: 6, backgroundColor: '#7FFFD4' }}>
        <div className='contact-header-info'>
          <div className='email-contact-header box-header'><FontAwesomeIcon icon={faEnvelope}/> shopcake@gmail.com</div>
          <div className='phone-contact-header box-header'><FontAwesomeIcon icon={faPhone}/> +84 8876 774</div>
        </div>
      </Grid>
      <Grid item xs={6} style={{ padding: 6, backgroundColor: '#7FFFD4' }}>
        <div className='authen-header'>
          <div className='sign-up box-header'><Link to='/signin'><FontAwesomeIcon icon={faSignInAlt}/> Đăng nhập</Link></div>
          <div className='sign-in box-header'><Link to='/signup'><FontAwesomeIcon icon={faUser}/> Đăng ký</Link></div>
        </div>
      </Grid>
    </>
  )
}

export default HeadBar