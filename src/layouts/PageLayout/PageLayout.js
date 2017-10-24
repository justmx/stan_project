import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import '../../styles/PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className="master-container">
    <Header />
    <div className='main-content'>
      {children}
    </div>
    <Footer />
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
