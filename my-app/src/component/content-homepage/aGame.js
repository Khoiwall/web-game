import React, { Component } from "react";
import '../asset/css/content-homepage.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

class GamesHotMonth extends Component{
    render(){
        const {game} = this.props
        return(
            <div className="game-review-item">
                <Link to={'/games/' + game.NamePage} title={game.title}>
                    <figure>
                        <div className="image-game" style={{backgroundImage: 'url("' + game.imageBackgourndGames + '")'}}>
                            <div className="backgournd-color"></div>
                        </div>
                        <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon>
                    </figure>
                </Link>
                <Link to={'/games/' + game.NamePage} style={{display: "block"}} title={game.name}>
                    <h5 className="name-games">{game.name}</h5>
                </Link>
            </div>
        )
    }
}

export default GamesHotMonth;