import React, {Component} from "react";
import '../asset/css/header-banner.css';
import { Link } from "react-router-dom";

class DetailGameBrief extends Component{
    render(){
        const {games} = this.props
        return(
            <div className="wrap">
                <div className="inner">
                    <div className="title">{games.title}</div>
                    <div className="describe-game">{games.describe}</div>
                    <div className="button-see-game">
                        <Link to='/game/sdsdsad' title='See More'>See More</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailGameBrief;

