import React, {useState,useEffect} from 'react';
import '../asset/css/login-signup.css';
import { Link } from "react-router-dom";
import axios from 'axios';
 
//export default function() {
const Signup = () => {
    const [name, setName] = useState(""); 
    const [username, setUsername] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({})
    useEffect(()=>{
      axios.get('http://localhost:5000/user/apiErrorSignUp')
      .then(res=>{
          setError(res.data)
      })
    },{})
      return(
        <form action='http://localhost:5000/user/sign-up' method="POST" className="login">
            
            <div className="loginContainer">
                <label>Tên của bạn</label>
                <input 
                type="text" 
                autoFocus 
                required 
                value={name} 
                onChange={e => setName(e.target.value)}
                name="name"
                />
                <label>Email</label>
                <input 
                type="text" 
                autoFocus 
                required 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                name="email"
                />
                <p className="errorMsg">{error.email}</p>
                <label>Tên đăng nhập</label>
                <input 
                type="text" 
                autoFocus 
                required 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                name="username"
                />
                <p className="errorMsg">{error.username}</p>
                <label>Mật khẩu</label>
                <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}  
                name="password"
                />
                <p className="errorMsg">{error.password}</p>
                <div className="btnContainer">
                <button>Đăng ký</button>
                            <p>Bạn đã có tài khoản ? 
                                <Link to='/login' title='Login'>Đăng nhập</Link>
                            </p>     
                </div> 
            </div>
        </form>
      )
}
export default Signup;