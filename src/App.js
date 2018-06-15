import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      comments:{
        1: {
          comment: 'first comment'
        },
        2: {
          comment: 'second comment'
        }
      }
    }
  }

  postNewComment(comment){
    this.setState({
      comments:{
        ...this.state.comments, comment
      }
    })
  }

  render() {
    return (
      <div className="container">
        <NewComment postNewComment={this.postNewComment}/>
        <Comments comments={this.state.comments}/>
      </div>
    )
  }
}

export default App
