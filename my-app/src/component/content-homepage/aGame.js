import React, { Component } from "react";
import '../asset/css/content-homepage.css';
import { Link } from "react-router-dom";

class GamesHotMonth extends Component{
    render(){
        return(
            <div className="game-review-item">
                <Link to='/games/'>
                    <figure>
                        <img src='http://demo.themexpert.com/wordpress/gamez/wp-content/uploads/2016/06/The-Witcher-3-Wild-Hunt.jpg' alt></img>
                    </figure>
                </Link>
                <Link to='/games/'>
                    <h3 className="name-games">Demo</h3>
                </Link>
            </div>
        )
    }
}

export default GamesHotMonth;