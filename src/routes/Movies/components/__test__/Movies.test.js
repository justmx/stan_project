import React from 'react'
import { shallow } from 'enzyme'
import Movies from '../Movies'
import EntityComponent from '../../../../components/EntityComponent'
import { isLoading, hasEntries, hasError } from '../../../../utils/mockData'

describe('Testing Movies component', () => {
  it('renders loading message if isLoading is true', () => {
    const wrapper = shallow(
      <Movies
        entries={isLoading}
      />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.message').length).toBe(1)
    expect(wrapper.contains(<span className='message'>isLoading...</span>))
  })

  it('renders EntityComponent if entries not empty', () => {
    const wrapper = shallow(
      <Movies
        entries={hasEntries}
      />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(EntityComponent).length).toBe(21)
  })

  it('renders error message if there is error', () => {
    const wrapper = shallow(
      <Movies
        entries={hasError}
      />
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.message').length).toBe(1)
    expect(wrapper.contains(<span className='message'>Opps. Something went wrong...</span>))
  })
})
