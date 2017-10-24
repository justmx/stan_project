import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import '../styles/EntityComponent.scss'

const EntityComponent = ({ url, title }) => (
  <div id='title-component'>
    <img src={url} className='image'/>
    <div><span className='title'>{title}</span></div>
  </div>
)

EntityComponent.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
}

export default EntityComponent
