export default (store) => ({
  path : 'series',
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      const Series = require('./containers/SeriesContainer').default
      cb(null, Series)
    }, 'series')
  }
})
