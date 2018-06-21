import React from 'react'
import { shallow, mount, render } from 'enzyme'
import App from './App'

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toBe(1)
  })

  it('should have .container class', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.is('.container')).toBe(true)
  })

  it('shows Comments', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Comments').length).toBe(1)
  })

  it('shows NewComment', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('NewComment').length).toBe(1)
  })

  it('adds a new comment to state when postNewComment is called', () => {
    const wrapper = mount(<App />)
    wrapper.instance().postNewComment({comment: 'automatic comment'})
    wrapper.instance().postNewComment({comment: 'automatic comment'})
    wrapper.instance().postNewComment({comment: 'automatic comment'})
    const comments = Object.keys(wrapper.instance().state.comments)
    expect(comments.length).toBe(3)
  })

  it('outputs the <App />'), () => {
    const wrapperShallow = shallow(<App />) // Test only this component
    const wrapperMount = mount(<App />)     // Test DOM interactions and life cycle
    const wrapperRender = render(<App />)   // Test HTML

    console.log(wrapperShallow.debug())
    //console.log(wrapperMount.debug())
    //console.log(wrapperRender.html())
  }
})
