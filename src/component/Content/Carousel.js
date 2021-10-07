import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { Carousel } from 'react-carousel-minimal'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './Content.css'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 0
  }
}))

const data = [
  {
    image: 'https://bakeryshopdemo.trungquandev.com/images/slide/trungquandev-slide-4.jpg',
    caption: ''
  },
  {
    image: 'https://i.pinimg.com/originals/56/bb/e2/56bbe2d35ee373006796310183fcf427.jpg',
    caption: ''
  },
  {
    image: 'https://i.pinimg.com/originals/84/00/3f/84003f209b265a4a08dc80b521d8997b.jpg',
    caption: ''
  }
]

function Carousell(props) {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={12} style={{ paddingTop: 0 }}>
        <Carousel
          data={data}
          time={2000}
          width="1519px"
          height="500px"
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          style={{
            textAlign: 'center',
            maxWidth: '1519px',
            maxHeight: '500px'
          }}
        />
      </Grid>
    </>
  )
}

export default Carousell