import React from 'react'
import { shallow } from 'enzyme'
import EntityComponent from '../EntityComponent'

describe('Testing EntityComponent component', () => {
  it('renders correctly with url and title provided', () => {
    const wrapper = shallow(
      <EntityComponent
        title='abc'
        url='https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg'
      />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('#title-component').length).toBe(1)
  })

  it('renders correctly without url and title', () => {
    const wrapper = shallow(
      <EntityComponent />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
