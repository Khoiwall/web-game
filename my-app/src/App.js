import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import HomePage from './pages/homepage.js';
import LoginPage from './pages/loginpage.js';
import SingUpPage from './pages/signuppage.js'

function App() {
  return (
    <Router>
      <div className="App">
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/login' exact component={LoginPage}></Route>
          <Route path='/sign-up' exact component={SingUpPage}></Route>
      </div>
    </Router>
  );
}

export default App;
