import React, {Component} from 'react'
import '../asset/css/comment.css'

class displayComment extends Component{
    render(){
        const {game} = this.props
        if (game.comment.length > 0){
            return(
                <div className="display comment container">
                    <div className="wrapper">
                        {game.comment.map(item=>(
                            <div className="wrapper-comment">
                                <div className="avatar">
                                    <div className="image-avatar">
                                        <img src="https://st.quantrimang.com/photos/image/072015/22/avatar.jpg" alt="avatar" style={{"width": "50px", "height": "50px", "borderRadius": "50%"}}></img>
                                    </div>
                                </div>
                                <div className="form-comment">
                                    <div>
                                        <div className="full-name">
                                            <h6 style={{"color":"black"}}>{item.commenter}</h6>    
                                        </div>
                                        <div className="content-comment">
                                            {item.contentComment}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="display comment nobody-comment"></div>
            )
        }
    }
}

export default displayComment