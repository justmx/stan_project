import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Button,
  Grid
} from 'react-bootstrap'
import { filter, orderBy } from 'lodash'
import TitleBar from '../../../components/TitleBar'
import EntityComponent from '../../../components/EntityComponent'
import '../../../styles/Movies.scss'

class Movies extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div className='' id='movie'>
        Movie View
      </div>
    )
  }
}

Movies.propTypes = {
  entries: PropTypes.object,
  router: PropTypes.object,
  getEntries: PropTypes.func,
  clearEntries: PropTypes.func
}

export default Movies
