import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'

class Comment extends Component{
    render (){
        return (
            <div className="profile-activity clearfix">
                <div>
                    <img className="pull-left" alt={this.props.comment.user.name} src={this.props.comment.user.photo} />
                    <span className="user"> {this.props.comment.user.name} </span>
					<div className="time">
                        <i className="ace-icon fa fa-comments bigger-125"></i>
                        <span className="text">{this.props.comment.comment}</span>
				    </div>
                </div>
            </div>

        )
    }
}

export default Comment