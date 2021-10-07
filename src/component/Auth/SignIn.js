import React from 'react'
import { Grid,
  Typography,
  Link,
  Container,
  CssBaseline,
  Box,
  Avatar,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  makeStyles,
  Breadcrumbs
} from '@material-ui/core'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '100px auto'
  },
  button: {
    marginBottom: '35px'
  }
}))

function SignIn(props) {
  const theme = createTheme()
  const classes = useStyles()
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password')
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
            <Typography color="textPrimary">Đăng nhập</Typography>
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
              <Typography component="h1" variant="h5">
            Đăng nhập
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="outlined"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="outlined"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disableElevation
                  sx={{ mt: 3, mb: 2 }}
                  className={classes.button}
                >
                Đăng nhập
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                  Quên mật khẩu
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {'Không có tài khoản? Đăng ký ngay'}
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

export default SignIn