import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import HomePage from './pages/homepage.js';
import LoginPage from './pages/loginpage.js';
import SingUpPage from './pages/signuppage.js';
import GamePage from './pages/gamePage.js'
import Loading from './component/loader/loading.js'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      listgame: []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/games/list-game')
    .then(res=>{
        this.setState({
          listgame: res.data
        })
    })
    .catch(()=>console.log('khoi'))
}
  render(){
    const {listgame} = this.state
    return (
      <Router>
        <div className="App">
            <Route path='/' exact component={HomePage}><HomePage listgame={listgame}/></Route>
            <Route path='/login' exact component={LoginPage}><LoginPage/></Route>
            <Route path='/sign-up' exact component={SingUpPage}><SingUpPage/></Route>
            {listgame.map((game,index)=>(
              <Route path={"/games/" + game.NamePage} exact component={GamePage} key={index} ><GamePage game={game}/></Route>
            ))}
        </div>
      </Router>
    );
  }
}

export default App;
