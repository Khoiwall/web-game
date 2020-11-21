import React, {Component} from "react";
import '../asset/css/header-banner.css';
import { Link } from "react-router-dom";

class DetailGameBrief extends Component{
    render(){
        const {game} = this.props
        return(
            <div className="wrap">
                <div className="inner">
                    <div className="title">{game.name}</div>
                    <div className="describe-game">{game.description.numberOne}</div>
                    <div className="button-see-game">
                        <Link to={'/games/' + game.NamePage} title='See More'>See More</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailGameBrief;

