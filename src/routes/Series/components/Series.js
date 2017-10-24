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
import './Series.scss'

class Series extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.props.getEntries()
  }

  componentWillUnmount() {
    this.props.clearEntries()
  }

  renderLoading = () => {
    return (
      <Row>
        <span className='message'>isLoading...</span>
      </Row>
    )
  }

  renderError = () => {
    return (
      <Row>
        <span className='message'>Opps. Something went wrong...</span>
      </Row>
    )
  }

  filterSeries = (entries) => {
    const filtered_series = filter(entries, (m) => {
      return m["releaseYear"] >= 2010 && m['programType'] === 'series'
    }).slice(0, 21)
    return orderBy(filtered_series, ['title'],['asc'])
  }

  renderSeries = (entries) => {
    const display_series = this.filterSeries(entries)
    return (
      <div id='entity_view'>
        {display_series.map((serie, index) => {
          return <EntityComponent title={serie.title} url={serie.images['Poster Art']['url']} key={index}/>
        })}
      </div>
    )
  }

  render () {
    const {entries, error, isLoading} = this.props.entries
    let renderContent
    if (isLoading) {
      renderContent = this.renderLoading()
    } else if(error) {
      renderContent = this.renderError()
    } else if (entries.length > 0) {
      renderContent = this.renderSeries(entries)
    }
    return (
      <div id='series'>
        <TitleBar title='Popular Series'/>
          <section>
            <Grid>
              {renderContent}
            </Grid>
          </section>
      </div>
    )
  }
}

Series.propTypes = {
  entries: PropTypes.object,
  router: PropTypes.object,
  getEntries: PropTypes.func,
  clearEntries: PropTypes.func
}

export default Series
