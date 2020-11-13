import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class LinkGame extends Component{
    render(){
        return(
            <div className='link'>
                <div className='link-name'>
                        LINK TẢI RESIDENT EVIL RESISTANCE
                </div>
                <div className='list-link'>
                    <div><Link to='/'>Part1</Link></div>
                    <div><Link to='/'>Part2</Link></div>
                </div>
            </div>
        )
    }
}
export default LinkGame;