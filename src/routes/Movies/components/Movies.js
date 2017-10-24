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

  filterMovies = (entries) => {
    const filtered_movies = filter(entries, (m) => {
      return m["releaseYear"] >= 2010 && m['programType'] === 'movie'
    }).slice(0, 21)
    return orderBy(filtered_movies, ['title'],['asc'])
  }

  renderMovies = (entries) => {
    const display_movies = this.filterMovies(entries)
    return (
      <div id='entity_view'>
        {display_movies.map((movie, index) => {
          return <EntityComponent title={movie.title} url={movie.images['Poster Art']['url']} key={index}/>
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
      renderContent = this.renderMovies(entries)
    }
    return (
      <div className='' id='movie'>
        <TitleBar title='Popular Movies'/>
          <section>
            <Grid>
              {renderContent}
            </Grid>
          </section>
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
