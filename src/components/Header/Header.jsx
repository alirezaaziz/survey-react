import React from 'react'
import './Header.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaYoutube, FaTelegram, FaInstagramSquare } from 'react-icons/fa'
import aparat from '../LogoImg/aparat.svg'
import logo from '../LogoImg/logo.svg'

const Header = () => (
  <header>
    <Container fluid>
      <Row className="">
        <Col xs={5}>
          <a href="/">
            <img src={logo} alt="logo survey" className="logo" />
          </a>
        </Col>
        <Col xs={7}>
          <div id="social">
            <ul>
              <li>
                <a href="//#endregion">
                  <FaInstagramSquare
                    style={{
                      width: '1.5em',
                      height: '1.5em',
                      color: 'white',
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="//#endregion">
                  <FaTelegram
                    style={{
                      width: '1.5em',
                      height: '1.5em',
                      color: 'white',
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="//#endregion">
                  <FaYoutube
                    style={{
                      width: '1.5em',
                      height: '1.5em',
                      color: 'white',
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="//#endregion">
                  <img src={aparat} alt="aparat logo" />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </header>
)

export default Header
