import React, { Component } from "react";
import '../asset/css/content-homepage.css'
import GamesHot from '../content-homepage/aGame.js'

class BriefGames extends Component{
    render(){
        const {gameUpdate} = this.props
        return(
            <section className="brief-games game-update">
                <div className = "games-wraper">
                    <div className="container padding-left-right">
                        <div className="box-games">
                            <div className="games-model">
                                <div className="item-navigation">
                                    <div className="nav">
                                        <h2>GAME UPDATE</h2>
                                    </div>
                                </div>
                                <div className="layout-list-games">
                                    {gameUpdate.map((game,index) =>(
                                        <GamesHot key={index} game={game}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BriefGames;