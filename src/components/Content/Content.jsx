import React, { useEffect, useState, useCallback } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Content.css'
import { Switch, Route, useHistory } from 'react-router-dom'
import survey from './main_icon_1.svg'
import CheckBox from '../Checkbox/CheckBox'
import RadioButton from '../RadioButton/RadioButton'
import TextArea from '../TextArea/TextArea'
import ResultPage from '../ResultPage/ResultPage'
import UserDetail from '../UserDetail/UserDetail'

// initialize timeLeft with the seconds prop

const Content = () => {
  const history = useHistory()
  let time = 120
  if (localStorage.getItem('countdown') != null) {
    time = localStorage.getItem('countdown')
  }
  const [timeLeft, setTimeLeft] = useState(time)
  const [activeTimer, setActiveTimer] = useState(true)

  const start = useCallback((input) => {
    setActiveTimer(input)
  }, [])
  useEffect(() => {
    if (timeLeft <= 0) {
      setActiveTimer(false)
      setTimeLeft(120)
      localStorage.setItem('countdown', timeLeft)
      history.push('/end')
    } else if (activeTimer === true) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      localStorage.setItem('countdown', timeLeft)
      return () => clearInterval(interval)
    } else if (activeTimer !== true) {
      setTimeLeft(120)
      localStorage.setItem('countdown', timeLeft)
    }
    return null
  }, [timeLeft])
  return (
    <div className="wrapper_centering">
      <div className="container_centering">
        <Container>
          <div className="timer">{timeLeft}</div>
          <Row className="justify-content-between main-content">
            <Col xl={6} className="main_title_1">
              <h3>
                {' '}
                <img
                  src={survey}
                  alt="survey"
                  style={{ width: '80px', height: '80px' }}
                />
                SURVEY
              </h3>
              <p>
                Our survey platform makes it easy to measure and understand
                feedback so you can drive growth and innovation.{' '}
              </p>
              <p>
                <em>-The Satisfy Team</em>
              </p>
            </Col>
            <Col xl={5} lg={6} className="main_title_1">
              <Switch>
                <Route exact path="/">
                  <UserDetail />
                </Route>
                <Route path="/first">
                  <TextArea />
                </Route>
                <Route path="/two">
                  <RadioButton />
                </Route>
                <Route path="/three">
                  <CheckBox timer={start} />
                </Route>
                <Route path="/end">
                  <ResultPage />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Content
