import React, {Component} from 'react'

class displayComment extends Component{
    render(){
        const {game} = this.props
        if (game.comment.length > 0){
            return(
                <div className="display comment">
                    <div className="wrapper">
                        <div className="wrapper-comment">
                            <div className="avatar">
                                <div>sadasdas</div>
                            </div>
                            <div className="form-comment">
                                <div>
                                    <div className="full-name">
                                        {game.comment[0].commenter}    
                                    </div>
                                    <div className="content-comment">
                                        {game.comment[0].contentComment}
                                    </div>
                                </div>
                            </div>
                        </div>
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