import React, { useRef, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import CustomButton from '../CustomButton/CustomButton'

const ThirdQuestion = () => {
  const history = useHistory()
  const checkbox1 = useRef(null)
  const checkbox2 = useRef(null)
  const checkbox3 = useRef(null)
  const checkbox4 = useRef(null)
  function handleSubmit(event) {
    event.preventDefault()
    const data = {
      checkbox1: event.target.inlineCheckbox1.checked,
      checkbox2: event.target.inlineCheckbox2.checked,
      checkbox3: event.target.inlineCheckbox3.checked,
      checkbox4: event.target.inlineCheckbox4.checked,
    }
    localStorage.setItem('checkbox', JSON.stringify(data))
    localStorage.setItem('activeTimer', false)
    history.push('/end')
  }
  useEffect(() => {
    const db = JSON.parse(localStorage.getItem('checkbox'))
    if (db != null) {
      checkbox1.current.checked = db.checkbox1
      checkbox2.current.checked = db.checkbox2
      checkbox3.current.checked = db.checkbox3
      checkbox4.current.checked = db.checkbox4
    }
  })
  //  label, type, id, ref, group
  return (
    <Form onSubmit={handleSubmit} className="slide-top">
      <p>How did you hear about us? </p>
      <div key="inline-checkbox" className="mb-3">
        <ul>
          <li>
            <Form.Check
              inline
              label="Google and Search Engines"
              name="group1"
              type="checkbox"
              id="inlineCheckbox1"
              ref={checkbox1}
            />
          </li>
          <li>
            <Form.Check
              inline
              label="Emails or Newsletter"
              name="group1"
              type="checkbox"
              id="inlineCheckbox2"
              ref={checkbox2}
            />
          </li>
          <li>
            <Form.Check
              inline
              label="Friends or other people"
              type="checkbox"
              name="group1"
              id="inlineCheckbox3"
              ref={checkbox3}
            />
          </li>
          <li>
            <Form.Check
              inline
              label="other"
              type="checkbox"
              name="group1"
              id="inlineCheckbox4"
              ref={checkbox4}
            />
          </li>
        </ul>
      </div>
      <div id="bottom-wizard">
        <CustomButton buttonType="light" link="/three">
          Prev
        </CustomButton>
        <CustomButton buttonType="success" type="submit">
          Submit
        </CustomButton>
      </div>
    </Form>
  )
}

export default ThirdQuestion
