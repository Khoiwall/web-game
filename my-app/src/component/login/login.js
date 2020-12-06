import React, {useState,useEffect} from 'react'
import '../asset/css/login-signup.css'
import { Link } from "react-router-dom"
import axios from 'axios'
const Logins = () => {
    const [emailOrUserName, setEmailOrUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState("")
    useEffect(()=>{
        axios.get('http://localhost:5000/user/apiErrorLogin')
        .then(res=>{
            setErrorLogin(res.data)
        })
    },[])
    return (
        <form action="http://localhost:5000/user/login" method="POST" className="login">
            
            <div className="loginContainer">
                <label>Email or UserName</label>
                <input 
                type="text" 
                autoFocus 
                required 
                value={emailOrUserName} 
                onChange={e => setEmailOrUserName(e.target.value)}
                name="emailOrUserName"
                />
                <label>Mật khẩu</label>
                <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}  
                name="password"
                />
                <p className="errorMsg">{errorLogin}</p>
                <div className="btnContainer">
                <button>Đăng nhập</button>
                            <p>Tạo tài khoản mới
                            <Link to='/sign-up' title="Sign Up">Đăng ký</Link>
                            </p>
                </div> 
            </div>
        </form>
    )
}
export default Logins;