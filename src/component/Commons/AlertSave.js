import React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function AlertSave(props) {
  const { open, AlertTitle, AlterType } = props

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} >
        <Alert severity={AlterType} sx={{ width: '100%' }}>
          {AlertTitle}
        </Alert>
      </Snackbar>
    </Stack>
  )
}

export default AlertSave