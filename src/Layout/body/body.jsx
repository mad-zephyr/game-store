import React from 'react'
import './body.sass'

const Body = (props) => {
  const {children} = props

  return (
    <div className="content"> 
      {children}
      
    </div>
  )
}

export default Body

