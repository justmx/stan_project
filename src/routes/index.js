import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import MoviesRoute from './Movies'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    MoviesRoute(store)
  ]
})

export default createRoutes
