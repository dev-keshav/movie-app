import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
    const {id} = useParams();
  return (
    <div>SingleMovie ID = {id}</div>
  )
}

export default SingleMovie