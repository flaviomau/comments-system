import React from 'react'
import { shallow } from 'enzyme'
import Comments from './Comments'

describe('<Comments />', () => {
  const comments = {
    1:{
        comment: 'test'
    },
    2:{
        comment: 'test'
    },
    3:{
        comment: 'test'
    },  
  }

  it('renders without crashing', () => {    
    const wrapper = shallow(<Comments comments={comments}/>)
    expect(wrapper.length).toBe(1)
    expect(wrapper.find('Comment').length).toBe(3)
  })
})