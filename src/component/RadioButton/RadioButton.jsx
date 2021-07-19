import React, { useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import CustomButton from '../CustomButton/CustomButton'

const RadioButton = () => {
  const checkbox1 = useRef(null)
  const checkbox2 = useRef(null)
  const checkbox3 = useRef(null)
  const checkbox4 = useRef(null)
  const history = useHistory()
  function handleSubmit(event) {
    event.preventDefault()
    const data = {
      checkbox1: event.target.inlineCheckbox1.checked,
      checkbox2: event.target.inlineCheckbox2.checked,
      checkbox3: event.target.inlineCheckbox3.checked,
      checkbox4: event.target.inlineCheckbox4.checked,
    }
    localStorage.setItem('radioButton', JSON.stringify(data))
    history.push('/three')
  }
  useEffect(() => {
    const db = JSON.parse(localStorage.getItem('radioButton'))
    if (db != null) {
      checkbox1.current.checked = db.checkbox1
      checkbox2.current.checked = db.checkbox2
      checkbox3.current.checked = db.checkbox3
      checkbox4.current.checked = db.checkbox4
    }
  })
  return (
    <Form onSubmit={handleSubmit} className="slide-tr">
      <p>Would you recommend our company? </p>
      <div key="inline-checkbox" className="mb-3">
        <ul>
          <li>
            <Form.Check
              inline
              label="No"
              name="group1"
              type="radio"
              id="inlineCheckbox1"
              ref={checkbox1}
            />
          </li>
          <li>
            <Form.Check
              inline
              label="Maybe"
              name="group1"
              type="radio"
              id="inlineCheckbox2"
              ref={checkbox2}
            />
          </li>
          <li>
            <Form.Check
              inline
              label="Probably"
              type="radio"
              name="group1"
              id="inlineCheckbox3"
              ref={checkbox3}
            />
          </li>
          <li>
            <Form.Check
              inline
              label="100% Sure"
              type="radio"
              name="group1"
              id="inlineCheckbox4"
              ref={checkbox4}
            />
          </li>
        </ul>
      </div>
      <CustomButton buttonType="light" type="button" link="/first">
        Prev
      </CustomButton>
      <CustomButton buttonType="warning" type="submit" link="/three">
        Next
      </CustomButton>
    </Form>
  )
}

export default RadioButton
