import { connect } from 'react-redux'
import Movies from '../components/Movies'
import { getEntries, clearEntries } from '../../../store/entries'

const mapDispatchToProps = {
  getEntries,
  clearEntries
}

const mapStateToProps = (state) => ({
  entries : state.entries
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
