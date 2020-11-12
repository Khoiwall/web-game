import React, {useState,useEffect} from 'react';
import fire from '../firebase/fire.js';
import '../asset/css/login-signup.css';
import { Link } from "react-router-dom";

//export default function() {
const Signup = () => {
    const [user, setUser] = useState("");
    const [name, setName] = useState(""); 
    const [username, setUsername] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState(""); 
    const [usernameError, setUsernameError] = useState(""); 
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
    const clearInput = () => {
        setName(''); 
        setUsername(''); 
        setEmail('');
        setPassword('');
      }
    
      const clearErrors = () => {
        setNameError('') 
        setUsernameError(''); 
        setEmailError('');
        setPasswordError('');
      }
      const handleLogin = () => {
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
              switch (err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                  setEmailError(err.message);
                  break;
                case "auth/wrong-password":
                  setPasswordError(err.message);
                  break;
              } 
          }
        );
      };
      const handleSignup = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
              switch (err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                  setEmailError(err.message);
                  break;
                case "auth/weak-password":
                  setPasswordError(err.message);
                  break;
              } 
          }
        );
      }
      const handleLogout = () => {
        fire.auth().signOut();
      }
      const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
          if (user) {
            clearInput();
            setUser(user);
          }
          else {
            setUser("");
          }
        });
      }
      useEffect(() => {
        authListener();
      }, [])
    
/*const Signup = (props) => {

    const {
        name,
        setName,
        username,
        setUsername,
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount,
        nameError,
        setNameError,
        usernameError,
        setUsernameError,
        emailError, 
        setEmailError, 
        passwordError, 
        setPasswordError} = props;*/
    return(
        <form action='signUp' method="POST" className="login">
            
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
                <p className="errorMsg">{nameError}</p>
                <label>Email</label>
                <input 
                type="text" 
                autoFocus 
                required 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                name="email"
                />
                <p className="errorMsg">{emailError}</p>
                <label>Tên đăng nhập</label>
                <input 
                type="text" 
                autoFocus 
                required 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                name="username"
                />
                <p className="errorMsg">{usernameError}</p>
                <label>Mật khẩu</label>
                <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}  
                name="password"
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                <button onClick={handleSignup}>Đăng ký</button>
                            <p>Bạn đã có tài khoản ? 
                                <Link to='/login' title='Login'><span onClick={() => setHasAccount(!hasAccount)}>Đăng nhập</span></Link>
                            </p>     
                </div> 
            </div>
        </form>
    )
}
export default Signup;