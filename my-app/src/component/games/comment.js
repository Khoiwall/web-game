import React, {Component} from 'react'
import Cookies from 'js-cookie'
class Comment extends Component{
    constructor(props){
        super(props)
        this.state = {
            contentComment: '',
            cookieUserId: Cookies.get('_uuId'),
            cookieUserMail: Cookies.get('userMail'),
            cookieSignIn: Cookies.get('_sg_bm') 
        }
    }
    render(){
        const {contentComment,cookieUserId,cookieUserMail,cookieSignIn} = this.state
        const {game} = this.props
        function setExitCookie(event){
            if(cookieSignIn !== '831171891012155'){
                event.preventDefault()
            }
        }
        function errorCookie(){
            if(cookieSignIn !== '831171891012155'){
                return 'Bạn cần phải đăng nhập để có thể bình luận'
            }
            else{
                return ''
            }
        }
        return(
            <form onSubmit={setExitCookie} action="http://localhost:5000/user/comment" method="POST" className="from-comment container">
                <div className='comment'>
                    <label>BÌNH LUẬN</label>
                    <div className='comment-input'>    
                        <input type='text' placeholder='Viết bình luận...' name="content" value={contentComment} onChange={e=>this.setState({
                            contentComment: e.target.value
                        })}></input>
                        <input type="text" name="nameGame" value={game.name} style={{'display': 'none'}}></input>
                    </div>
                    <div className="button-comment">
                        <button>Bình Luận</button>
                        <div className="err-cookie">
                            <p>{errorCookie()}</p>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
export default Comment;