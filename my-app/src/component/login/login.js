import React, {useState,useEffect} from 'react';
import fire from '../filebase/fire.js';
import '../asset/css/login-signup.css';
import { Link } from "react-router-dom";
const Logins = () => {
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
        setNameError('') //1
        setUsernameError(''); //1
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
/*const Login = (props) => {

    const 
    {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        setEmailError, 
        passwordError, 
        setPasswordError
    } = props;*/
    return (
        <section className="login">
            
            <div className="loginContainer">
                <label>Email</label>
                <input 
                type="text" 
                autoFocus 
                required 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Mật khẩu</label>
                <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}  
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                <button onClick={handleLogin}>Đăng nhập</button>
                            <p>Tạo tài khoản mới
                            <Link to='/sign-up' title="Sign Up"><span onClick={() => setHasAccount(!hasAccount)}>Đăng ký</span></Link>
                            </p>
                </div> 
            </div>
        </section>
    )
}
export default Logins;