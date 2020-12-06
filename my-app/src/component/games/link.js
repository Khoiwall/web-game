import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class LinkGame extends Component{
    render(){
        const {game} = this.props
        return(
            <div className='link container'>
                <div className='link-name'>
                        LINK TẢI RESIDENT EVIL RESISTANCE
                </div>
                <div className='list-link'>
                    <div><a href={game.link.googleDrive} target="_blank">Part1</a></div>
                </div>
            </div>
        )
    }
}
export default LinkGame;