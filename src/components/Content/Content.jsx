import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Content.css'
import { useHistory } from 'react-router-dom'
import survey from '../LogoImg/main_icon_1.svg'

const Content = ({ children }) => {
  const history = useHistory()
  let time = 120
  if (localStorage.getItem('countdown') != null) {
    time = localStorage.getItem('countdown')
  }
  const [timeLeft, setTimeLeft] = useState(time)

  localStorage.setItem('activeTimer', false)
  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(120)
      localStorage.setItem('activeTimer', false)
      localStorage.setItem('countdown', timeLeft)
      history.push('/end')
      console.log('timeleft <=0')
    } else if (localStorage.getItem('activeTimer') === true) {
      console.log('activeTimer=true ')
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      localStorage.setItem('countdown', timeLeft)
      return () => clearInterval(interval)
    } else if (localStorage.getItem('activeTimer') !== true) {
      console.log('activeTimer=false ')
      setTimeLeft(120)
      localStorage.setItem('countdown', timeLeft)
    }
    return null
  }, [timeLeft, 1])
  return (
    <div className="wrapper_centering">
      <div className="container_centering">
        <Container>
          <div className="timer">{timeLeft}</div>
          <Row className="justify-content-between main-content">
            <Col xl={6} className="main_title_1">
              <h3>
                <img
                  src={survey}
                  alt="survey"
                  style={{ width: '80px', height: '80px' }}
                />
                SURVEY
              </h3>
              <p>
                Our survey platform makes it easy to measure and understand
                feedback so you can drive growth and innovation.
              </p>
              <p>
                <em>-The Satisfy Team</em>
              </p>
            </Col>
            <Col xl={5} lg={6} className="main_title_1">
              {children}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Content
