import React from 'react'
import StickyParallaxHeader from './StickyParallaxHeader'

const index = (props) => {
  // eslint-disable-next-line react/prop-types
  switch (props.headerType) {
    default:
      return <StickyParallaxHeader {...props} />
  }
}

export default index
