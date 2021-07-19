import React from 'react'
import './CustomButton.css'
import { Button } from 'react-bootstrap'

const CustomButton = ({ buttonType, type = 'button', children }) => {
  return (
    <Button variant={buttonType} type={type} className="btn">
      {children}
    </Button>
  )
}

export default CustomButton
