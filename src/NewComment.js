import React, { Component } from 'react'

class NewComment extends Component{
    render(){
        return (
            <div className="row">
                <textarea placeholder="Comment!" className="form-control"></textarea>
            </div>
        )        
    }    
}

export default NewComment