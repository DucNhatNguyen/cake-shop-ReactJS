import React from 'react'
import { Grid,
  Typography,
  Link,
  Container,
  CssBaseline,
  Box,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  makeStyles,
  Breadcrumbs
} from '@material-ui/core'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import './Auth.css'
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '100px auto'
  },
  button: {
    marginBottom: '35px'
  }
}))

function SignUp(props) {
  const theme = createTheme()
  const classes = useStyles()
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      fistname: data.get('firstName'),
      lastname: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      address: data.get('address'),
      isRecive: data.get('isRecive')
    })
  }
  function handleClick(event) {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  return (
    <>
      <Grid item xs></Grid>
      <Grid item xs={6}>
        <div className='breadcrumbAuth'>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                Trang chủ
            </Link>
            <Typography color="textPrimary">Đăng ký</Typography>
          </Breadcrumbs>
        </div>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs" className={classes.root}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Typography component="h1" variant="h4">
                Đăng ký
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="Họ"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Tên"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Mật khẩu"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="address"
                      label="Địa chỉ"
                      type="address"
                      id="address"
                      autoComplete="new-address"
                      className={classes.button}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      name='isRecive'
                      control={<Checkbox value="true" color="primary" />}
                      label="Tôi muốn nhận thông báo sản phẩm mới, chương trình khuyến mãi qua email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disableElevation
                  className={classes.button}
                >
                    Đăng nhập
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                  Đã có tài khoản?&nbsp;
                    <Link href="#" variant="body2">
                   Đăng nhập ngay
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Grid>
      <Grid item xs></Grid>
    </>
  )
}

export default SignUp