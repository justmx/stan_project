import React, { Component } from 'react'
import { Link } from 'react-router'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Button from 'react-bootstrap/lib/Button'
import { LinkContainer } from 'react-router-bootstrap'
require('../../styles/Footer.scss')

export default (props) => {
  return (
    <footer className="footer-container">
      <Grid>
        <Row>
          <Col md={2} sm={4} className="footer-item-container">
            <Link to="#">Home</Link>
          </Col>
          <Col md={2} sm={4} className="footer-item-container">
            <Link to="#">Terms and Conditions</Link>
          </Col>
          <Col md={2} sm={4} className="footer-item-container">
            <Link to="#">Privicy Policy</Link>
          </Col>
          <Col md={2} sm={4} className="footer-item-container">
            <Link to="#">Collection Statement</Link>
          </Col>
          <Col md={2} sm={4} className="footer-item-container">
            <Link to="#">Help</Link>
          </Col>
          <Col md={2} sm={4} className="footer-item-container">
           <Link to="#">Manage Account</Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} >
            <span className='copyright'>Copyright 2016 DEMO Streaming All Rights Reserved.</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4} md={4} lg={4} className='social'>
           <Link to="#"><img src={require('../../assets/facebook-white.svg')}/></Link>
            <Link to="#"><img src={require('../../assets/twitter-white.svg')}/></Link>
            <Link to="#"><img src={require('../../assets/instagram-white.svg')}/></Link>
          </Col>
          <Col xs={12} sm={8} md={8} lg={8} className='stores'>
            <div className='pull-right'>
              <Link to="#"><img src={require('../../assets/app-store.svg')}/></Link>
              <Link to="#"><img src={require('../../assets/play-store.svg')}/></Link>
              <Link to="#"><img src={require('../../assets/windows-store.svg')}/></Link>
            </div>
          </Col>
        </Row>
      </Grid>
    </footer>
  )
}
