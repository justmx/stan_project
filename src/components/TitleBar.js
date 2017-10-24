import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import '../styles/TitleBar.scss'

export const TitleBar = ({ title }) => (
  <div className="title-bar">
    <Grid>
      <Row>
        <Col xs={12} className='title-col'>
          <span className='title'>{title}</span>
        </Col>
      </Row>
    </Grid>
  </div>
)
TitleBar.propTypes = {
  title: PropTypes.string
}

export default TitleBar
