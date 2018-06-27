import React, { Component } from 'react'
import 'bootstrap-css-only'
import './user.css'

import NewComment from './NewComment'
import Comments from './Comments'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      comments:{},
      isLoggedIn: false,
      user:{}
    }
    this.postNewComment = this.postNewComment.bind(this)

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.props.auth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({ isLoggedIn: true, user })
      }else{
        this.setState({ isLoggedIn: false, user: {} })
      }
    })
  }

  postNewComment(comment){
    comment.user = {
      uid: this.state.user.uid,
      name: this.state.user.displayName,
      photo: this.state.user.photoURL
    }
    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment

    this.setState({
      comments: comments
    })
  }

  auth(provider){
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  render() {
    return (
      <div className="container">
        { 
          this.state.isLoggedIn && (
            <div className="profile-users clearfix">
              <div className="itemdiv memberdiv">
                <div className="inline pos-rel">
                  <div className="user">
                    <img alt={this.state.user.displayName} src={this.state.user.photoURL} />
                  </div>

                  <div className="body">
                    <div className="name">
                      {this.state.user.displayName}
                    </div>
                    <button type="button" className="btn btn-sm btn-primary btn-white btn-round" onClick={() => this.props.auth.signOut()}>
                      <span className="bigger-110">Logout</span>
                    </button>
                  </div>
                </div>
              </div>
              <NewComment postNewComment={this.postNewComment} />
            </div>
          )
        }
        { 
          !this.state.isLoggedIn && (
            <div className="alert alert-info">
              <button type="button" className="btn btn-sm btn-primary btn-white btn-round" onClick={()=>this.auth('facebook')}>
                <span className="bigger-110">Login with Facebook</span>
              </button>
            </div>
          )
        }
        <Comments comments={this.state.comments}/>
      </div>
    )
  }
}

export default App
