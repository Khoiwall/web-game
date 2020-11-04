import React,{Component} from 'react';
import SignUp from '../component/signUp/signUp.js';
import Header from '../component/header/Header.js'

class SignUpPage extends Component{
    render(){
        return(
            <div className="sign-up">
                <div className="background-singup-page">
                    <Header></Header>
                </div>
                <SignUp></SignUp>
            </div>
        )
    }
}

export default SignUpPage;