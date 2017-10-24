import React, { Component } from 'react'
import { Link } from 'react-router'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Button from 'react-bootstrap/lib/Button'
import find from 'lodash/find'
import { connect } from 'react-redux'
require('../../styles/Header.scss')

export default (props) => {
  return (
    <div className="navbar-container">
      <Grid>
        <Row>
          <Col xs={12} sm={8} className="logo">
            <Link to='/' id='icon'><span className='demo'>DEMO Streaming</span></Link>
          </Col>
          <Col xs={12} sm={4} className="login-section">
            <Link to='#' className="login">Log in</Link>
            <Button href="#" className="free-try">Start your free trial</Button>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}
