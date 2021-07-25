import React, { useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import CustomButton from '../CustomButton/CustomButton'

const FirstQuestion = () => {
  const history = useHistory()
  const inputText = useRef(null)
  function handleSubmit(event) {
    event.preventDefault()
    const data = {
      serviceComment: event.target.ControlTextarea.value,
    }
    localStorage.setItem('textArea', JSON.stringify(data))
    history.push('/two')
  }

  useEffect(() => {
    const db = JSON.parse(localStorage.getItem('textArea'))
    if (db != null) {
      inputText.current.value = db.serviceComment
    }
  }, [])
  return (
    <Form onSubmit={handleSubmit} className="slide-top">
      <p>How was the service provided? </p>
      <Form.Group className="mb-3" controlId="ControlTextarea">
        <Form.Label>Please answer below</Form.Label>
        <Form.Control as="textarea" rows={3} ref={inputText} />
      </Form.Group>
      <div id="bottom-wizard">
        <CustomButton buttonType="warning" type="submit" link="/two">
          Next
        </CustomButton>
      </div>
    </Form>
  )
}

export default FirstQuestion
