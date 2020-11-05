import React,{Component} from 'react';
import Login from '../component/login/login.js';
import Header from '../component/header/Header.js'
import { Helmet } from 'react-helmet';
class loginpage extends Component{
    render(){
        return(
            <div className="login-page">
                <Helmet>
                    <title> Đăng nhập tài khoảng </title>
                </Helmet>
                <div className="background-login-page">
                    <Header></Header>
                </div>
                <Login></Login>
            </div>
        )
    }
}

export default loginpage;