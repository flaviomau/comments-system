import React, { Component } from 'react'

class Comment extends Component{
    render (){
        return (
            <div className='card'>
                <p className='card-body'>
                    {this.props.comment.comment}
                </p>
            </div>
        )
    }
}

export default Comment