import React, {Component} from "react";
import image from './image/logo-2.png';
import {
    Link
} from "react-router-dom";
import Nav from './nav.js'
import Cookies from 'js-cookie';
class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            CookiesSignIn: Cookies.get('_sg_bm'),
            CookiesUserId: Cookies.get('_uuXD')
        }
    }
    render(){
        const {CookiesSignIn} = this.state
        const {name} = this.props

        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }

        function deleteCookies(){
            Cookies.set('_uuXD',makeid(30))
            Cookies.set('_sg_bm',makeid(20))
            Cookies.remove('userMail')
        }
        if(CookiesSignIn !== '831171891012155'){
            return(
                <div className="header-component container dis-flex relative align-items justify-content">
                    <div className = "header-logo">
                        <div className = "header-container-image">
                            <Link to="/"><img src = {image} alt="logo"/></Link>
                        </div>
                    </div>
                    <div className="contents">
                        <div className ="header-element relative">
                            <div className="header-user-box absolute">
                                <Link to="/login" className="header-popup" title="Login">Đăng nhập</Link>
                                <Link to="/sign-up" className="header-popup" title="Sign Up">Đăng ký</Link>
                            </div>
                        </div>
                        <nav className="navbar">
                            <Nav></Nav>
                        </nav>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="header-component container dis-flex relative align-items justify-content">
                    <div className = "header-logo">
                        <div className = "header-container-image">
                            <Link to="/"><img src = {image} alt="logo"/></Link>
                        </div>
                    </div>
                    <div className="contents">
                        <div className ="header-element relative">
                            <div className="header-user-box absolute">
                                <div className="header-userName">
                                    <p>Xin chào: {name}</p>
                                    <a href="http://localhost:5000/user/signOut" className="delete-cookie" title="sign out" onClick={deleteCookies}>Đăng xuất</a>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar">
                            <Nav></Nav>
                        </nav>
                    </div>
                </div>
            )            
        }
    }
}

export default Header;