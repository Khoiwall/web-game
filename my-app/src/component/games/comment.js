import React, {Component,useState} from 'react'
class Comment extends Component{
    render(){
        return(
            <div className='comment'>
                <label>BÌNH LUẬN</label>
                <div className='comment-input'>    
                    <input type='text' placeholder='Viết bình luận...' ></input>
                </div>
            </div>
        )
    }
}
export default Comment;