import React from 'react'
import { useParams } from 'react-router'

const Details = () => {
const {id} = useParams()
  return (
    <h1>Product: {id}</h1>
  )
}

export default Details