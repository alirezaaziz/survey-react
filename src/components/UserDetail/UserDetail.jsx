import React, { useEffect, useRef } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import CustomButton from '../CustomButton/CustomButton'

const UserDetail = () => {
  const inputName = useRef(null)
  const inputLastName = useRef(null)
  const inputEmail = useRef(null)
  const radioMale = useRef(null)
  const radioFemale = useRef(null)
  const history = useHistory()
  function handleSubmit(event) {
    localStorage.setItem('activeTimer', true)
    event.preventDefault()
    const data = {
      name: event.target.formGridName.value,
      lastName: event.target.formGridLastName.value,
      email: event.target.formGridEmail.value,
      genderMale: event.target.male.checked,
      genderFemale: event.target.female.checked,
    }
    localStorage.setItem('userDetail', JSON.stringify(data))
    history.push('/first')
  }
  useEffect(() => {
    const db = JSON.parse(localStorage.getItem('userDetail'))
    if (db != null) {
      inputName.current.value = db.name
      inputLastName.current.value = db.lastName
      inputEmail.current.value = db.email
      radioMale.current.checked = db.genderMale
      radioFemale.current.checked = db.genderFemale
    }
  }, [])
  return (
    <Form onSubmit={handleSubmit} className="slide-tr">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={inputName} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>LastName</Form.Label>
          <Form.Control ref={inputLastName} />
        </Form.Group>
      </Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={inputEmail} />
      </Form.Group>

      <fieldset>
        <Form.Group as={Col} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Gender
          </Form.Label>

          <Form.Check
            inline
            type="radio"
            label="Male"
            name="formHorizontalRadios"
            id="male"
            ref={radioMale}
          />
          <Form.Check
            inline
            type="radio"
            label="Female"
            name="formHorizontalRadios"
            id="female"
            ref={radioFemale}
          />
        </Form.Group>
      </fieldset>
      <div id="bottom-wizard">
        <CustomButton buttonType="success" type="submit">
          Submit
        </CustomButton>
      </div>
    </Form>
  )
}

export default UserDetail
