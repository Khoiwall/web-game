import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import HomePage from './pages/homepage.js';

function App() {
  return (
    <Router>
      <div className="App">
          <Route path='/' exact component={HomePage}></Route>
      </div>
    </Router>
  );
}

export default App;
