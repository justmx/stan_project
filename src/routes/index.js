import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import MoviesRoute from './Movies'
import SeriesRoute from './Series'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    MoviesRoute(store),
    SeriesRoute(store)
  ]
})

export default createRoutes
