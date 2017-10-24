import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import '../styles/TitleComponent.scss'

const TitleComponent = ({ title }) => (
  <div id='title-component'>
    <div className='image'> <span className='main_title pull-right'>{title}</span></div>
    <div><span className='title'>Popular {title}</span></div>
  </div>
)
TitleComponent.propTypes = {
  title: PropTypes.string
}

export default TitleComponent
