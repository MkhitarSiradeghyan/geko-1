import React from 'react'
import { useParams } from 'react-router'

const Details = ({product}) => {
  return (
    <>
    <h1>#{product.id} - {product.title} - {product.price}<span>&#1423;</span></h1>

    </>
  )
}

export default Details