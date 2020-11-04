import React,{Component} from 'react';
import Login from '../component/login/login.js';
import Header from '../component/header/Header.js'

class loginpage extends Component{
    render(){
        return(
            <div className="login-page">
                <div className="background-login-page">
                    <Header></Header>
                </div>
                <Login></Login>
            </div>
        )
    }
}

export default loginpage;