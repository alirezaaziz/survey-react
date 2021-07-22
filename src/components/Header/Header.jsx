import React from 'react'
import './Header.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaYoutube, FaTelegram, FaInstagramSquare } from 'react-icons/fa'
// import aparat from './aparat.svg'
import logo from './logo.svg'

import aparatLogo from '../LogoImg/aparat.svg'

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
                  <img src={aparatLogo} alt="aparat logo" />
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
