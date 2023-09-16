import React, { Children } from 'react'
import Header from '../layouts/header'

function WithHeader(props) {
  return (
 
    <>
    <Header/> 
    {props.children}
    </>
   
  )
}

export default WithHeader