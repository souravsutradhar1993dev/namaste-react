import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const {status, statusText} = useRouteError();
  return (
    <div>{status} - {statusText}</div>
  )
}

export default Error