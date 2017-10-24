import { connect } from 'react-redux'
import Series from '../components/Series'
import { getEntries, clearEntries } from '../../../store/entries'

const mapDispatchToProps = {
  getEntries,
  clearEntries
}

const mapStateToProps = (state) => ({
  entries : state.entries
})

export default connect(mapStateToProps, mapDispatchToProps)(Series)
