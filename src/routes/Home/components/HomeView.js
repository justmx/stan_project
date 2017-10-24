import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import { Link } from 'react-router'
import '../../../styles/HomeView.scss'
import TitleBar from '../../../components/TitleBar'
import TitleComponent from '../../../components/TitleComponent'

export const HomeView = () => {
  return (
    <div id='home'>
      <TitleBar title='Popular Titles'/>
      <section>
        <Grid>
        <div id='entity_view'>
          <Link to='/series'><TitleComponent title='Series'/></Link>
          <Link to='/movies'><TitleComponent title='Movies'/></Link>
          </div>
        </Grid>
      </section>
    </div>
  )
}

export default HomeView
