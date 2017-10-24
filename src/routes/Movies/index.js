export default (store) => ({
  path : 'movies',
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      const Movies = require('./containers/MoviesContainer').default
      cb(null, Movies)
    }, 'movies')
  }
})
